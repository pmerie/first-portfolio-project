// 

//     Final Project
//     Name: Princess Merie Santiago
//     Date: 2025-08-15
//     Description: My Portfolio

// -----------------------------
// Project JS for Index, About Me, and Contact
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------
    // INDEX PAGE
    // -----------------------
if (document.querySelector(".text-content")) {

    // Time-based greeting
    let greetingElement = document.createElement("p");
    greetingElement.style.fontSize = "1.25rem";
    greetingElement.style.fontWeight = "bold";
    greetingElement.style.color = "#5B7F5B";

    fetch("https://worldtimeapi.org/api/timezone/America/Winnipeg")
        .then(response => response.json())
        .then(data => {
            const datetime = data.datetime; 
            const hour = parseInt(datetime.slice(11, 13)); 
            console.log("Winnipeg Hour Detected:", hour);

            if (hour < 12) 
                greetingElement.textContent = "Good morning! ☀️ Welcome to my portfolio.";
            else if (hour < 18) 
                greetingElement.textContent = "Good afternoon! 🌤️ I appreciate you visiting";
            else 
                greetingElement.textContent = "Good evening! 🌙 Thank you for exploring my portfolio.";

            document.querySelector(".text-content").appendChild(greetingElement);
        })
        .catch(error => {
            console.error("Error fetching time:", error);
         
            const hour = new Date().getHours();
            greetingElement.textContent = hour < 12
                ? "Good morning! ☀️ Welcome to my portfolio."
                : hour < 18
                    ? "Good afternoon! 🌤️ I appreciate you visiting"
                    : "Good evening! 🌙 Thank you for exploring my portfolio.";
            document.querySelector(".text-content").appendChild(greetingElement);
        });

    // Smooth scrolling for internal anchors
    let smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Social icons hover and click animation
    let socialIcons = document.querySelectorAll("#social-icon a");
    socialIcons.forEach(icon => {
        // Hover effect
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.2s ease-in-out";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });

        // Click effect
        icon.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent jumping to top
            icon.style.transform = "scale(1.3)";
            setTimeout(() => {
                icon.style.transform = "scale(1.2)"; // Return to hover size
            }, 200);
        });
    });

    // Profile image hover scale effect
    let profileImage = document.querySelector(".profile-image");
    if(profileImage){
        profileImage.addEventListener("mouseenter", () => {
            profileImage.style.transform = "scale(1.05)";
            profileImage.style.transition = "transform 0.3s ease-in-out";
        });
        profileImage.addEventListener("mouseleave", () => {
            profileImage.style.transform = "scale(1)";
        });
    }
}


    // -----------------------
    // ABOUT ME PAGE
    // -----------------------
    if (document.querySelector("#about-content")) {

        // Animate headings on page load
        let headings = document.querySelectorAll("#about-content h3");
        headings.forEach((heading, index) => {
            heading.style.opacity = 0;
            heading.style.transform = "translateY(20px)";
            setTimeout(() => {
                heading.style.transition = "all 0.6s ease";
                heading.style.opacity = 1;
                heading.style.transform = "translateY(0)";
            }, index * 200);
        });

        // Fade in paragraphs on scroll
        let paragraphs = document.querySelectorAll("#about-content p");
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.style.transition = "opacity 1s ease, transform 1s ease";
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        paragraphs.forEach(p => {
            p.style.opacity = 0;
            p.style.transform = "translateY(20px)";
            observer.observe(p);
        });

        // Social icons hover and click effect
        let socialIcons = document.querySelectorAll("#social-icon a");
        socialIcons.forEach(icon => {
            icon.addEventListener("mouseenter", () => {
                icon.style.transform = "scale(1.2)";
                icon.style.transition = "transform 0.2s ease-in-out";
            });
            icon.addEventListener("mouseleave", () => {
                icon.style.transform = "scale(1)";
            });
            icon.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent jumping to top
                icon.style.transform = "scale(1.3)";
                setTimeout(() => {
                    icon.style.transform = "scale(1.2)";
                }, 200);
            });
        });
    }

    // -----------------------
    // CONTACT PAGE
    // -----------------------

       let socialIcons = document.querySelectorAll("#social-icon a");
        socialIcons.forEach(icon => {
            icon.addEventListener("mouseenter", () => {
                icon.style.transform = "scale(1.2)";
                icon.style.transition = "transform 0.2s ease-in-out";
            });
            icon.addEventListener("mouseleave", () => {
                icon.style.transform = "scale(1)";
            });
            icon.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent jumping to top
                icon.style.transform = "scale(1.3)";
                setTimeout(() => {
                    icon.style.transform = "scale(1.2)";
                }, 200);
            });
        });

});
