document.addEventListener('DOMContentLoaded', function() {
    // Get all search buttons across all pages
    const searchButtons = document.querySelectorAll('.search-field-button');
    
    // Apply hover effect to each button
    searchButtons.forEach(button => {
      const img = button.querySelector('img');
      if (img) {
        // Store the original src
        const originalSrc = img.getAttribute('src');
        // Create the hover src by replacing 'search.png' with 'searchHover.png'
        const hoverSrc = originalSrc.replace('search.png', 'searchHover.png');
        
        // Add event listeners
        button.addEventListener('mouseenter', function() {
          img.src = hoverSrc;
        });
        
        button.addEventListener('mouseleave', function() {
          img.src = originalSrc;
        });
      }
    });
  });