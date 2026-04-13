console.log(window.innerWidth)
const body = document.querySelector('body');
const grid = document.querySelector('.grid');



window.addEventListener('load', function () {
    const preloader = document.querySelector('#preloader')
    preloader.classList.add('close');

    setTimeout(function () {
        body.classList.remove("noScroll");
        grid.style.opacity = 1;


        setTimeout(function () {
            preloader.style.display = 'none';
        }, 600);
    }, 500);

    // Время полной загрузки страницы
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Страница загружена за ${loadTime} мс`);
});






const header = document.querySelector('header');
const headerBurger = document.querySelector('header .burger');
const headerMenuBurger = document.querySelector('header .menuBurger');
const headerMenuBurgerA = document.querySelectorAll('header .menuBurger');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle("open");
    headerMenuBurger.classList.toggle("open");
    body.classList.toggle("noScroll");
})

headerMenuBurgerA.forEach(element => {
    element.addEventListener('click', () => {
        headerBurger.classList.toggle("open");
        headerMenuBurger.classList.toggle("open");
        body.classList.toggle("noScroll");
    })
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1280) {
        if (headerBurger.classList.contains("open")) {

            headerBurger.classList.remove("open");
            headerMenuBurger.classList.remove("open");
            body.classList.remove("noScroll");
        }
    }
});









const directionsContent = document.querySelectorAll('#directions .content');

window.addEventListener('resize', () => {
    directionsContent.forEach(element => {
        element.classList.remove("animation");
        setTimeout(() => {
            element.classList.add("animation");
        }, 200);
    });
});







const teachersSlider = document.querySelector('.teachersSlider');
const teachersSliderParts = document.querySelectorAll('.teachersSlider .part');
let currentIndex = 0;



function goToSlide(index) {
    const slideWidth = teachersSliderParts[0].offsetWidth + 56;
    teachersSlider.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    });
}



const teachersNuvDot = document.querySelectorAll('#teachers .nuv .dot');

teachersNuvDot.forEach(dot => {
    dot.addEventListener('click', () => {
        goToSlide(dot.dataset.index);
    })
});




function updateActiveDot() {
    const slideWidth = teachersSliderParts[0].offsetWidth;
    const scrollPosition = teachersSlider.scrollLeft;

    // Вычисляем индекс текущего слайда
    const currentIndex = Math.round(scrollPosition / (slideWidth + 56));

    // Обновляем точки
    teachersNuvDot.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Слушаем событие скролла (работает и с тачпадом)
teachersSlider.addEventListener('scroll', updateActiveDot);

// Обновляем при ресайзе
window.addEventListener('resize', updateActiveDot);








const partsPriceNuv = document.querySelectorAll('#price .nav .part');
const classesPrice = document.querySelectorAll('#price .classes');

partsPriceNuv.forEach(element => {
    element.addEventListener('click', () => {
        partsPriceNuv.forEach(el => {
            el.classList.remove("open");
        })
        element.classList.add("open");

        if (element.classList.contains("part1")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes1")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part2")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes2")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part3")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes3")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part4")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes4")) {
                    cl.classList.add("open");
                }
            })
        }
    })
});





const partsRentNuv = document.querySelectorAll('#rent .nav .part');
const classesRent = document.querySelectorAll('#rent .classes');

partsRentNuv.forEach(element => {
    element.addEventListener('click', () => {
        partsRentNuv.forEach(el => {
            el.classList.remove("open");
        })
        element.classList.add("open");

        if (element.classList.contains("part1")) {
            classesRent.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("dayRent")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part2")) {
            classesRent.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("nightRent")) {
                    cl.classList.add("open");
                }
            })
        }
    })
});





const partQuestions = document.querySelectorAll('#questions .part .boxQuestions .partQuestions');

partQuestions.forEach(element => {
    // const answer = element.querySelector('.answer');

    element.addEventListener('click', () => {
        element.classList.toggle("open")
    })
});













// Плавное появление блоков при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.mainParts').forEach(el => observer.observe(el));





const floatingPasha = document.querySelector('.floatingPasha');

const copyright = document.querySelector('.copyright');
let copyrightCount = 0;
let copyrightFlag = false;

copyright.addEventListener('click', (e) => {

    if (copyrightCount == 8) {
        if (!copyrightFlag) {
            copyrightFlag = true;
            floatingPasha.classList.add("display");
        }
    }
    else {
        copyrightCount++;
    }
})



let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
let velocityX = 0, velocityY = 0;

if (copyrightFlag) {
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function smoothFollow() {
    // Добавляем инерцию
    velocityX += (mouseX - posX) * 0.05;
    velocityY += (mouseY - posY) * 0.05;

    // Затухание
    velocityX *= 0.92;
    velocityY *= 0.92;

    posX += velocityX;
    posY += velocityY;

    floatingPasha.style.transform = `translate(${posX - 30}px, ${posY - 30}px)`;

    requestAnimationFrame(smoothFollow);
}
smoothFollow();













// const firstGallery = document.querySelector('#first .gallery');
// const firstGalleryImg = document.querySelector('#first .gallery img');
// let stateDivHalfHidden1 = false;
// let flyingClone = null; // ЕДИНСТВЕННОЕ ДОБАВЛЕНИЕ

// function isDivHalfHidden1() {
//     const rect = firstGalleryImg.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     return rect.top < 0 && Math.abs(rect.top) >= rect.height / 1.7;
// }

// const directions = document.querySelector('#directions');
// let stateDivHalfHidden2 = false;

// function isDivHalfHidden2() {
//     const rect = directions.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     return rect.top < 0 && Math.abs(rect.top) >= rect.height / 2.5;
// }

// function getRelativeRect(element, container) {
//     const elementRect = element.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();
//     return {
//         left: elementRect.left - containerRect.left,
//         top: elementRect.top - containerRect.top,
//         width: elementRect.width,
//         height: elementRect.height
//     };
// }

// window.addEventListener('scroll', () => {
//     if (!stateDivHalfHidden1 && isDivHalfHidden1()) {
//         stateDivHalfHidden1 = true;
//         console.log('Див скрыт на 1/4 сверху');

//         const container = document.querySelector('#first');
//         const startBlock = document.querySelector('#first .gallery');
        
//         const targetBlock = document.querySelector('.markfly1');

//         const startRect = getRelativeRect(startBlock, container);
//         const targetRect = getRelativeRect(targetBlock, container);

//         flyingClone = firstGalleryImg.cloneNode(true); // СОХРАНЯЕМ КЛОН

//         flyingClone.style.position = 'absolute';
//         flyingClone.style.objectFit = 'cover';
//         flyingClone.style.backgroundColor = '#ffffff';
//         flyingClone.style.left = startRect.left + 'px';
//         flyingClone.style.top = startRect.top + 'px';
//         flyingClone.style.width = startRect.width + 'px';
//         flyingClone.style.height = startRect.height + 'px';
//         flyingClone.style.borderRadius = '30px';
//         flyingClone.style.zIndex = '0';

//         flyingClone.style.setProperty('--start-left', startRect.left + 'px');
//         flyingClone.style.setProperty('--start-top', startRect.top + 'px');
//         flyingClone.style.setProperty('--start-width', startRect.width + 'px');
//         flyingClone.style.setProperty('--start-height', startRect.height + 'px');
//         flyingClone.style.setProperty('--end-left', targetRect.left + 'px');
//         flyingClone.style.setProperty('--end-top', targetRect.top + 'px');
//         flyingClone.style.setProperty('--end-width', targetRect.width + 'px');
//         flyingClone.style.setProperty('--end-height', targetRect.height + 'px');

//         container.appendChild(flyingClone);
//         flyingClone.style.animation = 'flyToTarget1 0.8s ease-in forwards';
//         firstGalleryImg.style.opacity = '0';
//     }

//     if (!stateDivHalfHidden2 && isDivHalfHidden2()) {
//         stateDivHalfHidden2 = true;
//         console.log('Див скрыт на 1/2 сверху');
//         firstGalleryImg.style.transition = 'all 1s';

//         const container = grid;
//         const startBlock = document.querySelector('.markfly1');
//         const targetBlock = document.querySelector('#teachers .flypart');

//         const startRect = getRelativeRect(startBlock, container);
//         const targetRect = getRelativeRect(targetBlock, container);

//         // Удаляем старый клон если есть
//         if (flyingClone) {
//             flyingClone.remove();
//         }

//         // Создаём обёртку
//         const wrapper = document.createElement('div');
//         wrapper.style.position = 'absolute';
//         wrapper.style.left = startRect.left + 'px';
//         wrapper.style.top = startRect.top + 'px';
//         wrapper.style.width = startRect.width + 'px';
//         wrapper.style.height = startRect.height + 'px';
//         wrapper.style.zIndex = '10';
//         wrapper.style.pointerEvents = 'none';

//         // Фото 1 (старое)
//         const photo1 = document.createElement('img');
//         photo1.src = firstGalleryImg.src; // текущее фото
//         photo1.style.position = 'absolute';
//         photo1.style.top = '0';
//         photo1.style.left = '0';
//         photo1.style.width = '100%';
//         photo1.style.height = '100%';
//         photo1.style.objectFit = 'cover';
//         photo1.style.borderRadius = '30px';
//         photo1.style.transition = 'opacity 0.4s ease';
//         photo1.style.opacity = '1';

//         // Белый оверлей
//         const whiteOverlay = document.createElement('div');
//         whiteOverlay.style.position = 'absolute';
//         whiteOverlay.style.top = '0';
//         whiteOverlay.style.left = '0';
//         whiteOverlay.style.width = '100%';
//         whiteOverlay.style.height = '100%';
//         whiteOverlay.style.backgroundColor = 'white';
//         whiteOverlay.style.borderRadius = '30px';
//         whiteOverlay.style.transition = 'opacity 0.4s ease';
//         whiteOverlay.style.opacity = '0';
//         whiteOverlay.style.pointerEvents = 'none';

//         // Фото 2 (новое)
//         const photo2 = document.createElement('img');
//         photo2.src = 'style/teachers/Бондарева Аня2.jpg';

//         photo2.style.position = 'absolute';
//         photo2.style.objectPosition = "50% 40%";
//         photo2.style.top = '0';
//         photo2.style.left = '0';
//         photo2.style.width = '100%';
//         photo2.style.height = '100%';
//         photo2.style.objectFit = 'cover';
//         photo2.style.borderRadius = '30px';
//         photo2.style.transition = 'opacity 0.4s ease';
//         photo2.style.opacity = '0';

//         // Собираем слои
//         wrapper.appendChild(photo1);
//         wrapper.appendChild(whiteOverlay);
//         wrapper.appendChild(photo2);
//         container.appendChild(wrapper);

//         // Сохраняем ссылку на обёртку для последующего использования
//         flyingClone = wrapper;

//         // CSS-переменные для анимации
//         wrapper.style.setProperty('--start-left', startRect.left + 'px');
//         wrapper.style.setProperty('--start-top', startRect.top + 'px');
//         wrapper.style.setProperty('--start-width', startRect.width + 'px');
//         wrapper.style.setProperty('--start-height', startRect.height + 'px');
//         wrapper.style.setProperty('--end-left', targetRect.left + 'px');
//         wrapper.style.setProperty('--end-top', targetRect.top - 20 + 'px');
//         wrapper.style.setProperty('--end-width', targetRect.width + 'px');
//         wrapper.style.setProperty('--end-height', targetRect.height + 'px');

//         // Запускаем анимацию полёта
//         wrapper.style.animation = 'flyToTarget2 0.9s ease-in forwards';

//         // ЦЕПОЧКА ПЛАВНЫХ ПЕРЕХОДОВ ВО ВРЕМЯ ПОЛЁТА

//         // Шаг 1: Фото 1 → Белый (на 150мс)
//         setTimeout(() => {
//             photo1.style.opacity = '0';
//             whiteOverlay.style.opacity = '1';
//         }, 100);

//         // Шаг 2: Белый → Фото 2 (на 400мс)
//         setTimeout(() => {
//             whiteOverlay.style.opacity = '0';
//             photo2.style.opacity = '1';
//         }, 200);

//         firstGalleryImg.style.opacity = '1';

//         // Завершение
//         setTimeout(() => {
//             document.querySelector('#teachers .flypart img').style.opacity = '1';

//             wrapper.style.transition = 'opacity 0.3s ease';
//             wrapper.style.opacity = '0';

//             setTimeout(() => wrapper.remove(), 300);

//             const parts = document.querySelectorAll('#teachers .content .part');
//             parts.forEach(part => {
//                 part.querySelector('.info').style.opacity = '1';
//                 part.querySelector('a').style.opacity = '1';
//             });
//         }, 870);
//     }
// });





 const square = document.querySelector('.centerSun');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const rotation = scrollY / 5; // 5px скролла = 1 градус
        square.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    });







    // Находим все ссылки
const links = document.querySelectorAll('a[href$=".html"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем мгновенный переход
        
        const targetUrl = this.getAttribute('href');
        
        // Добавляем класс для анимации ухода
        document.body.classList.add('page-transition-out');
        
        // Ждём окончания анимации и переходим
        setTimeout(() => {
            window.location.href = targetUrl;
                setTimeout(() => {
                document.body.classList.remove('page-transition-out');

            },500)
        }, 500); // Время должно совпадать с длительностью CSS-анимации
    });
});



// const mainFly = document.querySelector('#mainFly');

// const firstGallery = document.querySelector('#first .gallery');
// const firstGalleryImg = document.querySelector('#first .gallery img');
// let stateDivHalfHidden1 = false;

// function isDivHalfHidden1() {
//     const rect = firstGalleryImg.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     // Див скрыт наполовину сверху, если его верхняя граница ушла вверх на половину высоты дива
//     return rect.top < 0 && Math.abs(rect.top) >= rect.height / 1.5;
// }


// const directions = document.querySelector('#directions');
// let stateDivHalfHidden2 = false;

// function isDivHalfHidden2() {
//     const rect = directions.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     return rect.top < 0 && Math.abs(rect.top) >= rect.height / 2;
// }


// function getRelativeRect(element, container) {
//     const elementRect = element.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();

//     return {
//         left: elementRect.left - containerRect.left,
//         top: elementRect.top - containerRect.top,
//         width: elementRect.width,
//         height: elementRect.height
//     };
// }




// window.addEventListener('scroll', () => {
//     if (!stateDivHalfHidden1 && isDivHalfHidden1()) {
//         stateDivHalfHidden1 = true;

//         console.log('Див скрыт на 1/4 сверху');

//         // Использование
//         const container = document.querySelector('#first'); // родитель с position: relative
//         const startBlock = document.querySelector('#first .gallery');
//         const targetBlock = document.querySelector('.markfly1')
//         // const targetBlock = document.querySelector('#teachers .flypart')


//         // Получаем координаты относительно контейнера
//         const startRect = getRelativeRect(startBlock, container);
//         const targetRect = getRelativeRect(targetBlock, container);


//         const clonedPhoto = firstGalleryImg.cloneNode(true);

//         // Устанавливаем начальную позицию
//         clonedPhoto.style.position = 'absolute';
//         clonedPhoto.style.objectFit = 'cover';

//         clonedPhoto.style.left = startRect.left + 'px';
//         clonedPhoto.style.top = startRect.top + 'px';
//         clonedPhoto.style.width = startRect.width + 'px';
//         clonedPhoto.style.height = startRect.height + 'px';
//         clonedPhoto.style.borderRadius = '30px';


//         clonedPhoto.style.setProperty('--start-left', startRect.left + 'px');
//         clonedPhoto.style.setProperty('--start-top', startRect.top + 'px');
//         clonedPhoto.style.setProperty('--start-width', startRect.width + 'px');
//         clonedPhoto.style.setProperty('--start-height', startRect.height + 'px');

//         clonedPhoto.style.setProperty('--end-left', targetRect.left + 'px');
//         clonedPhoto.style.setProperty('--end-top', targetRect.top + 'px');
//         clonedPhoto.style.setProperty('--end-width', targetRect.width + 'px');
//         clonedPhoto.style.setProperty('--end-height', targetRect.height + 'px');


//         // clonedPhoto.style.setProperty('--start-left', startRect.left + 'px');
//         // clonedPhoto.style.setProperty('--start-top', startRect.top + 'px');
//         // clonedPhoto.style.setProperty('--start-width', startRect.width + 'px');
//         // clonedPhoto.style.setProperty('--start-height', startRect.height + 'px');

//         // clonedPhoto.style.setProperty('--end-left', targetRect.left + 'px');
//         // clonedPhoto.style.setProperty('--end-top', targetRect.top - 25 + 'px');
//         // clonedPhoto.style.setProperty('--end-width', targetRect.width + 'px');
//         // clonedPhoto.style.setProperty('--end-height', targetRect.height + 'px');


//         container.appendChild(clonedPhoto);
//         // ЗАПУСКАЕМ CSS-АНИМАЦИЮ
//         clonedPhoto.style.animation = 'flyToTarget1 3s ease-out forwards';

//         // Прячем оригинал
//         firstGalleryImg.style.opacity = '0';

        

//         // Удаляем клона после анимации
//         // clonedPhoto.addEventListener('animationend', () => {
//         //     clonedPhoto.remove();
//         //     // Можно переместить оригинал в целевой блок
//         //     document.querySelector('#mainFly').appendChild(firstGalleryImg);
//         //     firstGalleryImg.style.opacity = '1';
//         // }, { once: true });
//     }

//     if (!stateDivHalfHidden2 && isDivHalfHidden2()) {
//             stateDivHalfHidden2 = true;

//             console.log('Див скрыт на 1/2 сверху');

//             // Использование
//             // const container = document.querySelector('#directions'); // родитель с position: relative
//         const container = document.querySelector('#directions'); // родитель с position: relative

//             // const startBlock = document.querySelector('#first .gallery');
//             const startBlock = document.querySelector('.markfly1')
//             const targetBlock = document.querySelector('#teachers .flypart')


//             // Получаем координаты относительно контейнера
//             const startRect = getRelativeRect(startBlock, container);
//             const targetRect = getRelativeRect(targetBlock, container);


//             const clonedPhoto = firstGalleryImg.cloneNode(true);

//             // Устанавливаем начальную позицию
//             clonedPhoto.style.position = 'absolute';
//             clonedPhoto.style.objectFit = 'cover';

//             clonedPhoto.style.left = startRect.left + 'px';
//             clonedPhoto.style.top = startRect.top + 'px';
//             clonedPhoto.style.width = startRect.width + 'px';
//             clonedPhoto.style.height = startRect.height + 'px';
//             clonedPhoto.style.borderRadius = '30px';


//             clonedPhoto.style.setProperty('--start-left', startRect.left + 'px');
//             clonedPhoto.style.setProperty('--start-top', startRect.top + 'px');
//             clonedPhoto.style.setProperty('--start-width', startRect.width + 'px');
//             clonedPhoto.style.setProperty('--start-height', startRect.height + 'px');

//             clonedPhoto.style.setProperty('--end-left', targetRect.left + 'px');
//             clonedPhoto.style.setProperty('--end-top', targetRect.top + 'px');
//             clonedPhoto.style.setProperty('--end-width', targetRect.width + 'px');
//             clonedPhoto.style.setProperty('--end-height', targetRect.height + 'px');


//             // clonedPhoto.style.setProperty('--start-left', startRect.left + 'px');
//             // clonedPhoto.style.setProperty('--start-top', startRect.top + 'px');
//             // clonedPhoto.style.setProperty('--start-width', startRect.width + 'px');
//             // clonedPhoto.style.setProperty('--start-height', startRect.height + 'px');

//             // clonedPhoto.style.setProperty('--end-left', targetRect.left + 'px');
//             // clonedPhoto.style.setProperty('--end-top', targetRect.top - 25 + 'px');
//             // clonedPhoto.style.setProperty('--end-width', targetRect.width + 'px');
//             // clonedPhoto.style.setProperty('--end-height', targetRect.height + 'px');


//             container.appendChild(clonedPhoto);
//             // ЗАПУСКАЕМ CSS-АНИМАЦИЮ
//             clonedPhoto.style.animation = 'flyToTarget1 10s ease-out forwards';

//             // Прячем оригинал
//             firstGalleryImg.style.opacity = '0';

//             // Удаляем клона после анимации
//             // clonedPhoto.addEventListener('animationend', () => {
//             //     clonedPhoto.remove();
//             //     // Можно переместить оригинал в целевой блок
//             //     document.querySelector('#mainFly').appendChild(firstGalleryImg);
//             //     firstGalleryImg.style.opacity = '1';
//             // }, { once: true });
//         }
// });




