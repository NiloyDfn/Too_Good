function cursorAnimation() {
    // Create the cursor element if it doesn't exist
    if (!document.querySelector(".cursor")) {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor");
        document.body.appendChild(cursor);
    }
    
    // Initialize cursor
    gsap.set(".cursor", {
        transform: 'translate(-50%, -50%) scale(0)'
    });
    
    // Global mouse movement - always track the cursor position
    document.addEventListener("mousemove", function(dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
            duration: 0.1
        });
    });
    
    // Apply cursor effect to all children elements in page3
    const childElements = document.querySelectorAll(".child");
    
    childElements.forEach(function(elem) {
        // Show cursor when mouse enters the element
        elem.addEventListener("mouseenter", function() {
            gsap.to(".cursor", {
                transform: 'translate(-50%, -50%) scale(1)',
                duration: 0.3
            });
        });
        
        // Hide cursor when mouse leaves the element
        elem.addEventListener("mouseleave", function() {
            gsap.to(".cursor", {
                transform: 'translate(-50%, -50%) scale(0)',
                duration: 0.3
            });
        });
    });
}

// Add text to the middle images
function addHoverText() {
    // First image
    const elem1 = document.querySelector("#elem1 .dets");
    elem1.innerHTML = `
        <h3>Fresh Produce</h3>
        <p>Locally sourced, organically grown</p>
    `;
    
    // Second image
    const elem2 = document.querySelector("#elem2 .dets");
    elem2.innerHTML = `
        <h3>Healthy Meals</h3>
        <p>Nutritious and delicious options</p>
    `;
    
    // Third image
    const elem3 = document.querySelector("#elem3 .dets");
    elem3.innerHTML = `
        <h3>Community Impact</h3>
        <p>Making a difference with every purchase</p>
    `;
}

// Execute all animations
document.addEventListener("DOMContentLoaded", function() {
    locomotiveanimation();
    navbarAnimation();
    videoconAnimation();
    loadAnimation();
    cursorAnimation();
    addHoverText();
});