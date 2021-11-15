const tl = new TimelineMax({ delay: 0.6 });
let image = document.querySelector('#image')
let firstParagraf = document.querySelector('.first')
let secondtParagraf = document.querySelector('.second')
tl.fromTo(image, 0.5, { opacity: 0, skewX: 20 }, { opacity: 1, skewX: 0 })
    .fromTo(firstParagraf, 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
    .fromTo(secondtParagraf, 0.5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })