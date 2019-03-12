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

// Navation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let allNav = document.querySelectorAll('nav a');
allNav.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`]
})


// Header 

let h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

let btnWithID = document.querySelector('button');
btnWithID.textContent = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
console.log(ctaImg);

ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainContent = document.querySelector('.main-content');
console.log(mainContent);

let topContent = document.querySelector('.top-content');
console.log(topContent);

let hFeatures = document.getElementsByTagName('h4');
hFeatures.textContent = siteContent.mainContent.features-h4;

let pFeatures = document.getElementsByTagName('p');
console.log(pFeatures[0]);

let hAbout = document.getElementsByTagName('h4');
console.log(hAbout[1]);

let pAbout = document.getElementsByTagName('p');
console.log(pAbout[1]);

let middleImg = document.getElementById('middle-img');
console.log(middleImg);

let bottomContent = document.querySelector('.bottom-content');
console.log(bottomContent);

let hServices = document.getElementsByTagName('h4');
console.log(hServices[2])

let pServices = document.getElementsByTagName('p');
console.log(pFeatures[2]);

let hProduct = document.getElementsByTagName('h4');
console.log(hProduct[3]);

let pProduct = document.getElementsByTagName('p');
console.log(pProduct[3]);

let hVision = document.getElementsByTagName('h4');
console.log(hVision[4]);

let pVision = document.getElementsByTagName('p');
console.log(pVision[4]);

let contact = document.querySelector('.contact');
console.log(contact);

let hContact = document.getElementsByTagName('h4');
console.log(hContact[5]);
