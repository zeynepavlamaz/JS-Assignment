let myName = document.querySelector('#myName');
let nname = prompt("Adınızı Giriniz :");
let time_date = document.querySelector('#myClock');

nname ? myName.innerHTML = nname : console.log("Adınızı Doğru Giriniz!");

function showTime(){
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
    var today = new Date();
    //var datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+ " "+ weekday[today.getDay()];  
    var datetime = today.toLocaleTimeString() + " " + weekday[today.getDay()];
    time_date.innerHTML = datetime;
}

