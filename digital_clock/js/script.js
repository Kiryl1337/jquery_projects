$(document).ready(function () {
    function showTime() {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let session = "AM";

        if(hours === 0){
            hours = 12;
        }
        if(hours>=12){
            session = "PM";
        }
        if(hours>12){
            hours = hours - 12;
        }
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
        $("#period").text(session);

        setTimeout(showTime, 1000);
    }
    showTime();
})