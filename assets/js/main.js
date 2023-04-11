"use strict";

/*================ SHOW MENU ====================*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (true) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

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
if (section_1) {
  observer.observe(section_1);
}

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
    if (placesContainer) placesContainer.insertAdjacentHTML("beforeend", html);
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
    if (reviewContainer) reviewContainer.insertAdjacentHTML("beforeend", html);
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

    if (container) container.insertAdjacentHTML("beforeend", html);
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
    if (container) container.insertAdjacentHTML("beforeend", html);
  });
};

displayImage(imageData.slice(0, 3));
displayImage(imageData.slice(3));
/*============================== Things to do ===================*/

const explore_places = [
  {
    name: "Hidimba Devi Temple",
    description:
      "Augue sapien in urna cras placerat diam risus tincidunt condimentum vestibulum tellus sed nunc turpis dignissim nec sagittis, phasellus tellus nam nibh cursus donec quam mi sem ullamcorper diam hendrerit tortor, sed faucibus tristique convallis urna, molestie purus tellus id amet, enim sit phasellus dui integer eros ullamcorper.",
  },
  {
    name: "Mall Road",
    description:
      "Pulvinar venenatis parturient vulputate sit faucibus semper erat ac nulla egestas mi suspendisse aliquam mattis sagittis fermentum euismod tellus feugiat duis ac lacus mauris a id sed ipsum dolor a scelerisque lobortis cursus tincidunt maecenas tellus amet porttitor tincidunt convallis neque massa sapien montes mollis massa.",
  },
  {
    name: "Rohtang Pass",
    description:
      "Malesuada ut sagittis, consectetur morbi volutpat sit quam ipsum, nisi arcu, velit amet facilisis cursus eu curabitur tempor, quis pellentesque pellentesque volutpat leo eu ultrices nibh sit pharetra arcu, tempus nibh in interdum ac fermentum cursus amet leo, adipiscing vitae at dolor viverra consectetur quis dignissim.",
  },
  {
    name: "Old Manali",
    description:
      "Dui sodales aliquam amet velit non amet mi diam pulvinar in tortor augue sit porta purus orci nisl semper tellus enim lobortis a, sed cras cras pellentesque aliquet a ultrices sollicitudin et sed feugiat dapibus phasellus tincidunt ullamcorper neque tincidunt urna id donec id ut sed risus nunc.",
  },
  {
    name: "Jogini Waterfalls",
    description:
      "Tortor duis sit volutpat, et scelerisque et felis proin erat tellus ac at et egestas duis urna risus odio blandit duis molestie cursus ipsum metus, eget urna mattis dictumst cras felis facilisis vel lectus aenean gravida augue blandit rhoncus ipsum, id rutrum ultrices nulla pellentesque vitae, eget orci.",
  },
  {
    name: "Hampta Pass",
    description:
      "Augue odio felis neque, non tortor nisi etiam bibendum duis enim, proin justo, montes, etiam sit vitae at sit pretium sed ut diam, id aliquam pulvinar tristique sit pharetra, in sagittis, non suspendisse pulvinar tortor porttitor ipsum, tempus tincidunt mi faucibus sed nibh nisi sed amet in gravida.",
  },
];

const displayExplorePlaces = function (cardName) {
  const placesContainer = document.querySelector(".explore__container");
  let text;

  cardName.forEach((el, i) => {
    const count = i + 1;
    text =
      count % 2 !== 0
        ? `<div class="explorePlaces__container row_reverse__left">
        <div class="explorePlace__img__container">
    <div class="explorePlace__img__wrapper explorePage__rightPad-0">
      <img src="/assets/img/explore/img-${i}.jpg" alt="img-${i}" class="explorePlace__img">
    </div>
  </div>
  <div class="explorePlace__content__container">
    <div class="explorePlace__content__wrapper explorePage__leftPad-0">
      <div class="explorePlace__count">
        <div class="explorePlace__count__wrap">
          <h6 class="exploePlace__count__text">0${count}.</h6>
        </div>
      </div>
      <div class="explorePlace__title">
        <div class="explorePlace__title__wrap">
          <h2 class="exploePlace__title__text">${el.name}</h2>
        </div>
      </div>
      <div class="explorePlace__description">
        <div class="explorePlace__description__wrap">
          <p class="exploePlace__description__text">${el.description}</p>
        </div>
      </div>
      <div class="explorePlace__buttonContainer"><a href="#" class="explorePlace__button">Get Directions</a></div>
    </div>
    </div>
    </div>
      `
        : `<div class="explorePlaces__container row_reverse__right">
        <div class="explorePlace__content__container">
      <div class="explorePlace__content__wrapper explorePage__rightPad-1">
        <div class="explorePlace__count">
          <div class="explorePlace__count__wrap">
            <h6 class="exploePlace__count__text">0${count}.</h6>
          </div>
        </div>
        <div class="explorePlace__title">
          <div class="explorePlace__title__wrap">
            <h2 class="exploePlace__title__text">${el.name}</h2>
          </div>
        </div>
        <div class="explorePlace__description">
          <div class="explorePlace__description__wrap">
            <p class="exploePlace__description__text">${el.description}</p>
          </div>
        </div>
        <div class="explorePlace__buttonContainer"><a href="#" class="explorePlace__button">Get Directions</a></div>
        </div>
        </div>
        <div class="explorePlace__img__container">
    <div class="explorePlace__img__wrapper explorePage__leftPad-1">
      <img src="/assets/img/explore/img-${i}.jpg" alt="img-${i}" class="explorePlace__img">
      </div>
    </div>
    </div>
  
        `;

    const html = `
    <section class="explorePlaces">
    
          ${text}
          
       
    
  </section>`;
    if (placesContainer) placesContainer.insertAdjacentHTML("beforeend", html);
  });
};

