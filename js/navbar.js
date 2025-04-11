document.addEventListener('DOMContentLoaded', function() {
    const searchButtons = document.querySelectorAll('.search-field-button');
    
    // Add hover to each button
    searchButtons.forEach(button => {
      const img = button.querySelector('img');
      if (img) {

        const originalSrc = img.getAttribute('src');

        const hoverSrc = originalSrc.replace('search.png', 'searchHover.png');
        
        button.addEventListener('mouseenter', function() {
          img.src = hoverSrc;
        });
        
        button.addEventListener('mouseleave', function() {
          img.src = originalSrc;
        });
      }
    });
  });