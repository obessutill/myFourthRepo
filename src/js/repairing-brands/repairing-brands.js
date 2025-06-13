
let repairingElements = document.querySelectorAll('.repairing-service');
let repairingShowButton = document.querySelector('.repairing__show-button')
let begin;


let hideBrands = function () {
    begin = window.innerWidth >= 1120 ? 4 : 3;
    for (let i = 0; i < repairingElements.length; i++) {
        repairingElements[i].classList.remove('repairing-service--hidden');
    }
    for (let i = repairingElements.length - 1; i >= begin; i--) {
        repairingElements[i].classList.add('repairing-service--hidden');
    }
}

let hideAll = function () { 
    for (let i = 0; i < repairingElements.length - 1; i++) {
        repairingElements[i].classList.remove('repairing-service--hidden');
    }
    hideBrands();
};
hideAll();
console.log(repairingShowButton);

repairingShowButton.addEventListener('click', function () {
    let hiddenRepairingElements = document.querySelectorAll('.repairing-service--hidden');
    if (hiddenRepairingElements.length > 0) {
        for (let i = 0; i < hiddenRepairingElements.length; i++) {
            hiddenRepairingElements[i].classList.remove('repairing-service--hidden');
        }
        repairingShowButton.textContent = 'Скрыть всё';
        repairingShowButton.classList.add('repairing__show-button--open');
    } else {
        hideAll();
        repairingShowButton.classList.remove('repairing__show-button--open');
        repairingShowButton.textContent = 'Показать всё';
    }
})

if (window.innerWidth < 768) {
    repairingShowButton.classList.add('repairing__show-button--hidden');
}

window.addEventListener('resize', function () {
    hideBrands();
    if (window.innerWidth < 768) {
        repairingShowButton.classList.add('repairing__show-button--hidden');
    } else {
        repairingShowButton.classList.remove('repairing__show-button--hidden');
    }
})