// Toggle mobile menu to show and hide.
let isMenuOpen = false;
/* Toggles display mobile menu. Adds show-nav class to the element which increases width of the element */
function toggleMobileMenu() {
  const menu = document.getElementById("site-nav");
  if (!menu) {
    console.error("Could not find element with ID 'site-nav'");
    return;
  }
  menu.classList.toggle("show-nav", !isMenuOpen);
  isMenuOpen = !isMenuOpen;
}
