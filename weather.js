// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 65b906ebad295c4abda857d3b291e370
"use strict"
const weatherapi={
  apikey:"65b906ebad295c4abda857d3b291e370",
  baseurl:"https://api.openweathermap.org/data/2.5/weather"
}
var input=document.getElementById('in');
input.addEventListener('keypress',function(event){
  if(event.keyCode==13){
    weather(input.value);
  }
})
function weather(city){
  fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.apikey}&units=metric`).then(val=>{
    return val.json();
  })
  .then(weatherreport).catch((err)=>console.log(err));
}
function weatherreport(details){
  console.log(details);
  console.log(details.main.humidity);
  let cdate=new Date();
  filldate(cdate);
  document.querySelector('.city').innerText="Weather in "+details.name+", "+details.sys.country;
  document.querySelector('.temperature').innerText=details.main.temp+"°C";
  document.querySelector('.description').innerText=details.weather[0].description;
  document.querySelector('.humidity').innerText="Humidity: "+details.main.humidity+"%";
  document.querySelector('.windspeed').innerText="Wind Speed: "+details.wind.speed+" m/s";
  document.querySelector('#wicon').src="http://openweathermap.org/img/w/" + details.weather[0].icon + ".png";


}
function filldate(now){
  let a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let b= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  document.querySelector('.date').innerText=b[now.getMonth()]+" "+now.getDate()+" ("+a[now.getDay()]+"), "+now.getFullYear();
}
document.getElementById('button').addEventListener('click',function(){
  weather(input.value);
})
