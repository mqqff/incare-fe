// Get elements
const searchButton = document.querySelector('.group-2');
const backButton = document.querySelector('.group-3');
const loadingModal = document.getElementById('loading-modal');

// Search button click event
searchButton.addEventListener('click', function() {
  loadingModal.style.display = 'flex';
  setTimeout(function() {
    loadingModal.style.display = 'none';
  }, 3000); // Hide after 3 seconds
});

// Back button click event
backButton.addEventListener('click', function() {
  window.location.href = 'DashboardVolunteer.html';
});

// Star rating functionality
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = this.getAttribute('data-rating');
      stars.forEach(s => {
        if (s.getAttribute('data-rating') <= rating) {
          s.classList.add('selected');
          s.textContent = '★';
        } else {
          s.classList.remove('selected');
          s.textContent = '☆';
        }
      });
    });
  });

  // View Activities button click event
  const viewButtons = document.querySelectorAll('.btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      window.location.href = 'DetailActivity_madif.html';
    });
  });
});
