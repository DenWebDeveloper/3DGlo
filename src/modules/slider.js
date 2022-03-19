const slider = () => {

    const sliderBlock = document.querySelector('.portfolio-content');
    const listDots = document.querySelector('.portfolio-dots');
    const slides = document.querySelectorAll('.portfolio-item');
   
    const timeInterval = 2000;

    let currentSlide = 0;

    let interval;

    // Создаем точку активную для слайдера.

    const dot = document.createElement('li');
    dot.classList.add('dot','dot-active');
    listDots.append(dot);
    console.log(listDots);


    // Создаем точки для слайдера.
    const createDot = () => {

        let dots = document.createElement('li');
        dots.classList.add('dot');

        listDots.append(dots);

    };

    
    for(let i = 0; i < slides.length - 1; i++){

        createDot();
    
    }

    const dots = document.querySelectorAll('.dot');



    // Переключение слайдов назад.
    const prevSlide = (items, index, strClass) => {
        items[index].classList.remove(strClass);
    };


    // Переключение слайдов вперед.
    const nextSlide = (items, index, strClass) => {
        items[index].classList.add(strClass);

    };


    // Автоматическая прокрутка слайдов.
    const autoSlide = () => {
    
        prevSlide(slides, currentSlide,'portfolio-item-active');
        prevSlide(dots, currentSlide,'dot-active');

        currentSlide++;

        if(currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide,'portfolio-item-active');
        nextSlide(dots, currentSlide,'dot-active');

    };

    // Запуск функции Старт.
    const startSlide = (timer = 50) => {

       interval = setInterval(autoSlide, timer);
    };


    // Остановка функции Старт.
    const stopSlide = () => {

        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {

        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')){
            return;
        }

        prevSlide(slides, currentSlide,'portfolio-item-active');
        prevSlide(dots, currentSlide,'dot-active');

        if (e.target.matches('#arrow-right')){
            currentSlide++;

        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;

        } else if (e.target.classList.contains('dot')){
            
            dots.forEach((dot, index) => {

                if (e.target === dot) {
                    currentSlide = index;
                }
            });

        }

        if(currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if(currentSlide < 0) {
            currentSlide = slides.length -1;
        }

        nextSlide(slides, currentSlide,'portfolio-item-active');
        nextSlide(dots, currentSlide,'dot-active');

    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        
        if (e.target.matches('.dot, .portfolio-btn')){
            stopSlide();

        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        
        if (e.target.matches('.dot, .portfolio-btn')){
            startSlide(timeInterval);

        }
    }, true);

    
    startSlide(timeInterval);

};

export default slider;