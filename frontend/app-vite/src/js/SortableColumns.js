import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

const columnsContainer = document.querySelector("[data-layout='right-panel-bottom']");

new Sortable(columnsContainer, {
    animation: 150,
    handle: "[data-board='column']",
    scroll: true,
    forceAutoscrollFallback: false, 
    scrollSensitivity: 30, 
    scrollSpeed: 10, 
    bubbleScroll: true,
    group: {
        name: 'columns',
        pull: false, // whether dragging items from this group to add to another is allowed
        put: false, // whether dropping on this group from another is allowed
    },
});


const tasksContainers = document.querySelectorAll("[data-board='column']");
tasksContainers.forEach((tasksContainer) => {
    new Sortable(tasksContainer, {
        animation: 150,
        handle: "[data-board='task']",
        scroll: true,
        forceAutoscrollFallback: false, 
        scrollSensitivity: 30, 
        scrollSpeed: 10, 
        bubbleScroll: true,
        group: {
            name: 'tasks',
            pull: true,
            put: true,
        }, 
    });
});
