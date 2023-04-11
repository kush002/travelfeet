"use strict";

/*============================== stays page containers===================*/

const stays_content = [
  {
    image: '<i class="fa-duotone fa-house-night"></i>',
    title: "Foressta",
    description: "A Luxury Boutique Villa",
    id: "stays__row-1__container",
    padClass: "right__padding",
  },
  {
    image: '<i class="fa-solid fa-ban-smoking"></i>',
    title: "Iris",
    description: "Cottage and Cafe",
    id: "stays__row-1__container",
    padClass: "mid__padding",
  },
  {
    image: '<i class="fa-solid fa-square-parking"></i>',
    title: "Harippur",
    description: "Cottages and Resort",
    id: "stays__row-1__container",
    padClass: "left__padding",
  },
];

const display_stays = function (data) {
  data.forEach((info, i) => {
    const container = document.querySelector(`.${info.id}`);
    const html = `
      <div class="stays__row__wrap-${i}">
      <div class="staysPage__column__item ${info.padClass}">
      <div class="staysPage__image__wrapper">
        <div class="staysPage__image"> 
        <img class = "staysPage__img" src="assets/img/stays/img-${i}.jpg" alt="">  
        </div>
        <div class="staysPage__image__box">
          <h5 class="staysPage__image__box__title">${info.title}</h5>
          <p class="staysPage__image__box__description">${info.description}</p>
        </div>
        <div class="staysPage__button__container">
            <div class="staysPage__button__wrap">
                <a href="${info.title.toLowerCase()}" class="staysPage__button">View Rooms</a>
            </div>
            </div>
      </div>
      </div>
    </div>
     `;
    if (container) container.insertAdjacentHTML("beforeend", html);
  });
};

display_stays(stays_content.slice(0, 3));

/*============================== stays click event===================*/

document.querySelector(".stays__Row-1").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("staysPage__button")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

/*============================== room containers===================*/

const room_content = [
  {
    title: "Single Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "1 King bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "foresstaRooms__wrapper__row-1",
    padClass: "right__room__pad",
  },
  {
    title: "Doule Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "2 Queen bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
      {
        icon: '<i class="fa-solid fa-bread-slice"></i>',
        name: "Free Breakfast",
      },
    ],
    id: "foresstaRooms__wrapper__row-1",
    padClass: "left__room__pad",
  },
  {
    title: "Single Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "King bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "foresstaRooms__wrapper__row-2",
    padClass: "right__room__pad",
  },
  {
    title: "Doule Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "Queen bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "foresstaRooms__wrapper__row-2",
    padClass: "left__room__pad",
  },

  {
    title: "Single Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "1 King bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "irisRooms__wrapper__row-1",
    padClass: "right__room__pad",
  },
  {
    title: "Doule Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "2 Queen bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
      {
        icon: '<i class="fa-solid fa-bread-slice"></i>',
        name: "Free Breakfast",
      },
    ],
    id: "irisRooms__wrapper__row-1",
    padClass: "left__room__pad",
  },
  {
    title: "Single Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "King bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "irisRooms__wrapper__row-2",
    padClass: "right__room__pad",
  },
  {
    title: "Doule Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "Queen bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "irisRooms__wrapper__row-2",
    padClass: "left__room__pad",
  },
  {
    title: "Single Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "1 King bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "harippurRooms__wrapper__row-1",
    padClass: "right__room__pad",
  },
  {
    title: "Doule Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "2 Queen bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
      {
        icon: '<i class="fa-solid fa-bread-slice"></i>',
        name: "Free Breakfast",
      },
    ],
    id: "harippurRooms__wrapper__row-1",
    padClass: "left__room__pad",
  },
  {
    title: "Single Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "King bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "harippurRooms__wrapper__row-2",
    padClass: "right__room__pad",
  },
  {
    title: "Doule Room",
    description:
      "Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
    amenity: [
      { icon: '<i class="fa-solid fa-bed"></i>', name: "Queen bed" },
      { icon: '<i class="fa-solid fa-tv"></i>', name: "Plasma TV" },
      { icon: '<i class="fa-solid fa-wifi"></i>', name: "Free Wi-Fi" },
      { icon: '<i class="fa-solid fa-ban-smoking"></i>', name: "Smoke Free" },
    ],
    id: "harippurRooms__wrapper__row-2",
    padClass: "left__room__pad",
  },
];

const display_rooms = function (data) {
  data.forEach((info, i) => {
    const container = document.querySelector(`.${info.id}`);
    const listItem = info.amenity;

    const html = `
    <div class="room__content">
    <div class="room__content__wrap ${info.padClass}">
      <div class="room__info">
        <div class="room__info__wrap">
          <figure class="room__image__box">
            <img src="assets/img/rooms/img-${i}.jpg" alt="" class="room__img">
          </figure>
          <div class="info__box">
            <h5 class="room__title">${info.title}</h5>
            <p class="room__description">${info.description}</p>
          </div>
          
        </div>
      </div>
      <div class="room__amenities">
        <div class="room__amenities__wrap">
          <ul class="room__amenities__list-${i} roomAmenities__list">
          
          </ul>
        </div>
      </div>
            <div class="room__button__container">
            <div class="room__button__wrap">
                <a href="#" class="room__button">Reserve Now</a>
            </div>
            </div>
     </div>
    </div>
       `;
    if (container) container.insertAdjacentHTML("beforeend", html);

    // console.log(item);
  });
};

display_rooms(room_content);

const amen = room_content.map((el, i) => el.amenity);

console.log(amen);
const display_rooms_amenity = function (data) {
  data.forEach((info, i) => {
    const container = document.querySelector(`.room__amenities__list-${i}`);
    info.forEach((el) => {
      const html = `
        <li class="room__amenities__item">
        <div class = "room__amenities__item__wrap">
          <span class="room__amenity__icon">${el.icon}</span>
          <span class="room__amenity__name">${el.name}</span>
          </div>
          </li>
          
        `;

      container.insertAdjacentHTML("beforeend", html);
    });
  });
};

display_rooms_amenity(amen);
