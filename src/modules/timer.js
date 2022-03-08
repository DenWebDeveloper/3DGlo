"use strict";

const timer = (deadLine) => {

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    let a = "0";

    function addZero(d){
        
        return (d < 10) ? a + d : d;
    }

    const getTimeRemaining = () => {


        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRamaining = (dateStop - dateNow) / 1000;

        let hours = addZero(Math.floor(timeRamaining / 60 / 60));
        let minuts = addZero(Math.floor((timeRamaining / 60) % 60 ));

        let seconds = addZero(Math.floor(timeRamaining % 60));

        if(seconds > 0){

        }else{
            clearInterval(interval);

            hours = "00";
            minuts = "00";
            seconds = "00";
        }
        
        return {timeRamaining,hours, minuts, seconds};
    };

    const updateClock = () => {

        
        let getTime = getTimeRemaining();
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minuts;
        timerSeconds.textContent = getTime.seconds;
    };

    let interval = setInterval(updateClock,1000);


};

export default timer;
