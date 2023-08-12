import EmblaCarousel from 'embla-carousel';

export let carouselApi = null;

export const CarouselComponentInit = () => {
    const carouselNode = document.querySelector('[data-carousel="main"]');
    const carouselOptions = { 
        loop: false,
        align: 'start',
        axis: 'x',
        dragFree: true,
        watchDrag: true,
     };
    carouselApi = EmblaCarousel(carouselNode, carouselOptions);
    console.log(carouselApi.slideNodes(),"running");
};

export const CarouselComponentKill = () => {
    carouselApi.destroy();
    console.log("killed");
};

export const CarouselControls = () => {
    
};
