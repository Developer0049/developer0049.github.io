
    // Function to highlight the nav link based on scroll position
    function highlightNavLink() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav a');

        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            // Check if the section is in the viewport
            if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
                navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
                navLinks[index].classList.add('active'); // Add active class to current section link
            }
        });
    }

    // Smooth scroll to section on click and highlight the active link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            
            // Highlight the clicked link
            document.querySelectorAll('.nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Event listener for scroll
    window.addEventListener('scroll', highlightNavLink);
