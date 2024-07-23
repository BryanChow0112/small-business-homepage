// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
   
// Fancybox for pizza gallery                                   
Fancybox.bind( "[data-fancybox]" );

// Form notification
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Notyf with custom options
    const notyf = new Notyf({
        duration: 5000, // Notification duration in milliseconds (e.g., 5000ms = 5 seconds)
        ripple: true,   // Enable ripple effect (optional)
        dismissible: true // Allow users to dismiss the notification (optional)
    });

    // Select the form
    const form = document.getElementById('cs-form-1441');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the name from the form
        const name = document.getElementById('name-1441').value.trim();

        // Simulate a successful submission
        setTimeout(() => {
            // Display success message
            notyf.success('Message sent successfully!');
            
            // Display personalized thank you message
            notyf.success(`Thank you for your feedback, ${name}!`);
            
            // Clear the form
            form.reset();
        }, 1000); // Simulate a delay for processing
    });
});
