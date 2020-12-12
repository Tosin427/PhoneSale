// Our Carousel
const slider1 = document.getElementById('glide__1');
const slider2 = document.getElementById('glide_2');

//Hero
if(slider1) {
    new Glide(slider1, {
        type: 'carousel',
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear',
    }).mount();
}


// Latest Products
if(slider2) {
    new Glide(slider2, {
        type: 'carousel',
        startAt: 0,
        hoverpause: true,
        perView: 4,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
        },
    }).mount();
}

