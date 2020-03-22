let pageBody = document.querySelector('body');
let menu = document.querySelector('.menu');
let sideMenu = document.querySelector('aside');
let closeButton = document.querySelector('.close-button');
let searchButton = document.querySelector('.search');
let searchBox = document.querySelector('#search-text');
let overlay = document.querySelector('#overlay');
let video1 = document.querySelector('.vid1');
let video2 = document.querySelector('.vid2');
let vids = document.querySelectorAll('.vids');
let videos = Object.values(vids);
let vidPlayer = document.querySelector('#video-player');
let vidSrc = document.querySelector('#video-player video');


menu.onclick = function() {
    exitY = scroller;
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

let scroller;

window.onscroll = function() {
    scroller = pageYOffset;
};

let exitY;

videos.forEach(function(curr) {
    curr.onclick = function() {
        exitY = scroller;
        pageBody.style.top = -(pageYOffset) + "px";
        overlay.classList.add('clicked');
        pageBody.classList.add('noscroll');
        if (curr.classList.contains('vid1')) {
            vidSrc.src = "video/video1.mp4";
        } else if (curr.classList.contains('vid2')) {
            vidSrc.src = "video/video2.mp4";
        }
        vidPlayer.classList.add('opened');
    };
});

// video1.onclick = function() {
//     exitY = scroller;
//     pageBody.style.top = -(pageYOffset) + "px";
//     overlay.classList.add('clicked');
//     pageBody.classList.add('noscroll');
// };

overlay.onclick = function() {
    (sideMenu.classList == "clicked") ? sideMenu.classList.remove('clicked') : null;
    overlay.classList.remove('clicked');
    pageBody.classList.remove('noscroll');
    vidPlayer.classList.remove('opened');
    pageBody.style.top = 0;
    window.scrollTo(0, exitY);
};

