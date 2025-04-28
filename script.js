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