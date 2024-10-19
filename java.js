document.addEventListener('DOMContentLoaded', function () {

    const video = document.getElementById('video');
    const castelo = document.getElementById('castelo');
    
    video.onended = function () {
        video.style.display = 'none';
        castelo.style.display = 'block';
    };
});