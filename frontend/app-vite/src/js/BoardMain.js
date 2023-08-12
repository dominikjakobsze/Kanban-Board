import { CarouselComponentInit, CarouselComponentKill, carouselApi } from './CarouselComponent.js';

const HeightControl = () => {
    const newColumn = document.querySelector('[data-column="new-column"]');
    const newColumnHeight = newColumn.offsetHeight;
    console.log(newColumnHeight);
    const allColumns = document.querySelectorAll('[data-column="column"]');
    console.log(allColumns);
};

HeightControl();
CarouselComponentInit();
console.log(carouselApi);