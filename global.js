/* 
    Filename: global.js
    Purpose: holds site-wide js functionality for the design system website.
    Author: Montana Pistell
    Last Modified: February 13, 2023
*/

// Mobile Hamburger Menu Functionality
/* Adapted from: Mobile Navbar Menu using HTML, CSS and JS https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci 
/* 
    Adaptations: I built and styled my desktop navbar first, then referred to the tutorial to create the HTML structure for my
    mobile menu and hamburger icon. I then applied the tutorial style rules to my mobile menu, personalizing style, spacing, and layout. 
    Finally, I added the tutorial JavaScript to my JavaScript file and linked it to my page. The mobile implementation is non-functional 
    in the example section of this page, however it is functional as a standalone piece and in the linked codepen.
*/

// console.log("js linked correctly");

const hamburger = document.querySelector(".hamburger");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".mobile-nav-link");

console.log(hamburger);
hamburger.addEventListener('click', openMenu);

navLinks.forEach(link => link.addEventListener('click', closeMenu));

function openMenu() {
    console.log("menu toggled");
    hamburger.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
}

function closeMenu() {
    hamburger.classList.remove('active');
    mobileNavMenu.classList.remove('active');
}