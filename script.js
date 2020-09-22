// Variables
var city = $("#search-city");
var searchBtn = $("#search-button")


// TODO: Connect to openweather API (AJAX request)



searchBtn.on("click", function(e){
    e.preventDefault();
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=dde55275793968119ad3b1dd2529eda8";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Grab Latitude and Longitude from the city in the first API call
        var inputLat = response.coord.lat;
        var inputLon = response.coord.lon;
        var tempF = (response.main.temp * 9/5) - 459.67
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var uvIndex;
        
    
        // Return the UV Index using the Latitude and Longitude from the first API call
        $.ajax({ 
            url: `https://api.openweathermap.org/data/2.5/uvi?appid=dde55275793968119ad3b1dd2529eda8&lat=${inputLat}&lon=${inputLon}`,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    
    
        //   TODO: Create Weather Card with response data
        var weatherDiv = $("<div>");
        


        console.log(response);
    });

})




// TODO: Retrieve from API: Current (Temperature, Humidity, wind speed, UV index) 

// TODO: UV index has color formatting to indicate if it is favorable, moderate, or severe

// TODO: Retrieve 5 Day Weather Conditions (Icon, Temperature, Humidity)

// TODO: When the search button is clicked, add that city to search history array

// TODO: Save last searched city info to localstorage so when page reloads, opens on last searched city

// 