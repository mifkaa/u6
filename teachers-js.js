
// const header = document.querySelector('header');
// const headerBurger = document.querySelector('header .burger');
// const headerMenuBurger = document.querySelector('header .menuBurger');
// const headerMenuBurgerA = document.querySelectorAll('header .menuBurger');

// headerBurger.addEventListener('click', () => {
//     headerBurger.classList.toggle("open");
//     headerMenuBurger.classList.toggle("open");
//     body.classList.toggle("noScroll");
// })

// headerMenuBurgerA.forEach(element => {
//     element.addEventListener('click', () => {
//         headerBurger.classList.toggle("open");
//         headerMenuBurger.classList.toggle("open");
//         body.classList.toggle("noScroll");
//     })
// });

// window.addEventListener('resize', function () {
//     if (window.innerWidth >= 1280) {
//         if (headerBurger.classList.contains("open")) {

//             headerBurger.classList.remove("open");
//             headerMenuBurger.classList.remove("open");
//             body.classList.remove("noScroll");
//         }
//     }
// });






// shared-teacher.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Анимация возврата на главную ---
    const backLink = document.querySelector('.back-button');
    if (backLink) {
        backLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            document.body.classList.add('page-transition-out');
            setTimeout(() => {
                window.location.href = targetUrl;
                setTimeout(() => {
                    document.body.classList.remove('page-transition-out');
                }, 500);
            }, 500);
        });
    }

    // --- Логика табов ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');

                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                const activeTab = document.getElementById(`tab-${tabId}`);
                if (activeTab) {
                    activeTab.classList.add('active');
                }

                localStorage.setItem('teacherActiveTab', tabId);
            });
        });

        // Восстановление сохраненной вкладки
        const savedTab = localStorage.getItem('teacherActiveTab');
        if (savedTab) {
            const tabToOpen = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
            if (tabToOpen) tabToOpen.click();
        }
    }
});