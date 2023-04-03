"use strict";
/*================ SHOW MENU ====================*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (true) {
    toggle.addEventListener("click", function () {
      console.log("clicked");
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// /*================ SWIPER JS ====================*/

// let galleryThumbs = new Swiper(".gallery-thumbs", {
//   spaceBetween: 0,
//   slidesPerView: 0,
// });

// let galleryTop = new Swiper(".gallery-top", {
//   effect: "fade",
//   loop: true,

//   thumbs: {
//     swiper: galleryThumbs,
//   },
// });

// /*================ GSAP ANIMATION ====================*/

// const controlImg = document.querySelectorAll(".controls__img");

// function ScrollAnimation() {
//   gsap.from(".cottage__subtitle", {
//     opacity: 0,
//     duration: 0.2,
//     delay: 0.2,
//     y: -20,
//   });
//   gsap.from(".cottage__title", {
//     opacity: 0,
//     duration: 0.3,
//     delay: 0.3,
//     y: -20,
//   });
//   gsap.from(".cottage__description", {
//     opacity: 0,
//     duration: 0.4,
//     delay: 0.4,
//     y: -20,
//   });
//   gsap.from(".cottage__button", {
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.5,
//     y: -20,
//   });
// }
// controlImg.forEach((c) => c.addEventListener("click", ScrollAnimation));

/*================ Dynamic Data ====================*/
const timer = function (inputClass, time) {
  const nums = document.querySelector(inputClass);

  nums.innerText = "0";
  const updateNum = () => {
    const target = nums.getAttribute("data-target");
    const count = +nums.innerText;
    const increment = target / 345;
    if (count < target) {
      nums.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateNum, time);
    } else nums.innerText = target;
  };

  updateNum();
};

/*=================== Intersection observer ==================*/

const countingNum = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  setTimeout(() => {
    timer(".numbers-1", 250);
    timer(".numbers-2", 1);
    timer(".numbers-3", 45);
    timer(".numbers-4", 0.1);
  }, 400);

  observer.unobserve(entry.target);
};
const x = window.matchMedia("(max-width:767px)", "(max-height:700px)");
let thresholdValue = 0.75;
if (x.matches) thresholdValue = 0.34;
console.log(thresholdValue);
const section_1 = document.querySelector(".nearby");
const observer = new IntersectionObserver(countingNum, {
  root: null,
  threshold: thresholdValue,
});

observer.observe(section_1);

/*================== Insert Element for places======================*/

// const placesContainer_2 = document.querySelector(".placeContent__container_2");
const places_title_1 = [
  {
    name: "Hidimba Devi Temple",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
  },
  {
    name: "Mall Road",
    description:
      "Augue donec sit vestibulum amet luctus cras sagittis, ac rutrum tincidunt accumsan at posuere urna.",
  },
  {
    name: "Rohtang Pass",
    description:
      "Suspendisse at sodales morbi urna, ut diam dignissim ante tellus vitae venenatis maecenas nullam pretium mattis.",
  },
];
const places_title_2 = [
  {
    name: "Old Manali",
    description:
      "Placerat vel laoreet purus, mattis id neque convallis nunc, tincidunt massa at.",
  },
  {
    name: "Jogini Waterfalls",
    description:
      "Risus facilisis porttitor lacus venenatis felis scelerisque lorem ut cras mi venenatis viverra diam sed dui.",
  },
  {
    name: "Hampta Pass",
    description:
      "Neque ut et velit dictum molestie at pellentesque aliquet magna ut tincidunt ullamcorper mauris mi et.",
  },
];
console.log(places_title_1, places_title_2);
const displayPlaces = function (places, f_num) {
  const placesContainer = document.querySelector(
    `.placeContent__container_${f_num}`
  );
  places.forEach((place, i) => {
    const html = `
<div class="individual__place__container_${i + 1}">
<div class="placeItem__container_${i + 1}">
  <div class="img_container">
    <img src="assets/img/places-${f_num}/place-img-${i}.jpg" alt="image${i}" class="place__img" />
  </div>
  <div class="place__title">
    <h4 class="place_titleText">${place.name}</h4>
  </div>
  <div class="place__description">
    <p class="place__descriptionText">${place.description}</p>
  </div>
  <div class="place__button">
    <a href="#" class="place__link">Learn More <span class="arrow-right"
    ><i class="fa-solid fa-arrow-right-long"></i
  ></span></a>
  </div>
  </div>
</div>`;
    placesContainer.insertAdjacentHTML("beforeend", html);
  });
};

displayPlaces(places_title_1, 1);
displayPlaces(places_title_2, 2);
