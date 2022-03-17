"use strict";

const modal = () => {

    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const buttonsPopup = document.querySelectorAll('.popup-btn');
    const buttonsMenu = document.querySelectorAll('menu>ul>li>a');
   
    const scrollBtnDown = document.querySelector('main>a');

    const ourService = document.querySelector('#service-block');  // Наши Услуги
    const portfolio = document.querySelector('#portfolio');  // Портфолио
    const calc = document.querySelector('#calc');  // Калькулятор стоимости
    const command = document.querySelector('#command');  // Наша команда
    const connect = document.querySelector('#connect');  // Остались вопросы?

    const arraySections = [ourService, portfolio, calc, command, connect];



    let count = 0;
    let idInterval;


    // Функция плавного скролла.
    function scrollTo(elem){
        window.scroll({

            left: 0,
            top: elem.offsetTop,
            behavior: 'smooth'

        });
    }

    for(let i = 0; i < buttonsMenu.length; i++){

        buttonsMenu[i].addEventListener('click', (e) => {
            e.preventDefault();
            scrollTo(arraySections[i]);

        });


    }


    scrollBtnDown.addEventListener('click', (event) => {

        event.preventDefault();
        scrollTo(ourService);

    });



    buttonsPopup.forEach(btn => {
        btn.addEventListener('click', () => {
            
            modal.style.display = 'block';
            popupAnimation();
            
        });
    });

    const popupAnimation = () => {

        count++;
        idInterval = requestAnimationFrame(popupAnimation);
        
        if( count < 191 && window.screen.availWidth > 768){
            popupContent.style.top = (count * 2)  - 191 + 'px';
        }else {
            cancelAnimationFrame(idInterval);
        }
        
    };

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
            modal.style.display = 'none';
        }
    });

};

export default modal;
