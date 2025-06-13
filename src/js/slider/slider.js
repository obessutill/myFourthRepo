// Slider
const brandsSwiper = new Swiper('.brands-slider', {
    slidesPerView: 1.3,
    spaceBetween: 0,
    loop: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        350: {
            slidesPerView: 1.35
        },
        370: {
            slidesPerView: 1.5
        },
        400: {
            slidesPerView: 1.65
        },
        450: {
            slidesPerView: 1.8
        },
        500: {
            slidesPerView: 1.95
        },
        550: {
            slidesPerView: 2.05
        },
        600: {
            slidesPerView: 2.2
        },
        650: {
            slidesPerView: 2.4
        },
        700: {
            slidesPerView: 2.6
        },
        750: {
            slidesPerView: 2.8
        }
    }
})

// let toggleSlider = function () {
//     let slider = document.querySelector('.brands-slider');
//     if (window.innerWidth > 767) {
//         slider.style.display = 'none';
//     } else {
//         slider.style.display = 'block';
//     }
// }
// toggleSlider();

// window.addEventListener('resize', toggleSlider);

//repairing brands Swiper
const repairingBrandsSwiper = new Swiper('.repairing-brands__slider', {
    slidesPerView: 1.3,
    spaceBetween: 0,
    loop: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        350: {
            slidesPerView: 1.35
        },
        370: {
            slidesPerView: 1.5
        },
        400: {
            slidesPerView: 1.65
        },
        450: {
            slidesPerView: 1.8
        },
        500: {
            slidesPerView: 1.95
        },
        550: {
            slidesPerView: 2.05
        },
        600: {
            slidesPerView: 2.2
        },
        650: {
            slidesPerView: 2.4
        },
        700: {
            slidesPerView: 2.6
        },
        750: {
            slidesPerView: 2.8
        }
    }
})



const priceSwiper = new Swiper('.price__slider', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    loop: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        350: {
            slidesPerView: 1.35
        },
        370: {
            slidesPerView: 1.5
        },
        400: {
            slidesPerView: 1.65
        },
        450: {
            slidesPerView: 1.8
        },
        500: {
            slidesPerView: 1.95
        },
        550: {
            slidesPerView: 2.05
        },
        600: {
            slidesPerView: 2.2
        },
        650: {
            slidesPerView: 2.4
        },
        700: {
            slidesPerView: 2.6
        },
        750: {
            slidesPerView: 2.8
        }
    }
})

let toggleSlider = function() {
    let sliders = [
    document.querySelector('.brands-slider'),
    document.querySelector('.repairing-brands__slider'),
    document.querySelector('.price__slider'),
];
let isBig = window.innerWidth > 767;
for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = isBig ? 'none' : 'block';
}

}
toggleSlider();
window.addEventListener('resize', toggleSlider);