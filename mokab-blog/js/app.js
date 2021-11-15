// Bootstrap4 slder
$('.carousel').carousel({
    interval: 3000,
    pause: false,
})


// nav icon in mobile mode
document.querySelector('.NavICon').addEventListener('click', function() {
    document.querySelector('.container__Icon').classList.toggle('change');

    document.querySelector(' .nav-container').classList.toggle('full');

})

//button day and night mode
document.querySelector("#cb1").addEventListener('click', function() {
    document.body.classList.toggle('day-background');
})

// install AOS.js
AOS.init();