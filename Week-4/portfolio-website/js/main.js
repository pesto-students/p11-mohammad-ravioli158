// Toggle mobile menu to show and hide.
let isMenuOpen = false;

function toggleMobileMenu() {
    const menu = document.getElementById('site-nav');
    if (!menu) {
        console.error("Could not find element with ID 'site-nav'");
        return;
    }
    menu.classList.toggle('show-nav', !isMenuOpen);
    isMenuOpen = !isMenuOpen;
}
