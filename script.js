


// TODO

// TODO: Connect to openweather API (AJAX request)

var city = "Seattle";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=dde55275793968119ad3b1dd2529eda8";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Create a new table row element
  console.log(response);
});



// TODO: Pass user city input to openweather API

// TODO: Retrieve from API: Current (Temperature, Humidity, wind speed, UV index) 

// TODO: UV index has color formatting to indicate if it is favorable, moderate, or severe

// TODO: Retrieve 5 Day Weather Conditions (Icon, Temperature, Humidity)

// TODO: When the search button is clicked, add that city to search history array

// TODO: Save last searched city info to localstorage so when page reloads, opens on last searched city

// 