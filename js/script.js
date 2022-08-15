const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navImg = document.querySelector('#nav-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navImg.src = "img/icons/NAVCLOSE.svg";
    } else {
        navImg.src = "img/icons/NAV.svg";
    }
}