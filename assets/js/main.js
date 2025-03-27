/* =============== Resume Section Tabs and Tab Contents =============== */

const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick){
    resumeTabContents.forEach((resumeTabContent) => {
        resumeTabContent.style.display = "none";
        resumeTabContent.classList.remove("active");
    });

    resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
        resumePortfolioTabBtn.classList.remove("active");
    });


    resumeTabContents[resumeTabClick].style.display = "flex";

    setTimeout(() => {
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);

    resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
    resumePortfolioTabBtn.addEventListener("click", () => {
        resumeTabNav(i);
    });
});

/* =============== Service Modal Open/Close Function =============== */

const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");

    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";

        setTimeout(() => {
            serviceBackDrop.classList.add("active");
        }, 100);

        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
    });
});

/* =============== Portfolio Modals, Tabs and Cards =============== */

// Filter Portfolio Cards According To Portfolio Tabs.

document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) =>{

                if(filter === "all" || cardWithModal.classList.contains(filter)){
                    cardWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5 ease";
                    }, 1);
                }

                else{
                    cardWithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5 ease";
                    }, 1);

                }

            });

            // Add active class to the clicked tab button.
            portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");

        });
    });

});

// Open/Close Portfolio Modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card")
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop")
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal")
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn")

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";

        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
        }, 300);

        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 300);

    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    });

});

/* =============== Testimonial Swiper =============== */

var swiper = new Swiper(".angelo-client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* =============== Send/Receive emails from Contact Form = Email JS =============== */

// (function() {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init({
//       publicKey: "UpUaSAJH2Ulrimu7S",
//     });
// })();

// angeloContactForm = document.getElementById("angelo-contact-form");
// angeloContactFormAlert = document.querySelector(".contact-form-alert");

// angeloContactForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // these IDs from the previous steps
//     emailjs.sendForm('service_m58vxmw', 'template_9gy9ood', '#angelo-contact-form')
//         .then(() => {
//             // console.log('SUCCESS!');
//             angeloContactFormAlert.innerHTML = "<span>Message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
//             angeloContactForm.reset();

//             setTimeout(() => {
//                 angeloContactFormAlert.innerHTML = "";
//             }, 5000);
//         }, (error) => {
//             // console.log('FAILED...', error);
//             angeloContactFormAlert.innerHTML = "<span>Message not sent.</span> <i class='ri-error-warning-fill'></i>";
//             angeloContactFormAlert.title = error;
//         });
// });

(function() {
    // Load EmailJS and initialize with public key
    emailjs.init({
      publicKey: "UpUaSAJH2Ulrimu7S",
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    const angeloContactForm = document.getElementById("angelo-contact-form");
    const angeloContactFormAlert = document.querySelector(".contact-form-alert");

    // Clear alert message on page load
    if (angeloContactFormAlert) {
        angeloContactFormAlert.innerHTML = "";
    }

    if (angeloContactForm) {
        angeloContactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            emailjs.sendForm('service_m58vxmw', 'template_9gy9ood', angeloContactForm)
                .then(() => {
                    angeloContactFormAlert.innerHTML = "<span>Message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
                    angeloContactForm.reset();

                    setTimeout(() => {
                        angeloContactFormAlert.innerHTML = "";
                    }, 5000);
                }, (error) => {
                    angeloContactFormAlert.innerHTML = "<span>Message not sent.</span> <i class='ri-error-warning-fill'></i>";
                    angeloContactFormAlert.title = error.text;
                });
        });
    }
});

/* =============== Shrink The Height of The Header on Scroll =============== */

window.addEventListener("scroll", () => {
    const angeloHeader = document.querySelector(".angelo-header");

    angeloHeader.classList.toggle("shrink", window.scrollY > 0);
});


/* =============== Bottom Navigation Menu =============== */

// This makes each item in the bottom navigation to be active on every page scroll.

window.addEventListener("scroll", () => {
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) => {
        let sectionHeight = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop - 50;
        let id = navMenuSection.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
        }else{
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    })
})

// This JS shows the bottom navigation menu on home page (when the page gets loaded).

window.addEventListener("DOMContentLoaded", () => {
    const bottomNav = document.querySelector(".bottom-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});

// This JS shows/hide bottom navigation menu on home (scroll).

const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

    if(window.scrollY < 10){
        menuHideBtn.classList.remove("active");

        function scrollStopped(){
            bottomNav.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }

    if(window.scrollY > 10){
        menuHideBtn.classList.add("active");

        function scrollStopped(){
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }
});

// This JS hides the bottom navigation menu upon clicking the menu-hide-btn.

menuHideBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});

// This JS shows the bottom navigation menu upon clicking the menu-show-btn.

menuShowBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});

/* =============== To Top-Button with Scroll Indicator Bar =============== */

window.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top-btn");

    toTopBtn.classList.toggle("active", window.scrollY > 0);

    // Scroll Indicator Bar
    const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / height) * 100;
    
    scrollIndicatorBar.style.height = scrollValue + "%";
});

/* =============== Customized Cursor on Mousemove =============== */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
})

// Cursor effects on hover website elements.

const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .angelo-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");

cursorHoverlinks.forEach((cursorHoverlinks) => {
    cursorHoverlinks.addEventListener("mouseover", () => {
        cursorDot.classList.add("large");
        cursorCircle.style.display = "none";
    });
});

cursorHoverlinks.forEach((cursorHoverlinks) => {
    cursorHoverlinks.addEventListener("mouseout", () => {
        cursorDot.classList.remove("large");
        cursorCircle.style.display = "block";
    });
});

/* =============== Website Dark/Light Theme =============== */

// Change the theme and save current theme when the theme button is clicked.

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    // Changes the theme icon and theme when theme button is clicked.
    themeBtn.classList.toggle("active-sun-icon");
    document.body.classList.toggle("light-theme");

    // Save theme icon and theme on click theme button.
    const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
    const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

    localStorage.setItem("angelo-saved-icon", getCurrentIcon());
    localStorage.setItem("angelo-saved-theme", getCurrentTheme());
})

// Remain the saved theme icon and theme when the document is loaded.

const savedIcon = localStorage.getItem("angelo-saved-icon");
const savedTheme = localStorage.getItem("angelo-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
    document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});



/* =============== Scroll Reveal JS Animations =============== */

// Common Reveal Options To Create Reveal Animations

ScrollReveal({
     reset: true,
     distance: '60px',
     duration: 2500,
     delay: 400,

});

// Target Elements and Specify Options to Create Reveal Animations.

ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.about-info, .angelo-footer .angelo-logo', { delay: 300, origin: 'bottom' });

ScrollReveal().reveal('.pro-card, .about-buttons .angelo-main-btn, .resume-tabs .tab-btn, .portfolio-tabs .tab-btn', { 
    delay: 500, 
    origin: 'right', 
    interval: 200 
});

ScrollReveal().reveal('#resume .section-content', { delay: 700, origin: 'bottom' });

ScrollReveal().reveal('.service-card, .portfolio-card, .contact-item, .contact-social-links li, .footer-menu .menu-item', { 
    delay: 300, 
    origin: 'bottom', 
    interval: 300 
});

ScrollReveal().reveal('.angelo-client-swiper, .contact-form-body', { delay: 700, origin: 'right' });

ScrollReveal().reveal('.contact-info h3', { 
    delay: 100, 
    origin: 'bottom', 
    interval: 300 
});


/* =============== Opens the Gmail compose window in a Smaller Popup.  =============== */

function openGmailCompose(email) {
    const url = `https://mail.google.com/mail/?view=cm&to=${email}`;
    window.open(url, 'gmailCompose', 'width=600,height=600');
}