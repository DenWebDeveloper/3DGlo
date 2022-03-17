"use strict";

const menu = () => {

    const menu = document.querySelector('menu');

    menu.addEventListener('click', (e) => {

        if (!e.target.classList.contains('active-menu')) {
            e.target.classList.add('active-menu');
        } else {
            e.target.classList.remove('active-menu');
        }
    });

};

export default menu;