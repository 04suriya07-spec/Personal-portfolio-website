document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });




    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.section-title, .about-text, .skill-card, .timeline-item, .project-card, .contact-wrapper');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.5, 0, 0, 1)';
        revealObserver.observe(el);
    });

    // Add 'revealed' class CSS via JS to avoid checking for it in stylesheet if JS fails
    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Image Modal Logic ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close-modal");
    const certCards = document.querySelectorAll(".cert-card");

    certCards.forEach(card => {
        card.addEventListener("click", () => {
            const fullImgSrc = card.getAttribute("data-full-img");
            if (fullImgSrc) {
                modal.style.display = "flex";
                modalImg.src = fullImgSrc;
            }
        });
    });

    // Close Modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close on clicking outside the image
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});
