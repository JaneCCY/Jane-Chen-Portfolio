document.addEventListener("DOMContentLoaded", () => {
    // Swiper Slider Initialization
    const imageSlider = document.querySelector('.image-slider');
    
    if (imageSlider) {
        const swiper = new Swiper('.image-slider', {
            slidesPerView: 1,
            spaceBetween: 0,  // No space between slides
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,  // Slide change every 5 seconds
                disableOnInteraction: false, // Continue autoplay after user interaction
            },
        });

        console.log("Swiper initialized successfully.");
    } else {
        console.log("No Swiper element found, skipping initialization.");
    }

    // Search Functionality for Portfolio
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-bar button');  // The search button
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Event listener for form submission
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission (page reload)
            performSearch(); // Call search when form is submitted
        });
    } else {
        console.log("Search form not found.");
    }

    // Check if searchButton exists before adding event listener
    if (searchButton) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent page reload on button click
            performSearch(); // Call search when the button is clicked
        });
    } else {
        console.log("Search button not found.");
    }

    // Function to perform the search
    function performSearch() {
        const searchQuery = searchInput.value.toLowerCase(); // Get search query and convert to lowercase
        let foundMatch = false; // To track if a match is found

        // Loop through all portfolio items and filter by keyword match
        portfolioItems.forEach(item => {
            const keywords = item.getAttribute('data-keywords') ? item.getAttribute('data-keywords').toLowerCase() : '';
            
            // If the item matches the search query
            if (keywords.includes(searchQuery)) {
                item.style.display = 'block'; // Show item if keywords match
                foundMatch = true;
                const link = item.querySelector('a'); // Get the link of the matched item
                if (link) {
                    // Redirect to the associated page
                    window.location.href = link.href;
                }
            } else {
                item.style.display = 'none'; // Hide item if keywords don't match
            }
        });

        // Optionally, show a message if no matches are found
        if (!foundMatch) {
            alert("No matching results found.");
        }
    }

    // Burger Menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.getElementById('navLinks');
    const closeButton = document.querySelector('.close-menu');
    
    // Function to toggle the menu visibility
    function toggleMenu() {
        navLinks.classList.toggle('active'); // Toggle the visibility of nav links
        closeButton.classList.toggle('active'); // Toggle the visibility of close button
    }
    
    // Function to close the menu (remove 'active' class)
    function closeMenu() {
        navLinks.classList.remove('active');
        closeButton.classList.remove('active');
    }
    
    // Add event listeners for burger menu and close button
    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleMenu); // Open the menu
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeMenu); // Close the menu
    }
});
