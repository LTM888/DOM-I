const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

console.log(logo);

let allNav = document.querySelectorAll('nav');
console.log(allNav);

let servicesNavItem = document.querySelectorAll('a');
console.log(servicesNavItem[0]);


let productNavItem = document.querySelectorAll('a');
console.log(productNavItem[1]);

let visionNavItem = document.querySelectorAll('a');
console.log(visionNavItem[2]);

let featuresNavItem = document.querySelectorAll('a');
console.log(featuresNavItem[3]);
let aboutNavItem = document.querySelectorAll('a');
console.log(aboutNavItem[4]);

let contactNavItem = document.querySelectorAll('a');
console.log(contactNavItem[5]);

let h1 =document.querySelector('h1');
console.log(h1);

let btnWithID = document.querySelector('button');
console.log(btnWithID);

let ctaImg = document.getElementById ('cta-img');
console.log(ctaImg);

let mainContent = document.querySelector('.main-content');
console.log(mainContent);

let topContent = document.querySelector('.top-content');
console.log(topContent);

let hFeatures = document.getElementsByTagName('h4');
console.log(hFeatures[0]);

let pFeatures = document.getElementsByTagName('p');
console.log(pFeatures[0]);

let hAbout = document.getElementsByTagName('h4');
console.log(hAbout[1]);

let pAbout = document.getElementsByTagName('p');
console.log(pAbout[1]);

let middleImg = document.getElementById('.middle-img');
console.log(pAbout);