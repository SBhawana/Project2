// Hamburger Icon Start
function openCanvas() {
  const toggleIcon = document.getElementById("toggle-icon");
  const menuList = document.getElementById("myLinks");
  const closeIcon = document.querySelector("#close-icon");

  // Show Canvas
  toggleIcon.addEventListener("click", function () {
    menuList.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Hide Canvas
  closeIcon.addEventListener("click", function () {
    menuList.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

openCanvas();
// Hamburger Icon End

// Scroll Up Button Start
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Scroll Up  Button End

// Counter Start
function counter() {
  function count(element, maxLimit, time) {
    const numberEl = document.getElementById(element);
    if (numberEl) {
      const number = +numberEl.innerHTML;
      let initialNumber = 0;

      function increment() {
        initialNumber++;
        if (initialNumber <= maxLimit) {
          numberEl.innerHTML = initialNumber;
        } else {
          clearInterval("hello");
        }
      }

      const hello = setInterval(increment, time);
    }
  }

  count("counter-num", 210, 1);
  count("counter2", 521, 1);
  count("counter3", 1463, 1);
  count("counter4", 15, 200);
}

counter();
// Counter End

// Testimonial Start
// Splide
function slider() {
  function testimonials(element, options) {
    const slide = new Splide(element, options);

    slide.mount();
  }

  const optionsForSlider = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    interval: 4000,
  };

  testimonials("#test", optionsForSlider);
}

slider();
// Testimonial End

// portfolio filter start

// portfolio filter end
