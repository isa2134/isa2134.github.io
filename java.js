document.addEventListener('DOMContentLoaded', function () {

    const video = document.getElementById('video');
    const castelo = document.getElementById('castelo');
    
    video.onended = function () {
        video.style.display = 'none';
        castelo.style.display = 'block';
    };
});

const menuButton = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

menuButton.addEventListener("click", function(){
    navList.classList.toggle("active");
});