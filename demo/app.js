class Gig {
  constructor(task, author, badge) {
    this.task = task;
    this.author = author;
    this.badge = badge;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayGigs() {
    const gigs = Store.getGigs();

    gigs.forEach((gig) => UI.addGigToList(gig));
  }

  static addGigToList(gig) {
    const list = document.querySelector('#gig-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${gig.task}</td>
      <td>${gig.author}</td>
      <td>${gig.badge}</td>
      <td><a href="#" class="btn btn-warning btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteGig(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#gig-form');
    container.insertBefore(div, form);

    // TimeOut Message
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#task').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#badge').value = '';
  }
}

// Storage Class: Handles Storage
class Store {
  static getGigs() {
    let gigs;
    if(localStorage.getItem('gigs') === null) {
      gigs = [];
    } else {
      gigs = JSON.parse(localStorage.getItem('gigs'));
    }

    return gigs;
  }

  static addGig(gig) {
    const gigs = Store.getGigs();
    gigs.push(gig);
    localStorage.setItem('gigs', JSON.stringify(gigs));
  }

  static removeGig(badge) {
    const gigs = Store.getGigs();

    gigs.forEach((gig, index) => {
      if(gig.badge === badge) {
        gigs.splice(index, 1);
      }
    });

    localStorage.setItem('gigs', JSON.stringify(gigs));
  }
}

// Event: Display Task/Gig
document.addEventListener('DOMContentLoaded', UI.displayGigs);

// Event: Add a Task/Gig
document.querySelector('#gig-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Form Values
  const task = document.querySelector('#task').value;
  const author = document.querySelector('#author').value;
  const badge = document.querySelector('#badge').value;

  // Validation
  if(task === '' || author === '' || badge === '') {
    UI.showAlert('Please make sure to fill in all fields.', 'warning');
  } else {
    // Instatiate Gig
    const gig = new Gig(task, author, badge);

    // Add Task/Gig to UI
    UI.addGigToList(gig);

    // Add Task/Gig to Storage (local)
    Store.addGig(gig);

    // Sucess Message - Added
    UI.showAlert('Task Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Task/Gig
document.querySelector('#gig-list').addEventListener('click', (e) => {
  // Remove Task/Gig from UI
  UI.deleteGig(e.target);

  // Remove Task/Gig from Storage (local)
  Store.removeGig(e.target.parentElement.previousElementSibling.textContent);

  // Success Message - Removed
  UI.showAlert('Task Removed', 'success');
});