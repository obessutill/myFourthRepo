let mainAbout = document.querySelector('.main__about');
let readMoreToggle = false;
let checkWindowWidth = function () {
    let windowWidth = window.innerWidth;
    if (!readMoreToggle) {
        mainAbout.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.`
        if (windowWidth > 767 && windowWidth < 1366) {
            mainAbout.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br/><br/>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера`
        } else if (windowWidth > 1366) {
            mainAbout.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br/><br/>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким`
        }
    } else {
        mainAbout.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br/><br/>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким<br/><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur accusantium quos quam 
    architecto magnam? Reprehenderit, quas rem!`
    }
}

window.addEventListener('resize', function () {
    checkWindowWidth();
})

checkWindowWidth();

let readMoreBtn = document.querySelector('.main__read-more-button')
readMoreBtn.addEventListener('click', function () {
    if (!readMoreBtn.classList.contains('read-more-button--active')) {
        readMoreBtn.classList.add('read-more-button--active');
        readMoreToggle = true;
        checkWindowWidth();
        readMoreBtn.textContent = 'Скрыть'
    } else {
        readMoreBtn.classList.remove('read-more-button--active');
        readMoreToggle = false;
        checkWindowWidth();
        readMoreBtn.textContent = 'Читать далее';
    }
})