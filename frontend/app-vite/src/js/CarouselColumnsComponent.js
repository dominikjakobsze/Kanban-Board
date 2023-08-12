import EmblaCarousel from 'embla-carousel';
import Sortable from 'sortablejs';

const allColumns = document.querySelectorAll('[data-column="column"]');
const allSubColumns = document.querySelectorAll('[data-column="sub-column"]');
// const carouselOptions = { 
//     loop: false,
//     axis: 'y',
//     dragFree: false,
//     watchDrag: false,
//     dragThreshold: 100,
//     active: true,
//  };
// const carouselApi = EmblaCarousel(allColumns[0], carouselOptions);
// console.log(carouselApi);
// console.log(allColumns);

const test = new Sortable(allSubColumns[0], {
    animation: 150,
    scroll: true, // Enable the plugin. Can be HTMLElement.
	forceAutoscrollFallback: true, // force autoscroll plugin to enable even when native browser autoscroll is available
	scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
	scrollSpeed: 3, // px, speed of the scrolling
	bubbleScroll: true // apply autoscroll to all parent elements, allowing for easier movement
});

allColumns.forEach(column => {
    new Sortable(column, {
        group: {
            name: 'jira',
            pull: true,
            put: true
        },
        animation: 150,
        scroll: true, // Enable the plugin. Can be HTMLElement.
        forceAutoscrollFallback: true, // force autoscroll plugin to enable even when native browser autoscroll is available
        scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
        scrollSpeed: 3, // px, speed of the scrolling
        bubbleScroll: true // apply autoscroll to all parent elements, allowing for easier movement
    });
});

console.log(test);