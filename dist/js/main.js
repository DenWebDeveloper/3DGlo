(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");function c(e){return e<10?"0"+e:e}let l=setInterval((()=>{let e=(()=>{let e=(new Date("12 mart 2022").getTime()-(new Date).getTime())/1e3,t=c(Math.floor(e/60/60)),n=c(Math.floor(e/60%60)),o=c(Math.floor(e%60));return o>0?o=c(Math.floor(e%60)):(clearInterval(l),t="00",n="00",o="00"),{timeRamaining:e,hours:t,minuts:n,seconds:o}})();t.textContent=e.hours,n.textContent=e.minuts,o.textContent=e.seconds}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close");let c;n.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",r()}))})),o.addEventListener("click",(()=>{e.style.display="none"}));let l=0;const r=()=>{l++,c=requestAnimationFrame(r),l<191?t.style.top=2*l-191+"px":cancelAnimationFrame(c)};r()})()})();