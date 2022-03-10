"use strict";

const modal = () => {

    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
   
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    let idInterval;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            
            modal.style.display = 'block';
            popupAnimation();

            
        });
    });

    closeBtn.addEventListener('click', () => {
        

        modal.style.display = 'none';
  

    });

    let count = 0;

    const popupAnimation = () => {

        count++;
        idInterval = requestAnimationFrame(popupAnimation);
        
        if( count < 191){
            popupContent.style.top = (count * 2)  - 191 + 'px';
        }else {
            cancelAnimationFrame(idInterval);
        }
        
    };

    popupAnimation();
   


};

export default modal;
