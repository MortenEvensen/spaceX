// Fetch api

var request = new XMLHttpRequest(); 
request.open("GET", "https://api.spacexdata.com/v3/launches/upcoming", true); 

request.onload = function() {
    let api1 = JSON.parse(this.response);
    
// Find html elements to target
    var upcommingHeading = document.getElementsByClassName("api1");
    var upcommingDetails = document.getElementsByClassName("api2");
    var upcommingDate = document.getElementsByClassName("api3");
    var upcommingRocketId = document.getElementsByClassName("api4");
    var upcommingLaunchSite = document.getElementsByClassName("api5");

    let output = ""
    for (var i = 0; i < api1.length; i++) {
        output += "<div>" + api1[i].message + "</div>";
    }
// Add mission name from api
    for (var i = 0; i < upcommingHeading.length; i++) {
         upcommingHeading[i].innerHTML = api1[i].mission_name;
         }
// Add details from api
     for (var i = 0; i < upcommingDetails.length; i++) {
         upcommingDetails[i].innerHTML = api1[i].details;
         }
    // Add details from api
     for (var i = 0; i < upcommingDate.length; i++) {
         upcommingDate[i].innerHTML = api1[i].launch_date_local;
         }
     // Add details from api
     for (var i = 0; i < upcommingRocketId.length; i++) {
         upcommingRocketId[i].innerHTML = api1[i].rocket.rocket_name;
         }
    for (var i = 0; i < upcommingLaunchSite.length; i++) {
         upcommingLaunchSite[i].innerHTML = api1[i].launch_site.site_name_long;
         }
    /*
    document.getElementsByClassName("api1")[0].innerHTML = api1[0].mission_name;
    document.getElementsByClassName("api2")[0].innerHTML = api1[0].details;
    console.log(api1);
    console.log("hei");*/

}

request.send();


let request2 = new XMLHttpRequest(); 
request2.open("GET", "https://api.nasa.gov/planetary/apod?api_key=zfUAs1aa5QK0d4Pm4O0BrNNhGMeIZBUTpY3SMzpG", true); 

request2.onload = function() {
    let api2 = JSON.parse(this.response);
    document.getElementById("api-image").innerHTML = "<iframe src='" + api2.url + "'</iframe>"
    }
request2.send();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


