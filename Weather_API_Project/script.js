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

const getData = async (event) => {
     event.preventDefault();
     if(!inputBox.value) {
         alert("Please Enter the city name: ");
          return;
     }

     const city = inputBox.value;
     //Fetch Data
     const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=6aa7799b0dce4436932125152231502&q=${city}`);

     const orgData = await fetchData.json();
     data = orgData;
     console.log(data);

     //Displaying the data in html
     countryName.innerHTML = data.location.country;
     stateName.innerHTML = data.location.region;
     cityName.innerHTML = data.location.name;
     humidityName.innerHTML = data.current.humidity;
     windSpeed.innerHTML = data.current.wind_kph;
     temprature.innerHTML = data.current.temp_c;
     logoImage.src = data.current.condition.icon;
     weatherStatus.innerHTML = data.current.condition.text;
};
