import EmblaCarousel from 'embla-carousel';

export let carouselApi = null;

export const CarouselComponentInit = () => {
    const carouselNode = document.querySelector('[data-carousel="main"]');
    const carouselOptions = { 
        loop: false,
        align: 'start',
        axis: 'x',
        dragFree: false,
        watchDrag: false,
        slidesToScroll: 1,
     };
    carouselApi = EmblaCarousel(carouselNode, carouselOptions);
    console.log("carousel running");
    CarouselControls();
};

export const CarouselComponentKill = () => {
    carouselApi.destroy();
    console.log("carousel killed");
};

export const CarouselControls = () => {
    const prevBtn = document.querySelector('[data-carousel="prev-btn"]');
    const nextBtn = document.querySelector('[data-carousel="next-btn"]');
    prevBtn.addEventListener('click', carouselApi.scrollPrev, false);
    nextBtn.addEventListener('click', carouselApi.scrollNext, false);
    console.log("carousel controls ON");
};
