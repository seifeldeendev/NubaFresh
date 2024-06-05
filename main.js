let tooglei = document.querySelector(".toogle-i");
let phonelist = document.querySelector(".phone-list");
let closex = document.querySelector(".close-x");

tooglei.addEventListener("click", function () {
  phonelist.classList.add("active");
});

closex.addEventListener("click", function () {
  phonelist.classList.remove("active");
});

let scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let index = 0;

function next() {
  slides = document.querySelectorAll(".slide-container");
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides = document.querySelectorAll(".slide-container");
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

setInterval(next, 10000);


function changeLanguage(language) {
  localStorage.setItem("preferredLanguage", language);
  location.reload();
}

function loadData() {
  fetch("https://seifeldeendev.github.io/NubaFresh/data.json")
  // fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      const maintextH1 = document.getElementById("main-text-h1");
      maintextH1.innerHTML = data.main["title" + currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)];
      
      const maintextP = document.getElementById("main-text-p");
      maintextP.innerHTML = data.main["subtitle" + currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)];
      
      const SeconedSectionTitle = document.getElementById("SeconedSectionTitle");
      SeconedSectionTitle.innerHTML = data.main["SeconedSectionTitle" + currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)];
      
      const footerHeaderTitle = document.getElementById("footerHeaderTitle");
      footerHeaderTitle.innerHTML = data.main["footerHeaderTitle" + currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)];
      
      
      const chooseLang = document.getElementById("chooseLang");
      chooseLang.innerHTML = data.main["chooseLang" + currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)];
      
      const headerLinks = data.header;
      const normalNavUl = document.getElementById("normal-nav-ul");
      const navPhoneUl = document.getElementById("nav-phone-ul");
      const foodCardsContainer = document.getElementById("Foods");
      const featureCardsContainer = document.getElementById("features");
      foodCardsContainer.innerHTML = "";
      const videoContainer = document.getElementById("video-slider");

      headerLinks.forEach((linkData) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = linkData.url;
        a.textContent =
          linkData[
            "name" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        li.appendChild(a);
        normalNavUl.appendChild(li);

        const linkPath = new URL(a.href).pathname;
        if (window.location.pathname === linkPath) {
          a.classList.add("active");
        }
        if (window.location.pathname === "/" && a.href.includes("index.html")) {
          a.classList.add("active");
        }
      });

      headerLinks.forEach((linkData) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = linkData.url;
        a.textContent =
          linkData[
            "name" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        li.appendChild(a);
        navPhoneUl.appendChild(li);

        const linkText = a.textContent.trim();
        if (window.location.pathname.includes(linkText)) {
          a.classList.add("active");
        }
        if (window.location.pathname === "/" && a.href.includes("index.html")) {
          a.classList.add("active");
        }
      });

      data.features.forEach((featureItem) => {
        const featureCard = document.createElement("div");
        featureCard.classList.add("features-card");
        featureCard.setAttribute("data-aos", "fade-up");
        featureCard.setAttribute("data-aos-duration", "1000");
      
        const image = document.createElement("img");
        image.src = featureItem.imgUrl;
        image.alt =
          featureItem[
            "title" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        image.setAttribute("data-aos", "fade-up");
        image.setAttribute("data-aos-duration", "1200");
      
        const title = document.createElement("h1");
        title.textContent =
          featureItem[
            "title" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        title.setAttribute("data-aos", "fade-up");
        title.setAttribute("data-aos-duration", "1300"); 
      
        const description = document.createElement("p");
        description.textContent =
          featureItem[
            "subtitle" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        description.setAttribute("data-aos", "fade-up");
        description.setAttribute("data-aos-duration", "1400");
      
        featureCard.appendChild(image);
        featureCard.appendChild(title);
        featureCard.appendChild(description);
        featureCardsContainer.appendChild(featureCard);
      });
      

      data.food.forEach((foodItem) => {
        const foodCard = document.createElement("div");
        foodCard.classList.add("Food-Card");
        foodCard.setAttribute("data-aos", "fade-up");
        foodCard.setAttribute("data-aos-duration", "1000");

        const link = document.createElement("a");
        link.href = "product-page-" + foodItem.id + ".html";

        const image = document.createElement("img");
        image.src = foodItem.img;
        image.alt =
          foodItem[
            "name" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        image.setAttribute("data-aos", "fade-up");
        image.setAttribute("data-aos-duration", "1100");

        const title = document.createElement("h1");
        title.textContent =
          foodItem[
            "name" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        title.setAttribute("data-aos", "fade-up");
        title.setAttribute("data-aos-duration", "1200");

        const description = document.createElement("p");
        description.textContent =
          foodItem[
            "description" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        description.setAttribute("data-aos", "fade-up");
        description.setAttribute("data-aos-duration", "1300");

        link.appendChild(image);
        link.appendChild(title);
        link.appendChild(description);
        foodCard.appendChild(link);
        foodCardsContainer.appendChild(foodCard);
      });

      data.video.forEach((videoItem, index) => {
        const slideContainer = document.createElement("div");
        slideContainer.classList.add("slide-container");
        const slide = document.createElement("div");
        slide.classList.add("slide");

        const videoElement = document.createElement("video");
        videoElement.src = videoItem.url;
        videoElement.setAttribute("height", "30%");
        videoElement.setAttribute("width", "100%");
        videoElement.muted = true;
        videoElement.autoplay = true;
        videoElement.loop = true;

        const contentContainer = document.createElement("div");
        contentContainer.classList.add("content");
        const contentText = document.createElement("p");
        contentText.textContent =
          videoItem[
            "title" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
        contentContainer.appendChild(contentText);
        slide.appendChild(contentContainer);
        slide.appendChild(videoElement);
        slideContainer.appendChild(slide);
        if (index === 0) {
          slideContainer.classList.add("active");
        }
        videoContainer.appendChild(slideContainer);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  const preferredLanguage = localStorage.getItem("preferredLanguage");
  if (preferredLanguage) {
    currentLanguage = preferredLanguage;
  }
  if (currentLanguage !== "ar") {
    document.body.classList.add("not-arabic");
    const phoneImg = document.getElementById("mobile-img");
    phoneImg.classList.add("mobile-img-non-arabic");
    const sh1Elements = document.getElementsByClassName("sh1");
    for (let index = 0; index < sh1Elements.length; index++) {
      sh1Elements[index].classList.add("sh1-non-arabic");
    }
    const sh2Elements = document.getElementsByClassName("sh2");
    for (let index = 0; index < sh2Elements.length; index++) {
      sh2Elements[index].classList.add("sh2-non-arabic");
    }
    const sh3Elements = document.getElementsByClassName("sh3");
    for (let index = 0; index < sh3Elements.length; index++) {
      sh3Elements[index].classList.add("sh3-non-arabic");
    }
  }

  loadData();
});