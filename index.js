const countdown = () => {
    const countDate = new Date ('August 22, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
   
    
 //Calculate time (getTime == miliseconds)
 const second = 1000;
 const minute = second * 60;
 const hour = minute * 60;
 const day = hour * 24;

 //making final data

 const textDay = Math.floor(gap / day);
 const textHour = Math.floor((gap % day) / hour);
 const textMinute = Math.floor((gap % hour) / minute);
 const textSecond = Math.floor((gap % minute) / second);

//putting on page

document.querySelector(".day").innerText = textDay;
document.querySelector(".hour").innerText = textHour; 
document.querySelector(".minute").innerText = textMinute; 
document.querySelector(".second").innerText = textSecond;  
};

setInterval(countdown, 1000);