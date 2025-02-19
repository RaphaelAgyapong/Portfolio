// Toggle visibility of navbar when button clicked

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});

// Tab interface for different section of resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeItems = document.querySelectorAll(".resume-item");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};

// Navbar header sticky while scrolling

function stickyNav() {
  var headerHeight = document.querySelector("#about").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

// initialize swiper.js for project slider

const swiper = new Swiper('.project-slider', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop:true,
  navigation: {
    nextEl: '.nextArrowBtn',
    prevEl: '.prevArrowBtn',
  },
  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<li class="' + className + '"></li>';
    },
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
})

// initialize swiper.js for testimonial slider

const swiper1 = new Swiper('.testimonial-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop:true,
  grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      effect: "fade",
    },
  },
})


// Active link on page scroll

const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(
      `header .portfolio-navbar a[href*="#${id}"]`
    );
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active-link");
    } else {
      currentNavLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollTracker);

// Dark and Light Theme Toggle

function isLight() {
  return localStorage.getItem("dark-mode");
}

function toggleRootClass() {
  document.querySelector("body").classList.toggle("dark");
}

function toggleLocalStorageItem() {
  if (isLight()) {
    localStorage.removeItem("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "set");
  }
}

if (isLight()) {
  toggleRootClass();
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorageItem();
  toggleRootClass();
});

// Scroll to top

const limit = 200;
const scrollTopBtn = document.querySelector("#scroll-top-btn");
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  scrollTopBtn.classList.toggle("visible", window.scrollY >= limit);
});

// Scroll reveal

const sr = ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".about-intro, .project-slider", {
  origin: "left",
});
sr.reveal(
  ".resume-heading,.contact-info,.footer-contact,.testimonial-heading",
  {
    origin: "bottom",
  }
);
sr.reveal(".service-row", {
  origin: "bottom",
  interval: 800,
});
sr.reveal(".resume-body", {
  origin: "top",
});
