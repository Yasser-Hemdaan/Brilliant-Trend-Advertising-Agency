console.log(
  "%cstop!",
  "color:red;font-size:80px;font-weight:bold;text-transform:uppercase;"
);
console.log(
  "%cThis is a browser feature intended for developers.",
  "color:white;font-size:16px;font-weight:bold;"
);

let burgerBtn = document.querySelector(".burger");
let closeBtn = document.querySelector(".close");
let menuNavBody = document.querySelector(".menuNavBody");
let scrollTopBtn = document.querySelector(".scrollToTopBtn");
let header = document.querySelector(".header");
let teamMemebrs = document.querySelector(".teamMemebrs");
let projectsBlock = document.querySelector(".projectsBlock");
let social = document.querySelector(".social");
let branding = document.querySelector(".branding");
let motion = document.querySelector(".motion");
let web = document.querySelector(".web");
let categoryItems = document.querySelectorAll(".catItem");
let articlesBlock = document.querySelector(".articlesBlock");
let articleItems = document.querySelectorAll(".articleItem");

let socialProjects = [
  {
    type: "social",
    target: "wahm1",
    imgSrc: "sc/wahm1.jpg",
    brand: "wahm",
  },
  {
    type: "social",
    target: "wahm2",
    imgSrc: "sc/wahm2.jpg",
    brand: "wahm",
  },
  {
    type: "social",
    target: "wahm3",
    imgSrc: "sc/wahm3.jpg",
    brand: "wahm",
  },
  {
    type: "social",
    target: "wahm4",
    imgSrc: "sc/wahm4.jpg",
    brand: "wahm",
  },
  {
    type: "social",
    target: "wahm5",
    imgSrc: "sc/wahm5.jpg",
    brand: "wahm",
  },
  {
    type: "social",
    target: "lmas1",
    imgSrc: "sc/lmas1.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas2",
    imgSrc: "sc/lmas2.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas3",
    imgSrc: "sc/lmas3.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas4",
    imgSrc: "sc/lmas4.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas5",
    imgSrc: "sc/lmas5.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas6",
    imgSrc: "sc/lmas6.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas7",
    imgSrc: "sc/lmas7.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas8",
    imgSrc: "sc/lmas8.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas9",
    imgSrc: "sc/lmas9.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas10",
    imgSrc: "sc/lmas10.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas11",
    imgSrc: "sc/lmas11.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "lmas12",
    imgSrc: "sc/lmas12.jpg",
    brand: "lmas",
  },
  {
    type: "social",
    target: "kanolli1",
    imgSrc: "sc/kanolli1.jpg",
    brand: "kanolli",
  },
  {
    type: "social",
    target: "kanolli2",
    imgSrc: "sc/kanolli2.jpg",
    brand: "kanolli",
  },
  {
    type: "social",
    target: "kanolli3",
    imgSrc: "sc/kanolli3.jpg",
    brand: "kanolli",
  },
  {
    type: "social",
    target: "kanolli4",
    imgSrc: "sc/kanolli4.jpg",
    brand: "kanolli",
  },
  {
    type: "social",
    target: "alahsan1",
    imgSrc: "sc/alahsan1.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan2",
    imgSrc: "sc/alahsan2.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan3",
    imgSrc: "sc/alahsan3.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan4",
    imgSrc: "sc/alahsan4.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan5",
    imgSrc: "sc/alahsan5.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan6",
    imgSrc: "sc/alahsan6.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan7",
    imgSrc: "sc/alahsan7.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan8",
    imgSrc: "sc/alahsan8.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "alahsan9",
    imgSrc: "sc/alahsan9.jpg",
    brand: "alahsan",
  },
  {
    type: "social",
    target: "badr1",
    imgSrc: "sc/badr1.jpg",
    brand: "badr",
  },
  {
    type: "social",
    target: "badr2",
    imgSrc: "sc/badr2.jpg",
    brand: "badr",
  },
  {
    type: "social",
    target: "badr3",
    imgSrc: "sc/badr3.jpg",
    brand: "badr",
  },
  {
    type: "social",
    target: "badr4",
    imgSrc: "sc/badr4.jpg",
    brand: "badr",
  },
  {
    type: "social",
    target: "burger1",
    imgSrc: "sc/burger1.jpg",
    brand: "burger",
  },
  {
    type: "social",
    target: "burger2",
    imgSrc: "sc/burger2.jpg",
    brand: "burger",
  },
  {
    type: "social",
    target: "burger3",
    imgSrc: "sc/burger3.jpg",
    brand: "burger",
  },
  {
    type: "social",
    target: "burger4",
    imgSrc: "sc/burger4.jpg",
    brand: "burger",
  },
  {
    type: "social",
    target: "fernuture1",
    imgSrc: "sc/fernuture1.jpg",
    brand: "fernuture",
  },
  {
    type: "social",
    target: "fernuture2",
    imgSrc: "sc/fernuture2.jpg",
    brand: "fernuture",
  },
  {
    type: "social",
    target: "fernuture3",
    imgSrc: "sc/fernuture3.jpg",
    brand: "fernuture",
  },
  {
    type: "social",
    target: "fernuture4",
    imgSrc: "sc/fernuture4.jpg",
    brand: "fernuture",
  },
  {
    type: "social",
    target: "fernuture5",
    imgSrc: "sc/fernuture5.jpg",
    brand: "fernuture",
  },
  {
    type: "social",
    target: "fernuture6",
    imgSrc: "sc/fernuture6.jpg",
    brand: "fernuture",
  },
  {
    type: "social",
    target: "hotels1",
    imgSrc: "sc/hotels1.jpg",
    brand: "hotels",
  },
  {
    type: "social",
    target: "hotels2",
    imgSrc: "sc/hotels2.jpg",
    brand: "hotels",
  },
  {
    type: "social",
    target: "hotels3",
    imgSrc: "sc/hotels3.jpg",
    brand: "hotels",
  },

  {
    type: "social",
    target: "sertah1",
    imgSrc: "sc/sertah1.jpg",
    brand: "sertah",
  },
  {
    type: "social",
    target: "sertah2",
    imgSrc: "sc/sertah2.jpg",
    brand: "sertah",
  },
  {
    type: "social",
    target: "sertah3",
    imgSrc: "sc/sertah3.jpg",
    brand: "sertah",
  },
  {
    type: "social",
    target: "health-care1",
    imgSrc: "sc/health-care1.jpg",
    brand: "health-care",
  },
  {
    type: "social",
    target: "health-care2",
    imgSrc: "sc/health-care2.jpg",
    brand: "health-care",
  },
  {
    type: "social",
    target: "health-care3",
    imgSrc: "sc/health-care3.jpg",
    brand: "health-care",
  },
  {
    type: "social",
    target: "clinic1",
    imgSrc: "sc/clinic1.jpg",
    brand: "clinic",
  },
  {
    type: "social",
    target: "clinic2",
    imgSrc: "sc/clinic2.jpg",
    brand: "clinic",
  },
  {
    type: "social",
    target: "clinic3",
    imgSrc: "sc/clinic3.jpg",
    brand: "clinic",
  },
  {
    type: "social",
    target: "shoes1",
    imgSrc: "sc/shoes1.jpg",
    brand: "shoes",
  },
  {
    type: "social",
    target: "shoes2",
    imgSrc: "sc/shoes2.jpg",
    brand: "shoes",
  },
  {
    type: "social",
    target: "shoes3",
    imgSrc: "sc/shoes3.jpg",
    brand: "shoes",
  },
  {
    type: "social",
    target: "sport1",
    imgSrc: "sc/sport1.png",
    brand: "sport",
  },
  {
    type: "social",
    target: "sport2",
    imgSrc: "sc/sport2.png",
    brand: "sport",
  },
  {
    type: "social",
    target: "sport3",
    imgSrc: "sc/sport3.png",
    brand: "sport",
  },
];
let barndingProjects = [
  {
    type: "branding",
    target: "brillianttrend",
    imgSrc: "brand/brillianttrend1.jpg",
    imgSrc2: "brand/brillianttrend2.jpg",
  },
  {
    type: "branding",
    target: "ajdl",
    imgSrc: "brand/ajdl1.jpg",
    imgSrc2: "brand/ajdl2.jpg",
  },
  {
    type: "branding",
    target: "myjewel",
    imgSrc: "brand/myjewel1.jpg",
    imgSrc2: "brand/myjewel2.jpg",
  },
  {
    type: "branding",
    target: "wiltlet",
    imgSrc: "brand/wiltvar1.jpg",
    imgSrc2: "brand/wiltvar2.jpg",
  },
  {
    type: "branding",
    target: "sweetsalty",
    imgSrc: "brand/sweetsalty1.jpg",
    imgSrc2: "brand/sweetsalty2.jpg",
  },
  {
    type: "branding",
    target: "jungle",
    imgSrc: "brand/jungle1.jpg",
    imgSrc2: "brand/jungle2.jpg",
  },
  {
    type: "branding",
    target: "merlin",
    imgSrc: "brand/merlin1.jpg",
    imgSrc2: "brand/merlin2.jpg",
  },
  {
    type: "branding",
    target: "pwi",
    imgSrc: "brand/pwi1.jpg",
    imgSrc2: "brand/pwi2.jpg",
  },
  {
    type: "branding",
    target: "epss",
    imgSrc: "brand/epss1.jpg",
    imgSrc2: "brand/epss2.jpg",
  },
];
let motionProjects = [
  {
    type: "motion",
    target: "https://vimeo.com/823709994",
    imgSrc: "motion/Brilliant Trend services.png",
    title: "B.T. services",
  },
  {
    type: "motion",
    target: "https://vimeo.com/807490156",
    imgSrc: "motion/Brilliant Trend services Collage.png",
    title: "B.T. services Collage",
  },
  {
    type: "motion",
    target: "https://vimeo.com/784734574",
    imgSrc: "motion/World Cup Video.png",
    title: "World Cup",
  },
  {
    type: "motion",
    target: "https://vimeo.com/784736162",
    imgSrc: "motion/all orders in one tablets.png",
    title: "all orders in one tablets",
  },
];
let webProjects = [
  {
    type: "web",
    target: "alehsan-schools",
    imgSrc: "websites/alehsan-schools.png",
    modalImgSrc: "websites/alehsan-schools-screen.png",
    title: "alehsan-schools",
  },
  {
    type: "web",
    target: "arkan-alriyadh",
    imgSrc: "websites/arkan-alriyadh.png",
    modalImgSrc: "websites/arkan-alriyadh-screen.png",
    title: "arkan-alriyadh",
  },
  {
    type: "web",
    target: "assui-system",
    imgSrc: "websites/assui-system.png",
    modalImgSrc: "websites/assui-system-screen.png",
    title: "assui-system",
  },
  {
    type: "web",
    target: "bona-advertising",
    imgSrc: "websites/bona-advertising.png",
    modalImgSrc: "websites/bona-advertising-screen.png",
    title: "bona-advertising",
  },
  {
    type: "web",
    target: "foode-resturant",
    imgSrc: "websites/foode-resturant.png",
    modalImgSrc: "websites/foode-resturant-screen.png",
    title: "foode-resturant",
  },
  {
    type: "web",
    target: "hospice",
    imgSrc: "websites/hospice.png",
    modalImgSrc: "websites/hospice-screen.png",
    title: "hospice",
  },
  {
    type: "web",
    target: "imperial-agency",
    imgSrc: "websites/imperial-agency.png",
    modalImgSrc: "websites/imperial-agency-screen.png",
    title: "imperial-agency",
  },
  {
    type: "web",
    target: "knight-studios",
    imgSrc: "websites/knight-studios.png",
    modalImgSrc: "websites/knight-studios-screen.png",
    title: "knight-studios",
  },
  {
    type: "web",
    target: "leramiz",
    imgSrc: "websites/leramiz.png",
    modalImgSrc: "websites/leramiz-screen.png",
    title: "leramiz",
  },
  {
    type: "web",
    target: "akmza-resturant",
    imgSrc: "websites/akmza-resturant.png",
    modalImgSrc: "websites/akmza-resturant-screen.png",
    title: "akmza-resturant",
  },
  {
    type: "web",
    target: "the-jungle-river",
    imgSrc: "websites/the-jungle-river.png",
    modalImgSrc: "websites/the-jungle-river-screen.png",
    title: "the-jungle-river",
  },
  {
    type: "web",
    target: "the-event",
    imgSrc: "websites/the-event.png",
    modalImgSrc: "websites/the-event-screen.png",
    title: "the-event",
  },
];
let members = [
  {
    name: "Abdul Rahman Al-Dosari",
    title: "Chief Executive",
    image: "abdelrahman.jpg",
  },
  {
    name: "Faraj Almutlaq",
    title: "business developer",
    image: "Faraj Almutlaq.jpg",
  },
  {
    name: "mohamed mostafa",
    title: "art director",
    image: "mohamed-mostafa.png",
  },
  {
    name: "yasser hemdan",
    title: "senior software engineer",
    image: "yasser.png",
  },
  {
    name: "Fahad Almutlaq",
    title: "content creator",
    image: "Fahad Almutlaq.jpg",
  },
  {
    name: "Abdul Malik Al-Luhyan",
    title: "public relations",
    image: "Abdulmalik Alluhayan.jpg",
  },
  // {
  //   name: "rashida",
  //   title: "business developer",
  //   image: "11.jpg",
  // },
  {
    name: "shehata abd ellatif",
    title: "senior graphic designer",
    image: "shehata.png",
  },
  // {
  //   name: "Muzun Aldawsari",
  //   title: "graphic designer",
  //   image: "11.jpg",
  // },
  {
    name: "ahmed talaat",
    title: "motion graphic designer",
    image: "ahmed-talaat.png",
  },
  {
    name: "mohamed ashraf",
    title: "accounts manager",
    image: "mohamed-ashraf.png",
  },
  {
    name: "aya",
    title: "account executive",
    image: "aya.png",
  },
  {
    name: "noha",
    title: "content creator",
    image: "noha.png",
  },
];
let membersArabic = [
  {
    name: "عبد الرحمن الدوسري",
    title: "Chief Executive",
    image: "abdelrahman.jpg",
  },
  {
    name: "فرج المطلق",
    title: "business developer",
    image: "Faraj Almutlaq.jpg",
  },
  {
    name: "محمد مصطفي",
    title: "art director",
    image: "mohamed-mostafa.png",
  },
  {
    name: "ياسر حمدان",
    title: "senior software engineer",
    image: "yasser.png",
  },
  {
    name: "فهد المطلق",
    title: "content creator",
    image: "Fahad Almutlaq.jpg",
  },
  {
    name: "عبدالملك اللحيان",
    title: "public relations",
    image: "Abdulmalik Alluhayan.jpg",
  },
  // {
  //   name: "رشيدة",
  //   title: "business developer",
  //   image: "11.jpg",
  // },
  {
    name: "شحاته عبد اللطيف",
    title: "senior graphic designer",
    image: "shehata.png",
  },
  // {
  //   name: "مزون الدوسري",
  //   title: "graphic designer",
  //   image: "11.jpg",
  // },
  {
    name: "أحمد طلعت",
    title: "motion graphic designer",
    image: "ahmed-talaat.png",
  },
  {
    name: "محمد أشرف",
    title: "accounts manager",
    image: "mohamed-ashraf.png",
  },
  {
    name: "آيه",
    title: "account executive",
    image: "aya.png",
  },
  {
    name: "نهى",
    title: "content creator",
    image: "noha.png",
  },
];
// document.querySelectorAll(".showMoreService").forEach((item) => {
//   item.addEventListener("click", (eventInfo) => {
//     if (
//       eventInfo.target.parentElement.parentElement.classList.contains(
//         "notStretched"
//       )
//     ) {
//       eventInfo.target.parentElement.parentElement.classList.add("w-100");
//       eventInfo.target.parentElement.parentElement.classList.replace(
//         "notStretched",
//         "stretched"
//       );
//       if (eventInfo.target.classList.contains("en")) {
//         eventInfo.target.innerHTML = "show less";
//       } else {
//         eventInfo.target.innerHTML = "عرض اقل";
//       }
//     } else {
//       eventInfo.target.parentElement.parentElement.classList.remove("w-100");
//       eventInfo.target.parentElement.parentElement.classList.replace(
//         "stretched",
//         "notStretched"
//       );
//       if (eventInfo.target.classList.contains("en")) {
//         eventInfo.target.innerHTML = "show more";
//       } else {
//         eventInfo.target.innerHTML = "عرض اكثر";
//       }
//     }
//     // eventInfo.target.style.width = "100%";
//   });
// });

