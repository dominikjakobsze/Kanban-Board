import EmblaCarousel from 'embla-carousel';

const emblaNode = document.querySelector('[data-carousel="main"]');
const options = { loop: false };

const emblaApi = EmblaCarousel(emblaNode, options);

console.log(emblaApi.slideNodes());
