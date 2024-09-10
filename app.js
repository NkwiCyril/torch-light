const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

// Toggle menu and navbar on click
menu.addEventListener("click", () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("nav-toggle");

	// Update ARIA attributes for accessibility
	const isExpanded = menu.classList.contains("fa-times");
	menu.setAttribute("aria-expanded", isExpanded);
	navbar.setAttribute("aria-hidden", !isExpanded);
});

// Debounce scroll function for better performance
let scrollTimeout;
window.addEventListener("scroll", () => {
	if (scrollTimeout) {
		clearTimeout(scrollTimeout);
	}
	scrollTimeout = setTimeout(() => {
		menu.classList.remove("fa-times");
		navbar.classList.remove("nav-toggle");

		// Update ARIA attributes when scroll closes the menu
		menu.setAttribute("aria-expanded", false);
		navbar.setAttribute("aria-hidden", true);
	}, 100);
});