displayExplorePlaces(explore_places);
/*============================== Facilities page containers===================*/

const facilities_content = [
  {
    icon: '<i class="fa-solid fa-wifi"></i>',
    title: "Free Wi-Fi",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-1__container",
    padClass: "right__padding",
  },
  {
    icon: '<i class="fa-solid fa-ban-smoking"></i>',
    title: "Smoke-Free",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-1__container",
    padClass: "mid__padding",
  },
  {
    icon: '<i class="fa-solid fa-square-parking"></i>',
    title: "Free Parking",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-1__container",
    padClass: "left__padding",
  },
  {
    icon: '<i class="fa-solid fa-dog"></i>',
    title: "Pet Friendly",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-2__container",
    padClass: "right__padding",
  },
  {
    icon: '<i class="fa-solid fa-bread-slice"></i>',
    title: "Free Breakfast",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-2__container",
    padClass: "mid__padding",
  },
  {
    icon: '<i class="fa-solid fa-dumbbell"></i>',
    title: "Fitness Center",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-2__container",
    padClass: "left__padding",
  },
  {
    icon: '<i class="fa-solid fa-tv"></i>',
    title: "Plasma TV",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-3__container",
    padClass: "right__padding",
  },
  {
    icon: '<i class="fa-solid fa-mug-hot"></i>',
    title: "Cafe",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-3__container",
    padClass: "mid__padding",
  },
  {
    icon: '<i class="fa-solid fa-martini-glass"></i>',
    title: "Mini Bar",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
    id: "facilities__row-3__container",
    padClass: "left__padding",
  },
];

const display_facilities = function (data) {
  data.forEach((info, i) => {
    const container = document.querySelector(`.${info.id}`);
    const html = `
    <div class="facilities__row__wrap-${i}">
    <div class="facilitiesPage__column__item ${info.padClass}">
      <div class="facilitiesPage__icon"> <span class="facilitiesPage__icon__animation">${info.icon}</span>
        
      </div>
      <div class="facilitiesPage__icon__box">
        <h5 class="facilitiesPage__icon__box__title">${info.title}</h5>
        <p class="facilitiesPage__icon__box__description">${info.description}</p>
      </div>
    </div>
  </div>
   `;
    if (container) container.insertAdjacentHTML("beforeend", html);
  });
};

display_facilities(facilities_content.slice(0, 3));
display_facilities(facilities_content.slice(3, 6));
display_facilities(facilities_content.slice(6));

/*============================== Send Email===================*/

const button = document.getElementById("submit__btn");
if (button) button.disabled = true;
const success = function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputSubject = document.getElementById("inputSubject").value;
  const inputMessage = document.getElementById("inputMessage").value;

  if ((firstName, lastName, inputEmail, inputSubject, inputMessage === "")) {
    button.disabled = true;
  } else {
    button.disabled = false;
    button.classList.add("submit__button");
    button.classList.remove("inactive__submit__button");
  }
};

function sendMail() {
  const formContainer = document.querySelector(".form__container");
  const formSubContainer = document.querySelector(".formSubmission__container");

  const param = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    inputEmail: document.getElementById("inputEmail").value,
    inputSubject: document.getElementById("inputSubject").value,
    inputMessage: document.getElementById("inputMessage").value,
  };

  const serviceID = "service_6rptheo";
  const templateID = "template_43tre8q";

  emailjs
    .send(serviceID, templateID, param)
    .then((res) => {
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("inputEmail").value = "";
      document.getElementById("inputSubject").value = "";
      document.getElementById("inputMessage").value = "";

      // alert("message sent successfully");
      formContainer.classList.add("afterSubmission");
      formSubContainer.classList.remove("afterSubmission");
    })
    .catch((err) => console.log(err));
}
