document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            // Check if the link is an internal section (starts with "#")
            if (this.getAttribute('href').startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Else, allow normal navigation for external links
        });
    });

    // Button hover effect
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
    const darkModeToggle = document.querySelector(".dark-mode-toggle");

    // Check if dark mode is already enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode"; // Update button text
    }

    // Add event listener for the toggle button
    darkModeToggle.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        document.body.classList.toggle("dark-mode");

        // Update button text and save preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️ Light Mode";
            localStorage.setItem("darkMode", "enabled");
        } else {
            darkModeToggle.textContent = "🌙 Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
function toggleServices() {
    const hiddenServices = document.querySelectorAll('.service.hidden');
    const viewMoreButton = document.querySelector('.view-more-btn');
    const viewLessButton = document.querySelector('.view-less-btn');

    if (viewMoreButton.style.display !== 'none') {
        // Show all hidden services
        hiddenServices.forEach(service => {
            service.classList.remove('hidden');
        });
        viewMoreButton.style.display = 'none'; // Hide "View More" button
        viewLessButton.style.display = 'inline-block'; // Show "View Less" button
    } else {
        // Hide extra services
        const allServices = document.querySelectorAll('.service');
        allServices.forEach((service, index) => {
            if (index >= 3) {
                service.classList.add('hidden'); // Hide services after the first 3
            }
        });
        viewMoreButton.style.display = 'inline-block'; // Show "View More" button
        viewLessButton.style.display = 'none'; // Hide "View Less" button
    }
}