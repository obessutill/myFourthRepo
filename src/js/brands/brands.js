let elements = document.querySelectorAll('.brands-card');
let showButton = document.querySelector('.show-button');
let from;

let hideCards = function () {
    from = window.innerWidth >= 1120 ? 8 : 6;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('brands-card--hidden');
    }
    for (let i = elements.length - 1; i >= from; i--) {
        elements[i].classList.add('brands-card--hidden');
    }
}

let allHide = function () {
    for (let i = 0; i < elements.length - 1; i++) {
        elements[i].classList.remove('brands-card--hidden');
    }
    hideCards();

};
allHide();

showButton.addEventListener('click', function () {
    let hiddenElements = document.querySelectorAll('.brands-card--hidden');
    if (hiddenElements.length > 0) {
        for (let i = 0; i < hiddenElements.length; i++) {
            hiddenElements[i].classList.remove('brands-card--hidden');
        }
        showButton.textContent = 'Скрыть все';
        showButton.classList.add('show-button--open');
    } else {
        allHide();
        showButton.classList.remove('show-button--open');
        showButton.textContent = 'Показать все';
    }
})

if (window.innerWidth < 768) {
    showButton.classList.add('show-button--hidden');
}

window.addEventListener('resize', function () {
    hideCards();
    if (window.innerWidth < 768) {
        showButton.classList.add('show-button--hidden');
    } else {
        showButton.classList.remove('show-button--hidden');
    }
})