function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let am_pm = "AM";

    if(hour>=12){
        hour -= 12;
        am_pm = "PM";
    }else if(hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    let currentTime = hour + " : " + minute + " : " + second + " " + am_pm;

    document.getElementById('clock').innerHTML = currentTime;
    

}

showTime();

setInterval(showTime,1000);
