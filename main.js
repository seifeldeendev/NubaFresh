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

function updateMainText(data) {
  try {
    data.header.forEach((linkData) => {
      const linkPath = new URL(
        window.location.protocol +
          "//" +
          window.location.hostname +
          "/" +
          linkData.url
      ).pathname;
      if (window.location.pathname.includes(linkPath)) {
        document.title =
          "NubaFresh - " +
          linkData[
            "name" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
      }
      if (
        window.location.pathname === "/" &&
        linkData.url.includes("index.html")
      ) {
        document.title =
          "NubaFresh - " +
          linkData[
            "name" +
              currentLanguage.charAt(0).toUpperCase() +
              currentLanguage.slice(1)
          ];
      }
    });
  } catch (error) {
    console.error("Error updating main text:", error);
  }
  try {
    const maintextH1 = document.getElementById("main-text-h1");
    maintextH1.innerHTML =
      data.main[
        "title" +
          currentLanguage.charAt(0).toUpperCase() +
          currentLanguage.slice(1)
      ];

    const maintextP = document.getElementById("main-text-p");
    maintextP.innerHTML =
      data.main[
        "subtitle" +
          currentLanguage.charAt(0).toUpperCase() +
          currentLanguage.slice(1)
      ];
  } catch (error) {
    console.error("Error updating main text:", error);
  }
  try {
    const SeconedSectionTitle = document.getElementById("SeconedSectionTitle");
    SeconedSectionTitle.innerHTML =
      data.main[
        "SeconedSectionTitle" +
          currentLanguage.charAt(0).toUpperCase() +
          currentLanguage.slice(1)
      ];
  } catch (error) {
    console.error("Error updating main text:", error);
  }
  try {
    const footerHeaderTitle = document.getElementById("footerHeaderTitle");
    footerHeaderTitle.innerHTML =
      data.main[
        "footerHeaderTitle" +
          currentLanguage.charAt(0).toUpperCase() +
          currentLanguage.slice(1)
      ];

    const chooseLang = document.getElementById("chooseLang");
    chooseLang.innerHTML =
      data.main[
        "chooseLang" +
          currentLanguage.charAt(0).toUpperCase() +
          currentLanguage.slice(1)
      ];
  } catch (error) {
    console.error("Error updating main text:", error);
  }
}

function updateNavigationLinks(headerLinks) {
  const normalNavUl = document.getElementById("normal-nav-ul");
  const navPhoneUl = document.getElementById("nav-phone-ul");

  headerLinks.forEach((linkData) => {
    const createNavItem = (ul) => {
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
      ul.appendChild(li);

      const linkPath = new URL(a.href).pathname;
      if (window.location.pathname === linkPath) {
        a.classList.add("active");
      }
      if (window.location.pathname === "/" && a.href.includes("index.html")) {
        a.classList.add("active");
      }
    };

    createNavItem(normalNavUl);
    createNavItem(navPhoneUl);
  });
}

function updateFeatureCards(features) {
  const featureCardsContainer = document.getElementById("features");
  featureCardsContainer.innerHTML = "";

  features.forEach((featureItem) => {
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
}

function updateFoodCards(food) {
  const foodCardsContainer = document.getElementById("Foods");
  foodCardsContainer.innerHTML = "";

  food.forEach((foodItem) => {
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
}

function updateVideoSlides(videos) {
  const videoContainer = document.getElementById("video-slider");
  videoContainer.innerHTML = "";

  videos.forEach((videoItem, index) => {
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
}

function loadData() {
  return fetch("https://seifeldeendev.github.io/NubaFresh/data.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error loading data:", error);
      throw error;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const preferredLanguage = localStorage.getItem("preferredLanguage");
  if (preferredLanguage) {
    currentLanguage = preferredLanguage;
  }
  if (currentLanguage !== "ar") {
    try {
      document.body.classList.add("not-arabic");
      const phoneImg = document.getElementById("mobile-img");
      phoneImg.classList.add("mobile-img-non-arabic");
    } catch {
      console.error(`Error`);
    }
    try {
      const sh1Elements = document.getElementsByClassName("sh1");
      for (let index = 0; index < sh1Elements.length; index++) {
        sh1Elements[index].classList.add("sh1-non-arabic");
      }
    } catch {
      console.error(`Error`);
    }
    try {
      const sh2Elements = document.getElementsByClassName("sh2");
      for (let index = 0; index < sh2Elements.length; index++) {
        sh2Elements[index].classList.add("sh2-non-arabic");
      }
    } catch {
      console.error(`Error`);
    }
    try {
      const sh3Elements = document.getElementsByClassName("sh3");
      for (let index = 0; index < sh3Elements.length; index++) {
        sh3Elements[index].classList.add("sh3-non-arabic");
      }
    } catch {
      console.error(`Error`);
    }
  }
  var JsonData;

  loadData()
    .then((data) => {
      JsonData = data;
      return Promise.allSettled([
        Promise.resolve().then(() => updateNavigationLinks(JsonData.header)),
        Promise.resolve().then(() => updateMainText(JsonData)),
        Promise.resolve().then(() => updateFeatureCards(JsonData.features)),
        Promise.resolve().then(() => updateFoodCards(JsonData.food)),
        Promise.resolve().then(() => updateVideoSlides(JsonData.video)),
      ]);
    })
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(
            `Error executing function ${index + 1}:`,
            result.reason
          );
        }
      });
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
});
