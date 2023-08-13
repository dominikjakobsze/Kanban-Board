import { CarouselComponentInit, CarouselComponentKill, carouselApi } from './CarouselComponent.js';

const HeightControl = () => {
    const newColumn = document.querySelector('[data-column="new-column"]');
    const newColumnHeight = newColumn.offsetHeight;
    console.log(newColumnHeight);
    const allColumns = document.querySelectorAll('[data-column="column"]');
    const allSubColumns = document.querySelectorAll('[data-column="sub-column"]');
    allColumns.forEach(column => {
        column.style.height = `${newColumnHeight}px`;
    });
    allSubColumns.forEach(subColumn => {
        subColumn.style.height = `${newColumnHeight}px`;
    });
};

//HeightControl();
CarouselComponentInit();
console.log(carouselApi);