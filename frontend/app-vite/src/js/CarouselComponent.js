import EmblaCarousel from 'embla-carousel';

const carouselNode = document.querySelector('[data-carousel="main"]');
const carouselOptions = { 
    loop: false,
    align: 'start',
    axis: 'x',
    dragFree: true,
    watchDrag: true,
 };
const carouselApi = EmblaCarousel(carouselNode, carouselOptions);
console.log(carouselApi.slideNodes(),"running");
