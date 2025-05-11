// includes.js
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
  
    elements.forEach(el => {
      const file = el.getAttribute('data-include');
      if (file) {
        fetch(file)
          .then(response => {
            if (!response.ok) throw new Error(`Cannot fetch ${file}`);
            return response.text();
          })
          .then(data => {
            el.innerHTML = data;
            el.removeAttribute('data-include');
            includeHTML(); // recursively check nested includes if any
          })
          .catch(error => console.error('Error loading include:', error));
      }
    });
  }
  
  // Run after DOM loaded
  document.addEventListener('DOMContentLoaded', includeHTML);
  