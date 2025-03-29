const searchButton = document.getElementById('search-button');
const searchButtonIcon = document.getElementById('search-button-icon');

searchButton.addEventListener('hover', function () {
    searchButtonIcon.src = "icons/searchHover.png";
});

searchButton.addEventListener('mouseleave', function () {
    searchButtonIcon.src = "icons/search.png";
});