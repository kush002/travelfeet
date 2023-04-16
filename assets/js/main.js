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
      "The Hadimba Devi Temple is a unique temple located in Manali, nestled in the snow-covered hills of the Himalayas. It is dedicated to Hidimba Devi, the protector of the dense forest, and is a popular destination among families and honeymoon travellers.",
    id: "place-0",
  },
  {
    name: "Mall Road",
    description:
      "Located in the beautiful state of Himachal Pradesh, Manali is a picturesque hill station that offers stunning views of snow-capped mountains. One of the most popular places in Manali is Mall Road, where visitors from all over the world come not only to admire the breathtaking scenery but also to shop.",
    id: "place-1",
  },
  {
    name: "Solang Valley",
    description:
      "Solang Valley, located in Manali, is an exquisite destination that offers a unique blend of adventure and natural beauty. Apart from being a popular skiing paradise, this valley offers a plethora of experiences that cater to both thrill-seekers and nature lovers alike.",
    id: "place-2",
  },
];
const places_title_2 = [
  {
    name: "Old Manali",
    description:
      "Old Manali is a peaceful settlement nestled in the Beas River Valley of Himachal Pradesh, situated 3 kilometres uphill from the busy town of Manali. At an altitude of around 6,589 feet above sea level, this quaint little village is a haven for backpackers and hippies, who prefer a laid-back and relaxed environment away from the hustle and bustle of the city.",
    id: "place-3",
  },
  {
    name: "Jogini Waterfalls",
    description:
      "The Jogini Waterfall, a stunning 160-foot cascade located near Vashisht village in Manali. It's named after the village goddess, Jogini, who is said to reside in the waters of this waterfall. The area, river, and forest around the falls are seen as sacred due to its historical significance as a place where one of the Shakti Peethas fell, making it a place of Feminine Power.",
    id: "place-4",
  },
  {
    name: "Nehru Kund",
    description:
      "An oasis of greenery and fresh air lies around half a kilometer away from Mall Road, known as the Nature Park in Manali. The park is a perfect destination for nature lovers as it is filled with Deodar trees and is home to some of the rare birds of Himachal state.",
    id: "place-5",
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
    <a href="things_to_do.html#${
      el.id
    }" class="${f_name}__link">${text} <span class="arrow-right"
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
    description: `The Hadimba Devi Temple is a unique temple located in Manali, nestled in the snow-covered hills of the Himalayas. It is dedicated to Hidimba Devi, the protector of the dense forest, and is a popular destination among families and honeymoon travellers. The temple's architecture is entirely different from any other temple in Manali, and it is believed to have been named after the ferocious demon Hadimba who ruled the surrounding area. The temple has no physical idol of Hadimba Devi, but worshippers offer their prayers to her footprints in the temple.<br><br>
    The temple is built mainly of wood and stone, and its doors are intricately carved. The interiors are decorated with carvings of Hindu gods, goddesses, and various animals. The temple is a significant historical site and is considered one of the iconic places to visit in Manali. The deity, considered an avatar of Goddess Durga, is worshipped by the locals, who seek her blessings before any special occasion.<br><br> 
    Visitors can relish delicious local food during the festival month at the temple, and the temple gates are open every day from 8 AM to 6 PM. A trip to Manali is incomplete without a visit to this breathtaking temple in the Himalayas, and after visiting the temple, travellers can walk down to Mall road, which boasts fine dine-in restaurants, cafes, and handicraft shops.`,
  },
  {
    name: "Mall Road",
    description: `Located in the beautiful state of Himachal Pradesh, Manali is a picturesque hill station that offers stunning views of snow-capped mountains. One of the most popular places in Manali is Mall Road, where visitors from all over the world come not only to admire the breathtaking scenery but also to shop. It is a renowned shopping destination with numerous shops and emporiums selling various items such as shawls, rugs, jewelry, woolen caps, wooden furniture, and books.<br><br>

    Mall Road is often referred to as the heart of Manali and is a bustling street with plenty of activity throughout the day. Visitors can find a range of accommodations, restaurants, and bars along the street. There are also several small shopping areas like the Dragon Shopping Complex, Lama Underground, Hong Kong Market, Shangri La Shopping Complex, Thai Market, Snow Lion Underground Market, and New NAC Market.
      
    Mall Road is a no-vehicle zone, except for emergency vehicles, and is home to the police headquarters, Municipal Corporation, and fire service offices. The street is perfect for strolling and exploring, and visitors can take a break and relax in one of the many areas along the road.<br><br>
      
    In addition to shopping, dining, and sightseeing, visitors can also visit the temple dedicated to goddess Durga, located next to the Bus depot on Mall Road. The temple is a great place to offer prayers and seek blessings. Visitors can also witness the colorful and traditional Durga Puja Visarjans performed from the Hills of Manali during the peak summer season.<br><br>
      
    Overall, Mall Road is a perfect place to begin exploring the beautiful town of Manali, and visitors can indulge in the three main things that Manali has to offer: sleep, eat, and shop. Himachal emporium on Mall Road is a great place to purchase some of the best handcrafted products of Himachal Pradesh, such as woolen clothes, pottery products, branded clothes, wood items, and ornaments.`,
  },
  {
    name: "Solang Valley",
    description: `Solang Valley, located in Manali, is an exquisite destination that offers a unique blend of adventure and natural beauty. Apart from being a popular skiing paradise, this valley offers a plethora of experiences that cater to both thrill-seekers and nature lovers alike. The valley derives its name from the combination of Solang, meaning 'nearby village,' and Nullah, meaning 'current of water'.<br><br>

      The Solang Valley is renowned for its scenic charm, especially during the winter months when it is draped in snow. The sight of snow-capped mountains and the frozen Beas river is breathtaking and awe-inspiring.<br><br>
      
      One can engage in a variety of exciting activities in Solang Valley, including paragliding and zorbing, which are thrilling experiences that offer spectacular views of the valley. Skiing is a popular activity in the valley, with skiing courses available for individuals of all skill levels. Camping is another fantastic way to immerse oneself in nature and enjoy the starry nights surrounded by the serene beauty of the valley. Trekking is also an option for those looking to explore the nearby areas and soak in the natural wonders of the region.<br><br>
      
      The valley is conveniently accessible by road and is located just 14 km from Manali. The best time to visit Solang Valley is during the summer months of May to June or in the winter months of December to February.<br><br>
      
      All in all, Solang Valley is a must-visit destination for adventure enthusiasts and nature lovers alike. The picturesque views, coupled with thrilling activities, promise a memorable experience that will last a lifetime.`,
  },
  {
    name: "Old Manali",
    description: `Old Manali is a peaceful settlement nestled in the Beas River Valley of Himachal Pradesh, situated 3 kilometres uphill from the busy town of Manali. At an altitude of around 6,589 feet above sea level, this quaint little village is a haven for backpackers and hippies, who prefer a laid-back and relaxed environment away from the hustle and bustle of the city.<br><br>

    To reach Old Manali from New Manali, you can take a 20-minute uphill walk or hire an auto-rickshaw, though the latter may be congested and best avoided. Unlike New Manali, Old Manali is less crowded and offers plenty of foreign backpackers and travelers who stay for weeks or even months. There are numerous backpacker cafes and restaurants, serving delicious food like chocolate cookies, chicken tuna pizza, and chicken burger.<br><br>
      
    After sundown, Old Manali has an unexplainable vibe that must be experienced firsthand. Many restaurants offer live music and karaoke nights that attract both Indian and foreign crowds. Affordable guest houses in Old Manali are also a significant reason why many foreign tourists stay here. These guest houses are very basic, offering just a bed and a fan, and some don't even have fans as the weather is pleasant throughout the year. Common washrooms are the norm.<br><br>
      
    Old Manali is famous for Manali cream, a type of hash sold on the down-low. While it is common to be offered it by a random local as you wander through the lanes, note that marijuana is a banned substance in the country, and possession can lead to imprisonment.<br><br>
      
    One of the main attractions in Old Manali is the Hadimba Temple, dedicated to Goddess Hadimba, located around a kilometre from the market area. You can buy locally grown cherries outside the temple complex at an affordable price. Junkie lovers will find paradise in Old Manali, with shops selling funky sweatshirts, colorful pants, chillums, bongs, hand-painted T-shirts, summer dresses, and woolen wear like mufflers with animal faces (pandas, tigers, and dogs).<br><br>
      
    If you're looking for a laid-back and relaxed environment away from the busy town of Manali, Old Manali is worth the long uphill walk from New Manali. If you miss out on Old Manali, you will miss out on the best part of Manali.`,
  },
  {
    name: "Jogini Waterfalls",
    description: `The Jogini Waterfall, a stunning 160-foot cascade located near Vashisht village in Manali. It's named after the village goddess, Jogini, who is said to reside in the waters of this waterfall. The area, river, and forest around the falls are seen as sacred due to its historical significance as a place where one of the Shakti Peethas fell, making it a place of Feminine Power. So, it's important to respect the area surrounding it on your visit.<br><br>

    The Jogini Falls trail is accessible by foot from New Manali, and it's a 4-kilometre trek to Vashisht village, where you can start the hike. However, if you want to save some energy, you can take a car or rickshaw to Vashisht temple and begin your hike from there.<br><br>
      
    The trail to the Jogini Falls is approximately 3 kilometres long and runs through a forested area. It's not a flat path and has some steep hills and steps in order to access it. If you start your trek from Vashisht, it will be a lot shorter at 3 kilometres one way, saving you an hour or so. The hike can take between 2-4 hours depending on various factors like weather conditions, stopping for chai, and how long you decide to stay at Jogini Falls.<br><br>
      
    It is recommended planning at least a half-day out of your Manali itinerary to complete this walk. It's not recommended to leave it too late in the afternoon as you don't want to be trekking in the dark.<br><br>
      
    In conclusion, the Jogini Waterfall is a beautiful destination that's worth the effort to visit. Just remember to be respectful of the area and plan accordingly for the hike.`,
  },
  {
    name: "Nehru Kund",
    description:
      "An oasis of greenery and fresh air lies around half a kilometer away from Mall Road, known as the Nature Park in Manali. The park is a perfect destination for nature lovers as it is filled with Deodar trees and is home to some of the rare birds of Himachal state. The park includes a children's playing area that has swings, slides, and other park activities. Additionally, visitors can find a few places to sit and relax. A small pond with paddle boats available is accessible by walking about 100 meters from the edge of the park. The Nature Park in Manali is a popular destination, and visitors should expect crowds at times.",
  },
  {
    name: "Buddhist Monastery",
    description: `The Tibetan Monastery, located near the Mall in Manali, is one of the oldest and most popular sightseeing places in the area. With a large population of Tibetan settlers in Kullu & Manali, the monasteries were built to meet their religious needs. There are three important Tibetan Monasteries in Manali, including The Gadhan Thekchoking Gompa, Himalayan Nyingamapa Temple, and another in Aleo on the left bank of the Beas River.<br><br>

      The Gadhan Thekchoking Gompa, constructed in 1969, is situated near the Mall and is run by locals who gather funds through donations. The monastery boasts of unique handicrafts of Tibetan artistry and carpets that are woven and sold on site. The architecture is typically Tibetan, with hued frescoes, and a statue of Lord Buddha presides over the monastery.<br><br>
      
      The Himalayan Nyingamapa Gompa, situated near the market place in Manali, has a more modern architecture than the previous one. It is surrounded by sunflowers and glows at night with light bulbs lit to illuminate it. The monastery also has a huge gold-faced bronze statue of Lord Buddha.<br><br>
      
      The Tibetan Monasteries have several small shops surrounding them that sell beautiful handicrafts and carpets made by Tibetan people living nearby. The Monasteries also run a Thanka School of Arts and a Carpet-weaving Center to preserve ancient Tibetan art. Inside the buildings, there are paintings depicting events from Lord Buddha's life and the Kalchakra, a wheel of life fixed on the wall of the monastery showing the human life cycle. The Buddhists believe that rotating these wheels gives one salvation.<br><br>
      
      The Tibetan Monasteries are open from 6 AM to 6 PM, and visitors are encouraged to visit and immerse themselves in the peaceful and spiritual atmosphere.`,
  },
  {
    name: "Vashisht Temple and Hot Springs",
    description: `Located 3.5 km from Manali Bus Stand, Vashist Temple is a renowned pilgrimage site in Manali, dedicated to sage Vashisht, the Kula guru of Lord Rama. The village of Vashisht, situated across the River Beas, was named after Rishi Vashisht, one of the seven sages of Hindu mythology. According to the legend, Rishi Vashisht was heartbroken to learn that his children had been killed by Vishwamitra and attempted suicide by jumping into a river. However, the river refused to harm him, and he began a new life in the village, which was later named after him. The Vipasha River, which carried the rishi to the village, is now known as the Beas River.<br><br>

      The Vashisht temple, which is believed to be more than 4000 years old, houses a black stone image of the Rishi wearing a dhoti. It is adorned with exquisite wood carvings and traditional paintings and figures. The temple's interior is decorated with antique artwork, creating an enchanting atmosphere.<br><br>
      
      One of the most famous attractions of the region is the Vashisht Hot Water Spring, which is believed to have medicinal properties and is said to cure many skin diseases. Visitors flock to the Vashisht baths to take a dip and cleanse themselves of skin infections and ailments. Separate bathrooms for men and women are available for convenience.<br><br>
      
      Adjacent to the Vashisht Temple is another ancient stone temple, the Rama Temple, which houses idols of Rama, Sita, and Lakshmana. The village was once the center of the Vaishnava cult, and Dussehra is celebrated for seven days. Overall, Vashist Temple and its surrounding attractions are among the most popular places to visit in Manali.`,
  },
  {
    name: "Nature Park",
    description:
      "An oasis of greenery and fresh air lies around half a kilometer away from Mall Road, known as the Nature Park in Manali. The park is a perfect destination for nature lovers as it is filled with Deodar trees and is home to some of the rare birds of Himachal state. The park includes a children's playing area that has swings, slides, and other park activities. Additionally, visitors can find a few places to sit and relax. A small pond with paddle boats available is accessible by walking about 100 meters from the edge of the park. The Nature Park in Manali is a popular destination, and visitors should expect crowds at times.",
  },
  {
    name: "Manu Temple",
    description: `Located in the Beas River Valley of Old Manali, the Manu Temple is a hidden gem off the beaten track. It is the only temple in India devoted to the ancient Indian law-giver, Manu Rishi, who is considered the creator of the human race and the author of the Manusmriti, the book that established the foundation of mankind. The name of the town, Manali, is derived from Manu Rishi, who is said to have meditated here.<br><br>

      As you make your way through the slippery stone path, the sight of the temple will delight you. A large, rustic bell at the entrance sets the tone for the visit. The temple was reconstructed in 1992, with an added curved ceiling and marble floor, but it still retains its ancient charm with its wooden and stone structure. The nearby Beas River adds a mystical charm to the temple.<br><br>
      
      Inside the temple, the serene atmosphere is inviting for meditation and reflection. The spacious hall has wooden flooring, and worshippers sit on the floor to meditate for hours. The natural light from the windows, blue skies, and passing clouds provide a peaceful ambiance. This temple is a fascinating destination to explore in Manali, away from the usual tourist spots.`,
  },
  {
    name: "Atal Tunnel",
    description: `The Atal Tunnel is a magnificent feat of engineering located in Himachal Pradesh that has attracted a lot of visitors since its construction. This tunnel, built at a height of 10,040 feet above sea level, has broken the world record for being the longest highway tunnel in the world at that altitude, as recognized by the World Book of Records, London.<br><br>

      The tunnel is a mesmerizing marvel of engineering nestled in the lap of the Himalayas. One of the most intriguing aspects of the Atal Tunnel is that it connects Manali with the Lahaul and Spiti district, making it possible for tourists to explore the remote regions of Himachal Pradesh and Ladakh that were previously inaccessible due to extreme weather conditions. It has now become one of the top tourist attractions in Himachal Pradesh.<br><br>
      
      Travelling through this scenic tunnel offers breathtaking views that will stay with you forever. From the lush green forests to the lofty Himalayan peaks of Dhauladhar, hanging glaciers, scenic Dhundi valley, blissful Chandra River, Sissu waterfall, and beautiful Keylong valley, there are countless nearby attractions to explore near Atal Tunnel.<br><br>
      
      Remember, it's not just about the destination, but also the journey. The trip to Atal Tunnel will expose you to many awe-inspiring tourist attractions, making your Atal Tunnel Tour a memorable one.`,
  },
];

