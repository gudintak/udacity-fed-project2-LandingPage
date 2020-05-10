/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function getActiveElement() {
    maxSection = sections[0];
    minValue = 1000000;
    for (section of sections) {
        let bound = section.getBoundingClientRect();
        if (bound.top > -300 & bound.top < minValue) {
            minValue = bound.top;
            maxSection = section;
        };
    };
    return maxSection;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function buildMenu() {
    for (let item of sections) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        navbar.appendChild(section);
    };
};

function setSessionAsActive () {
    window.addEventListener('scroll', function (event) {
        let section = getActiveElement();
        section.classList.add('your-active-class');
        for (let item of sections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};

function clickToSection() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildMenu();

// Scroll to section on link click
clickToSection();

// Set sections as active
setSessionAsActive();
