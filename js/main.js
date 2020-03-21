let pageBody = document.querySelector('body');
let menu = document.querySelector('.menu');
let sideMenu = document.querySelector('aside');
let closeButton = document.querySelector('.close-button');
let searchButton = document.querySelector('.search');
let searchBox = document.querySelector('#search-text');
let overlay = document.querySelector('#overlay');

menu.onclick = function() {
    (sideMenu.classList == "clicked") ? sideMenu.classList.remove('clicked') : sideMenu.classList.add('clicked');
    overlay.classList.add('clicked');
    pageBody.classList.add('noscroll');
};

closeButton.onclick = function() {
    sideMenu.classList.remove('clicked');
    overlay.classList.remove('clicked');
    pageBody.classList.remove('noscroll');
};

searchButton.onclick = function() {
    (searchBox.classList == 'tap') ? searchBox.classList.remove('tap') : searchBox.classList.add('tap');
};