const displayExplorePlaces = function (cardName) {
  const placesContainer = document.querySelector(".explore__container");
  let text;

  cardName.forEach((el, i) => {
    const count = String(i + 1).padStart(2, "0");
    text =
      +count % 2 !== 0
        ? `<div class="explorePlaces__container row_reverse__left" >
        <div class="explorePlace__img__container_left">
    <div class="explorePlace__img__wrapper explorePage__rightPad-0">
      <img src="/assets/img/explore/img-${i}.jpg" alt="img-${i}" class="explorePlace__img">
    </div>
  </div>
  <div class="explorePlace__content__container">
    <div class="explorePlace__content__wrapper explorePage__leftPad-0">
      <div class="explorePlace__count">
        <div class="explorePlace__count__wrap">
          <h6 class="exploePlace__count__text">${count}.</h6>
        </div>
      </div>
      <div class="explorePlace__title">
        <div class="explorePlace__title__wrap">
          <h2 class="exploePlace__title__text">${el.name}</h2>
        </div>
      </div>
      <div class="explorePlace__description">
        <div class="explorePlace__description__wrap">
          <p class="exploePlace__description__text" >${el.description}</p>
        </div>
      </div>
      <div class="explorePlace__buttonContainer"><a href="#" class="explorePlace__button">Get Directions</a></div>
    </div>
    </div>
    </div>
      `
        : `<div class="explorePlaces__container row_reverse__right">
        
        <div class="explorePlace__img__container_right">
    <div class="explorePlace__img__wrapper explorePage__leftPad-1">
      <img src="/assets/img/explore/img-${i}.jpg" alt="img-${i}" class="explorePlace__img">
      </div>
    </div>
    <div class="explorePlace__content__container">
      <div class="explorePlace__content__wrapper explorePage__rightPad-1">
        <div class="explorePlace__count">
          <div class="explorePlace__count__wrap">
            <h6 class="exploePlace__count__text">${count}.</h6>
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
  
        `;

    const html = `
    <section class="explorePlaces" id=place-${i}>
    
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
