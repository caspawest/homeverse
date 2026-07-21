'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * shared render utilities
 *
 * The service, property, features and blog sections all consisted of many
 * near-identical blocks of markup. These helpers build that markup from the
 * data arrays in data.js so the repeated structure lives in exactly one place.
 */

const imagePath = function (fileName) { return `./assets/images/${fileName}`; }

const renderList = function (selector, items, templateFunc) {
  const list = document.querySelector(selector);
  if (!list) return;
  list.innerHTML = items.map(templateFunc).join("");
}

const serviceCard = function (service) {
  return `
    <li>
      <div class="service-card">

        <div class="card-icon">
          <img src="${imagePath(service.image)}" alt="Service icon">
        </div>

        <h3 class="h3 card-title">
          <a href="#">${service.title}</a>
        </h3>

        <p class="card-text">
          over 1 million+ homes for sale available on the website, we can match you with a house you will want
          to call home.
        </p>

        <a href="#" class="card-link">
          <span>Find A Home</span>

          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>

      </div>
    </li>`;
}

const propertyCard = function (property) {
  return `
    <li>
      <div class="property-card">

        <figure class="card-banner">

          <a href="#">
            <img src="${imagePath(property.image)}" alt="${property.title}" class="w-100">
          </a>

          <div class="card-badge ${property.badge}">${property.status}</div>

          <div class="banner-actions">

            <button class="banner-actions-btn">
              <ion-icon name="location"></ion-icon>

              <address>Belmont Gardens, Chicago</address>
            </button>

            <button class="banner-actions-btn">
              <ion-icon name="camera"></ion-icon>

              <span>4</span>
            </button>

            <button class="banner-actions-btn">
              <ion-icon name="film"></ion-icon>

              <span>2</span>
            </button>

          </div>

        </figure>

        <div class="card-content">

          <div class="card-price">
            <strong>$34,900</strong>/Month
          </div>

          <h3 class="h3 card-title">
            <a href="#">${property.title}</a>
          </h3>

          <p class="card-text">
            Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
          </p>

          <ul class="card-list">

            <li class="card-item">
              <strong>3</strong>

              <ion-icon name="bed-outline"></ion-icon>

              <span>Bedrooms</span>
            </li>

            <li class="card-item">
              <strong>2</strong>

              <ion-icon name="man-outline"></ion-icon>

              <span>Bathrooms</span>
            </li>

            <li class="card-item">
              <strong>3450</strong>

              <ion-icon name="square-outline"></ion-icon>

              <span>Square Ft</span>
            </li>

          </ul>

        </div>

        <div class="card-footer">

          <div class="card-author">

            <figure class="author-avatar">
              <img src="./assets/images/author.jpg" alt="William Seklo" class="w-100">
            </figure>

            <div>
              <p class="author-name">
                <a href="#">William Seklo</a>
              </p>

              <p class="author-title">Estate Agents</p>
            </div>

          </div>

          <div class="card-footer-actions">

            <button class="card-footer-actions-btn">
              <ion-icon name="resize-outline"></ion-icon>
            </button>

            <button class="card-footer-actions-btn">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="card-footer-actions-btn">
              <ion-icon name="add-circle-outline"></ion-icon>
            </button>

          </div>

        </div>

      </div>
    </li>`;
}

const featuresCard = function (feature) {
  return `
    <li>
      <a href="#" class="features-card">

        <div class="card-icon">
          <ion-icon name="${feature.icon}"></ion-icon>
        </div>

        <h3 class="card-title">${feature.title}</h3>

        <div class="card-btn">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>

      </a>
    </li>`;
}

const blogCard = function (blog) {
  return `
    <li>
      <div class="blog-card">

        <figure class="card-banner">
          <img src="${imagePath(blog.image)}" alt="${blog.title}" class="w-100">
        </figure>

        <div class="blog-content">

          <div class="blog-content-top">

            <ul class="card-meta-list">

              <li>
                <a href="#" class="card-meta-link">
                  <ion-icon name="person"></ion-icon>

                  <span>by: Admin</span>
                </a>
              </li>

              <li>
                <a href="#" class="card-meta-link">
                  <ion-icon name="pricetags"></ion-icon>

                  <span>${blog.category}</span>
                </a>
              </li>

            </ul>

            <h3 class="h3 blog-title">
              <a href="#">${blog.title}</a>
            </h3>

          </div>

          <div class="blog-content-bottom">
            <div class="publish-date">
              <ion-icon name="calendar"></ion-icon>

              <time datetime="2022-27-04">Apr 27, 2022</time>
            </div>

            <a href="#" class="read-more-btn">Read More</a>
          </div>

        </div>

      </div>
    </li>`;
}

renderList("[data-service-list]", servicesData, serviceCard);
renderList("[data-property-list]", propertiesData, propertyCard);
renderList("[data-features-list]", featuresData, featuresCard);
renderList("[data-blog-list]", blogsData, blogCard);



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 