// servicesContainer.forEach((item) => {
//   item.style.width = "100%";
// });

// let serviceContainer = document.getElementById("serviceContainer");
// console.log(serviceContainer);

// let services = [
//   {
//     serviceName: "web development",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?",
//     serviceImage: "assets/images/services/web.svg",
//     serviceBtnId: "webDevelopment",
//   },
//   {
//     serviceName: "video production",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?",
//     serviceImage: "assets/images/services/production.svg",
//     serviceBtnId: "videoProduction",
//   },
//   {
//     serviceName: "branding",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?",
//     serviceImage: "assets/images/services/branding.svg",
//     serviceBtnId: "branding",
//   },
//   {
//     serviceName: "advertising",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?",
//     serviceImage: "assets/images/services/announce.svg",
//     serviceBtnId: "advertising",
//   },
//   {
//     serviceName: "motion",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?",
//     serviceImage: "assets/images/services/motion.svg",
//     serviceBtnId: "motion",
//   },
//   {
//     serviceName: "social media",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?",
//     serviceImage: "assets/images/services/social-media-design.svg",
//     serviceBtnId: "socialMedia",
//   },
// ];

// for (var i = 0; i < services.length; i++) {
//   if (i < 3) {
//     serviceContainer.innerHTML += `
//   <div class="serviceItem wow animate__animated animate__fadeInRight">
//   <div class="serviceText">
//     <h4>${services[i].serviceName}</h4>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?
//       <!-- We are working on developing static and simple websites and even
//       mobile professional websites, in addition to developing all
//       websites with the latest trends and technologies, and all our
//       websites on Google include a responsive layout in addition to
//       making it compatible with search engines so that it appears in
//       the initial results. -->
//     </p>
//     <a class="serviceBtn" id='${services[i].serviceBtnId}'>show more</a>
//   </div>
//   <div class="serviceImage">
//     <img src="${services[i].serviceImage}" alt="">
//   </div>
// </div>
//   `;
//   } else {
//     serviceContainer.innerHTML += `
//   <div class="serviceItem wow animate__animated animate__fadeInLeft">
//   <div class="serviceText">
//     <h4>${services[i].serviceName}</h4>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam?
//       <!-- We are working on developing static and simple websites and even
//       mobile professional websites, in addition to developing all
//       websites with the latest trends and technologies, and all our
//       websites on Google include a responsive layout in addition to
//       making it compatible with search engines so that it appears in
//       the initial results. -->
//     </p>
//     <a class="serviceBtn" id='${services[i].serviceBtnId}'>show more</a>
//   </div>
//   <div class="serviceImage">
//     <img src="${services[i].serviceImage}" alt="">
//   </div>
// </div>
//   `;
//   }
// }

