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
  }, 200);

  observer.unobserve(entry.target);
};
// const x = window.matchMedia("(max-width:767px)");
let thresholdValue = 0;
// if (x.matches) thresholdValue = 0.34;
// console.log(thresholdValue);
const section_1 = document.querySelector(".data");
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

const displaySection = function (cardName, f_name) {
  const placesContainer = document.querySelector(`.${f_name}`);
  let text;
  f_name === "offers-1" ? (text = "View Details") : (text = "Learn More");
  cardName.forEach((el, i) => {
    const html = `
<div class="individual__${f_name}__container_${i + 1}">
<div class="${f_name}Item__container_${i + 1}">
  <div class="img_container">
    <img src="assets/img/${f_name}/img-${i}.jpg" alt="image${i}" class="${f_name}__img" />
  </div>
  <div class="${f_name}__title">
    <h4 class="${f_name}_titleText">${el.name}</h4>
  </div>
  <div class="${f_name}__description">
    <p class="${f_name}__descriptionText">${el.description}</p>
  </div>
  <div class="${f_name}__button">
    <a href="#" class="${f_name}__link">${text} <span class="arrow-right"
    ><i class="fa-solid fa-arrow-right-long"></i
  ></span></a>
  </div>
  </div>
</div>`;
    placesContainer.insertAdjacentHTML("beforeend", html);
  });
};

displaySection(places_title_1, "places-1");
displaySection(places_title_2, "places-2");

/*================== Insert Element for OFFERS======================*/

const Offers_title = [
  {
    name: "Stay 3 Nights & Save!",
    description:
      "Amet elementum vitae ultrices accumsan est nunc, ut mattis enim leo sed dolor ultrices habitant lacus auctor lectus sagittis.",
  },
  {
    name: "Mobile Only Discount",
    description:
      "Dolor rhoncus malesuada amet, purus mollis adipiscing sit bibendum in odio a, iaculis eget dui odio mi, dictumst sem viverra.",
  },
];

displaySection(Offers_title, "offers-1");

/*================== Insert Guest Review======================*/

const reviewData = [
  {
    name: "Sakshi Tiwari",
    comment:
      "The place is awesome..,The view from the property is splendid, nobody can beat that. And the food is also delicious, they will make according to you and the cafe has that cool vibe too.",
    star: 4,
    image: 0,
    id: "left",
  },
  {
    name: "Jagannadh Parupudi",
    comment:
      "One of the best stays in Manali. The experience is amazing. The view is absolutely serene & we can't get enough of it. Jaipal is an amazing host. He made sure that we were comfortable throughout our stay.",
    star: 5,
    image: 1,
    id: "left",
  },
  {
    name: "Radhika Sharma",
    comment:
      "I stayed their for two nights while it was snowing in Manali. We had an amazing time. The owner Jaypal really goes out of his way to make the guests feel home. The staff is very amicable and helpful.",
    star: 5,
    image: 2,
    id: "right",
  },
  {
    name: "Vaibhav Gawande",
    comment:
      "We visited June Last week. Decent property, Apple trees infront. Nice view. I must say Jaypal (owner) is a gem of a person, his team was welcoming, shared what places to visit nr, helped us get local transport. They have their own cafe, and food was amazing, cheese omlette in Breakfast, Chicken chilli, Chicken noodles, pan cakes, Dal khichdi is must try. Vijay the helper and his team were very polite and helpful.",
    star: 5,
    image: 3,
    id: "right",
  },
];

const displayReview = function (data, f_name, className) {
  data.forEach((info, i) => {
    let innerStar;
    const reviewContainer = document.querySelector(
      `.${info.id}__column__wrapper`
    );
    info.star === 5
      ? (innerStar =
          '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
      : (innerStar =
          '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>');
    const html = `
          <section class="guest__review__${i + 1}">
          <div class="review__content">
            <div class="reviewContent__container">
              <div class="star__rating">${innerStar}</div>
              <div class="comment__container">${info.comment}</div>
              <div class="guest__details">
                <div class="guest__img">
                <img src="assets/img/${f_name}/img-${
      info.image
    }.png" alt="image${i}" class="${f_name}__img" />
                </div>
                <div class="guest__name">
                  <div class="guestName__text">${info.name}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
          `;
    reviewContainer.insertAdjacentHTML("beforeend", html);
  });
};
displayReview(reviewData.slice(0, 2), "guest-face");
displayReview(reviewData.slice(2), "guest-face");

/*================== Hotel Information======================*/
const hotelInfoData = [
  {
    title: "HOTEL ALERT",
    description:
      "Some hotel features, including vitae, varius ipsum ultrices adipiscing senectus turpis non due to COVID-19.",
    icon: '<i class="fa-solid fa-circle-info"></i>',
    id: "hotelData__wrapper",
  },
  {
    title: "CHECK-IN",
    description: "12:00 PM",
    icon: '<i class="fa-solid fa-clock"></i>',
    id: "hotelData-1__container",
  },
  {
    title: "CHECK-OUT",
    description: "11:00 AM",
    icon: '<i class="fa-regular fa-clock"></i>',
    id: "hotelData-1__container",
  },
  {
    title: "PHONE NUMBER",
    description: "(123) 456-7890",
    icon: '<i class="fa-solid fa-phone"></i>',
    id: "hotelData-2__container",
  },
  {
    title: "WHATSAPP NUMBER",
    description: "(123) 456-7890",
    icon: '<i class="fa-brands fa-whatsapp"></i>',
    id: "hotelData-2__container",
  },

  {
    title: "NO SMOKING",
    description: "100% Smoke Free",
    icon: '<i class="fa-solid fa-ban-smoking"></i>',
    id: "hotelData-3__container",
  },
  {
    title: "PET POLICY",
    description: "Pet Allowed: Yes",
    icon: '<i class="fa-solid fa-dog"></i>',
    id: "hotelData-3__container",
  },
];

const displayInfo = function (data) {
  data.forEach((info, i) => {
    const container = document.querySelector(`.${info.id}`);
    const html = `
    <div class="hotel__data__${i}">
    <div class="hotelData__icon">${info.icon}</div>
    <div class="hotelData__text__container">
      <h6 class="hotelData__title">${info.title}</h6>
      <p class="hotelData__description">${info.description}</p>
    </div>
    </div>
  `;

    container.insertAdjacentHTML("beforeend", html);
  });
};

displayInfo(hotelInfoData);

/*================== Gallery ======================*/

const imageData = [
  { f_name: "gallery__image", id: "image__wrapper__1", image: 0 },
  { f_name: "gallery__image", id: "image__wrapper__1", image: 1 },
  { f_name: "gallery__image", id: "image__wrapper__2", image: 2 },
  { f_name: "gallery__image", id: "image__wrapper__3", image: 3 },
  { f_name: "gallery__image", id: "image__wrapper__4", image: 4 },
  { f_name: "gallery__image", id: "image__wrapper__4", image: 5 },
];

const displayImage = function (data) {
  data.forEach((info, i) => {
    const container = document.querySelector(`.${info.id}`);
    const html = `
    <div class="mainImage__holder__${info.image}">
    <img class="main__gallery__image" src="assets/img/${info.f_name}/img-${info.image}.jpg" alt="img-${info.image}"/>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

displayImage(imageData.slice(0, 3));
displayImage(imageData.slice(3));
