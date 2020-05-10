//List items to DOM
const navbar__list = document.getElementById('navbar__list');
let newListItem = document.createElement('li');
newListItem.innerHTML = `<a href="#section1">Section 1</a>
<a href="#section2">Section 2</a>
<a href="#section3">Section 3</a>
<a href="#section4">Section 4</a>`;
navbar__list.appendChild(newListItem);

//Navigation on smaller screens
const navbarSwitch = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('#navbar__list');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

navbarSwitch.addEventListener("click", navbarSwitchClick);

function navbarSwitchClick() {
    navbarSwitch.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    smoothScroll(event);
    if(navbarMenu.classList.contains("open")){
        navbarSwitch.click();
    }
}

smoothScroll = function(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "body" : event.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



/// script for active navigation style scroll

window.addEventListener('scroll', function() {
    let nav = document.querySelector('.navbar__menu');

    (window.scrollY >= 1) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});


window.addEventListener('scroll', function(event) {
    let navLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});
