import EmblaCarousel from 'embla-carousel';

const allColumns = document.querySelectorAll('[data-column="column"]');
const carouselOptions = { 
    loop: false,
    align: 'start',
    axis: 'y',
    dragFree: true,
    watchDrag: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',

 };
const carouselApi = EmblaCarousel(allColumns[0], carouselOptions);
console.log(carouselApi);
console.log(allColumns);