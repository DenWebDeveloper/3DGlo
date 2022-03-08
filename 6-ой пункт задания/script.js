
const mainTitle = document.querySelector('.main'); // Заголовок

const textDay = document.querySelector('.text-day'); // Сегодня

const oclock = document.querySelector('.text-clock'); // Текущее время

const newYear = document.querySelector('.text-year'); // До нового года осталось



let date = new Date(); // Полная текущая дата


const days = ["Воскресенье.", "Понедельник.", "Вторник.", "Среда.", "Четверг.", "Пятница.", "Суббота."];

const timesOfDay = ["Доброе утро!", "Добрый день!", "Добрый вечер!", "Доброй ночи!"];

function addZero(num){

    return (num < 10 ) ? '0' + num : num;
}

function getTimeOfDay(time){

    if(time < 12){

        mainTitle.textContent =  timesOfDay[0];

    }else if(time >= 12 && time < 18){

        mainTitle.textContent = timesOfDay[1];

    }else if(time >= 18 && time < 20){
        mainTitle.textContent = timesOfDay[2];
    }else {
        mainTitle.textContent = timesOfDay[3];
    }

    return mainTitle.textContent;
}


function getUserTime(t = new Date()){

    let years = t.getFullYear();            // Текущий год

    let month = addZero(t.getMonth() + 1);  // Текущий Месяц

    let date = addZero(t.getDate());        // Текущее Чмсло

    textDay.textContent = "Сегодня: " + days[t.getDay()]; 
    
    let hours = addZero(t.getHours());      //  Часы 
    
    mainTitle.textContent = getTimeOfDay(hours);

    let minutes = addZero(t.getMinutes());  // Минуты 

    let seconds = addZero(t.getSeconds());  // Секунды 

    oclock.textContent = "Текущее время: " + `${hours}:${minutes}:${seconds} `;  // Текущее время


    return `${years} ${month} ${date} ${textDay} ${hours} ${minutes} ${seconds}`;

}

const leftResulte =  () => {

    let nowYears = new Date().getTime();

    let dayNewYear = new Date(2023,0,01,0,0,0).getTime();
    
    let diffresulut = Math.floor((dayNewYear - nowYears) / 1000);
    
    let leftDay = Math.floor(((diffresulut /60) / 60) /24);

    newYear.textContent = `До нового года осталось: ${leftDay} дней.`;

};

leftResulte();

const interval = setInterval(getUserTime,1000);