// var socialMediaBtn = document.getElementById("socialMedia");
// socialMediaBtn.addEventListener("click", function () {
//   console.log("lol");
// });

// var serviceBtnsContainer = document.querySelectorAll(".serviceBtn");
// console.log(serviceBtnsContainer);

window.addEventListener("DOMContentLoaded", () => {
  // defualt project
  socialProjects.forEach((project) => {
    projectsBlock.innerHTML += `
    <div
     class="project ${project.type} wow animate__animated animate__fadeInUp"
     data-bs-toggle="modal"
     data-bs-target="#${project.target}"
     >
     <img
     src="assets/images/projects/${project.imgSrc}"
     class="img-responsive"
     />
   </div>
    `;
  });

  // Category and projects
  categoryItems.forEach((categoryItem) => {
    categoryItem.addEventListener("click", (e) => {
      categoryItems.forEach((categoryItem) => {
        categoryItem.classList.remove("active");
      });
      e.target.classList.add("active");
      console.log(e.target.classList[1]);
      if (e.target.classList[1] === "social") {
        projectsBlock.innerHTML = ``;
        socialProjects.forEach((project) => {
          projectsBlock.innerHTML += `
          <div
           class="project ${project.type} wow animate__animated animate__fadeInUp"
           data-bs-toggle="modal"
           data-bs-target="#${project.target}"
           >
           <img
           src="assets/images/projects/${project.imgSrc}"
           class="img-responsive"
           />
         </div>
          `;
        });
      } else if (e.target.classList[1] === "motion") {
        projectsBlock.innerHTML = ``;
        motionProjects.forEach((project) => {
          projectsBlock.innerHTML += `
          <div
         class="project ${project.type} wow animate__animated animate__fadeInUp"
       >
         <div class="videoImage">
           <a href="${project.target}" target="_blank">
             <img
               src="assets/images/projects/${project.imgSrc}"
               class="img-responsive"
             />
             <h2>${project.title}</h2>
           </a>
         </div>
       </div>
          `;
        });
      } else if (e.target.classList[1] === "branding") {
        projectsBlock.innerHTML = ``;
        barndingProjects.forEach((project) => {
          projectsBlock.innerHTML += `
           <div
           class="project  ${project.type} wow animate__animated animate__fadeInUp doubleImages"
           data-bs-toggle="modal"
           data-bs-target="#${project.target}"
         >
           <div class="topImage">
             <img
               src="assets/images/projects/${project.imgSrc}"
               class="img-responsive"
             />
           </div>
           <div>
             <img
               src="assets/images/projects/${project.imgSrc2}"
               class="img-responsive"
             />
           </div>
         </div>`;
        });
      } else if (e.target.classList[1] === "web") {
        projectsBlock.innerHTML = ``;
        webProjects.forEach((project) => {
          projectsBlock.innerHTML += `
          <div
             class="project ${project.type} wow animate__animated animate__fadeInUp"
             data-bs-toggle="modal"
             data-bs-target="#${project.target}"
         >
             <div class="webImage">
             <img
                 src="assets/images/projects/${project.imgSrc}"
                 class="img-responsive"
             />
             <h2>${project.title}</h2>
             </div>
         </div>
         <div class="modal fade" id="${project.target}">
         <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content">
             <!-- <button type="button" class="btn-close" data-bs-dismiss="modal"></button> -->
             <div class="modal-body">
               <img
                 src="assets/images/projects/${project.modalImgSrc}"
                 class="img-responsive"
               />
             </div>
           </div>
         </div>
       </div>
          `;
        });
      } else {
        console.log("Error");
      }
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  // Create Members Blocks in arabic
  if (teamMemebrs.hasAttribute("data-content")) {
    // in arabic
    membersArabic.forEach((member) => {
      teamMemebrs.innerHTML += `
            <div class="member wow animate__animated animate__fadeInUp">
                <div class="image">
                    <img src="assets/images/team/${member.image}" alt="" />
                </div>
                <div class="memberData">
                    <h4 class="name">${member.name}</h4>
                    <h4 class="jobTitle lang">${member.title}</h4>
                </div>
            </div>
            `;
    });
  } else {
    // in english
    members.forEach((member) => {
      teamMemebrs.innerHTML += `
            <div class="member wow animate__animated animate__fadeInUp">
                <div class="image">
                    <img src="assets/images/team/${member.image}" alt="" />
                </div>
                <div class="memberData">
                    <h4 class="name">${member.name}</h4>
                    <h4 class="jobTitle">${member.title}</h4>
                </div>
            </div>
            `;
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  scrollTopBtn.addEventListener(
    "click",
    () => {
      window.scrollTo(0, 0);
    },
    5000
  );
  new WOW().init();

  $(".owl-carousel.owl-articles").owlCarousel({
    loop: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      900: {
        items: 2,
        nav: true,
        loop: false,
      },
      1200: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  $(".owl-carousel.owl-innovations").owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    // margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
    },
  });

  burgerBtn.addEventListener("click", () => {
    menuNavBody.classList.add("smooth");
    menuNavBody.style.height = 100 + `vh`;
    menuNavBody.style.opacity = 1;
  });

  closeBtn.addEventListener("click", () => {
    menuNavBody.classList.add("smooth");
    menuNavBody.style.height = 0;
    menuNavBody.style.opacity = 0;
    menuNavBody.style.display = none;
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 40) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.zIndex = "1000";
    scrollTopBtn.classList.add("smooth");
  } else {
    scrollTopBtn.style.opacity = "";
    scrollTopBtn.style.zIndex = "";
    scrollTopBtn.classList.remove("smooth");
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emptyInputs();
    // showSuccessMessage();
  });

const inputs = Array.from(document.querySelectorAll(".input-group input"));
const message = document.getElementById("message");
inputs.push(message);

const emptyInputs = () => {
  inputs.forEach((item) => {
    item.value = "";
  });
};

const successMessage = document.querySelector(".success-message");
const sendMessageBtn = document.getElementById("send-message-btn");
const showSuccessMessage = () => {
  successMessage.classList.replace("d-none", "d-flex");
};

sendMessageBtn.addEventListener("click", () => {
  successMessage.classList.replace("d-flex", "d-none");
});

// const emptyInputs = () => {};

header.addEventListener("mousemove", move);
function move(e) {
  this.querySelectorAll(".image").forEach((image) => {
    const speed = image.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / -100;
    const y = (window.innerHeight - e.pageY * speed) / -100;
    header.hasAttribute("data-content")
      ? (image.style.transform = `rotate(-100deg)translateX(${x}px) translateY(${y}px)`)
      : (image.style.transform = `rotate(0deg)translateX(${x}px) translateY(${y}px)`);
  });
}

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   contactFormSubmit.preventDefault();
//   alert("yes");
// });
