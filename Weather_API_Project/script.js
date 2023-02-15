//Getting Data with ID
let inputBox = document.getElementById("inputBox");
let countryName = document.getElementById("countryName");
let stateName = document.getElementById("stateName");
let cityName = document.getElementById("cityName");
let humidityName = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let temprature = document.getElementById("temprature");
let logoImage = document.getElementById("logoImage");
let weatherStatus = document.getElementById("weatherStatus");

const getData = (event) => {
     event.preventDefault();
     if(!inputBox.value) {
         alert("Please Enter the city name");
     }
}
