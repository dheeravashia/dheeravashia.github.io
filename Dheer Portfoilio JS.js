// Function to change button color on hover
function changeButtonColorOnHover(button, hoverColor, originalColor) {
    button.addEventListener('mouseenter', function() {
        button.style.backgroundColor = hoverColor;
    });

    button.addEventListener('mouseleave', function() {
        button.style.backgroundColor = originalColor;
    });
}

// Get buttons by their IDs
const homeBtn = document.getElementById("homeBtn");
const projectsBtn = document.getElementById("projectsBtn");
const certBtn = document.getElementById("certBtn");
const contactBtn = document.getElementById("contactBtn");

// Change the hover color for each button
changeButtonColorOnHover(homeBtn, '#9637bd', 'transparent'); 
changeButtonColorOnHover(projectsBtn, '#9637bd', 'transparent'); 
changeButtonColorOnHover(certBtn, '#9637bd', 'transparent'); 
changeButtonColorOnHover(contactBtn, '#9637bd','transparent'); 

// Add event listeners for navigation (this part stays the same)
homeBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});

projectsBtn.addEventListener("click", function() {
    window.location.href = "Dheer Portfolio Projects.html";
});

certBtn.addEventListener("click", function() {
    window.location.href = "Dheer Portfolio Coursework.html";
});

contactBtn.addEventListener("click", function() {
    window.location.href = "Dheer Portfolio Contact.html";
});