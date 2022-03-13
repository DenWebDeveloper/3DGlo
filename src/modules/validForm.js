"use strict";

const validForm = () => {

    
    const inputsCalc = document.querySelectorAll('.calc-block>[type="text"]');// Инпуты калькулятора.
    const inputsTypeText = document.querySelectorAll('input[placeholder="Ваше имя"]'); // Инпуты Ваше имя
    const inputsTypeEmail = document.querySelectorAll('input[type="email"]'); // E-mail
    const inputsTypeTel = document.querySelectorAll('input[type="tel"]'); // Номер телефона

    // Валидация placeholder="ваше сообщение"
    const inputsTypeText2 = document.querySelectorAll('input[placeholder="Ваше сообщение"]'); 

   // Валидация Инпутов для калькулятора
   inputsCalc.forEach((item) => {

        item.addEventListener('input', () => {

            if(!/[^а-яa-z]+$/gi.test(item.value) && item.value !== ""){
                
                item.value = item.value = "";


            }else{

                item.value = item.value;

            }
        });
   });


   // Валидация Инпуты Ваше имя
   inputsTypeText.forEach((item) => {

        item.addEventListener('input', () => {

            if(!/[^a-z0-9]+$/gi.test(item.value) && item.value !== ""){
                
                item.value = item.value = "";


            }else{

                item.value = item.value;

            }
        });
   });


   // Валидация Инпуты Ваше сообщение
   inputsTypeText2.forEach((item) => {

    item.addEventListener('input', () => {

        if(/[^а-я\-\" "]+$/gi.test(item.value)){
            
            item.value = item.value = "";


        }else{

            item.value = item.value;

        }
    });
});

   // Валидация Инпуты E-mail
   inputsTypeEmail.forEach((item) => {

        item.addEventListener('input', () => {

            if(/[^a-z@\-\_\.\! \~\*\']/gi.test(item.value) && item.value !== ""){
                
                item.value = item.value = "";


            }else{

                item.value = item.value;

            }

        });
   });

    // Валидация Инпуты E-mail
    inputsTypeTel.forEach((item) => {

        item.addEventListener('input', () => {

            if(/[^0-9()\-]/gi.test(item.value) && item.value !== ""){
                
                item.value = item.value = "";


            }else{

                item.value = item.value;

            }
        });
   });


  
};

export default validForm;