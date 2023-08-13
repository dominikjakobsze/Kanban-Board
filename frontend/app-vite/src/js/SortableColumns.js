import Sortable from "sortablejs";

const columnsContainer = document.querySelector("[data-layout='right-panel-bottom']");

new Sortable(columnsContainer, {
    animation: 150,
    handle: "[data-board='column']",
});
console.log(columnsContainer);