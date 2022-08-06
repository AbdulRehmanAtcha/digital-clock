function currentTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = time.getDay();
    var month = time.getMonth();
    var date = time.getDate();
    var session;
    if(hours > 12 && hours < 23){
        session = "PM";
    }
    else{
        session = "AM";
    }
    if(hours=== 0){
        hours = 12;
    }
    if(hours> 12){
        hours = hours - 12;
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds <10){
        seconds = "0"+seconds;
    }
    // var t = hours + " : "+minutes+" : "+seconds;
    // document.getElementById("clock").innerText = t;
    document.getElementById("session").innerText = session;
    document.getElementById("hr").innerText = hours;
    document.getElementById("col1").innerText = ":";
    document.getElementById("mint").innerText = minutes;
    document.getElementById("col2").innerText = ":";
    document.getElementById("sec").innerText = seconds;
    document.getElementById("month-place").innerText = months[month];
    document.getElementById("day-place").innerText = days[day];
    document.getElementById("date-place").innerText = date;
    var t = setTimeout(function(){currentTime()}, 1000);
}
currentTime();


