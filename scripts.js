function toggleMobileNav() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    menuIcon.classList.toggle('active'); // Toggle animation for menu icon
    mobileNav.classList.toggle('active'); // Toggle mobile nav visibility
    overlay.classList.toggle('active'); // Toggle overlay
}

function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('active');
}





const countryCards = document.querySelectorAll('.country-card');

countryCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active'); // Toggles active class for more effects if needed
    });
});




// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Function to open modal
document.querySelectorAll('.banner .slider .item img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

// Close the modal when clicking the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};








