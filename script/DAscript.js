// Star rating functionality - editable on DetailActivity_madif.html, display only on others
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  const defaultRating = 4; // Set default rating to 4 stars
  const isMadifPage = window.location.pathname.includes('DetailActivity_madif.html');

  stars.forEach(star => {
    const rating = parseInt(star.getAttribute('data-rating'));
    if (rating <= defaultRating) {
      star.classList.add('selected');
      star.textContent = '★';
    } else {
      star.classList.remove('selected');
      star.textContent = '☆';
    }

    if (isMadifPage) {
      // Make editable on madif page
      star.style.cursor = 'pointer';
      star.addEventListener('click', function() {
        const selectedRating = parseInt(this.getAttribute('data-rating'));
        stars.forEach(s => {
          const sRating = parseInt(s.getAttribute('data-rating'));
          if (sRating <= selectedRating) {
            s.classList.add('selected');
            s.textContent = '★';
          } else {
            s.classList.remove('selected');
            s.textContent = '☆';
          }
        });
        // Update the rating number
        const ratingDisplay = document.querySelector('.text-wrapper-21');
        if (ratingDisplay) {
          ratingDisplay.textContent = selectedRating + '.0';
        }
      });
    } else {
      // Non-editable on other pages
      star.style.cursor = 'default';
    }
  });

  // Back button functionality
  const backButton = document.querySelector('.group-16 .text-wrapper');
  if (backButton && backButton.textContent === 'Back') {
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // Save button functionality
  const saveButton = document.querySelector('.group .text-wrapper');
  if (saveButton && saveButton.textContent === 'Save') {
    saveButton.addEventListener('click', function() {
      // Show loading modal
      const loadingModal = document.getElementById('loading-modal');
      loadingModal.style.display = 'block';

      // Hide loading modal after 2 seconds and show success modal
      setTimeout(function() {
        loadingModal.style.display = 'none';
        const successModal = document.getElementById('success-modal');
        successModal.style.display = 'block';
      }, 2000);

      // OK button functionality
      const okButton = document.getElementById('ok-button');
      okButton.addEventListener('click', function() {
        const successModal = document.getElementById('success-modal');
        successModal.style.display = 'none';
      });
    });
  }
});
