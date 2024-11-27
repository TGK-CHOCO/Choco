// Get the heart icon and gallery container
const heartIcon = document.getElementById('heart-icon');
const gallery = document.getElementById('gallery');

// Add an event listener to the heart icon
heartIcon.addEventListener('click', () => {
    // Toggle the display of the gallery (show or hide)
    gallery.style.display = gallery.style.display === 'flex' ? 'none' : 'flex';
});
