//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown


// Fetch api with upcomming launches

var request = new XMLHttpRequest();
request.open("GET", "https://api.spacexdata.com/v3/launches/upcoming", true);

request.onload = function () {
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

	// Use upcomming date to count down next launch on index page

	var countDown = new Date(api1[i].launch_date_local).getTime();

	var x = setInterval(function () {
		var now = new Date().getTime();
		var timeDifference = countDown - now;

		var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

		document.getElementById("countdown").innerHTML = "<p>Next launch into space: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s </p>";
		if (timeDifference <= 0) {
			clearInterval(x);
			document.getElementById("countdown").innerHTML = "EXPIRED";
		}
        
		
	}, 1000);
}
request.send();



function myFunction() { var xz = document.getElementsByClassName("api6")[1];

for (var i; i < xz.length; i++) {
    xz[i].innerHTML = "<p>Hei</p>";
}
}

        

let request2 = new XMLHttpRequest();
request2.open("GET", "https://api.spacexdata.com/v3/info", true);

request2.onload = function () {
	let api2 = JSON.parse(this.response);
	document.getElementsByClassName("index-info-api")[0].innerHTML = api2.summary;
	console.log(api2.summary);
}
request2.send();

// Fetch api with history

let request3 = new XMLHttpRequest();
request3.open("GET", "https://api.spacexdata.com/v3/history", true);

request3.onload = function () {
	let api3 = JSON.parse(this.response);
	var historyHeading = document.getElementsByClassName("history-api1");
	var historyDate = document.getElementsByClassName("history-api2");
	var historyDetails = document.getElementsByClassName("history-api3");

	let output = ""
	for (var i = 0; i < api3.length; i++) {
		output += api3[i].message;
	}
	// Add mission name from api
	for (var i = 0; i < historyHeading.length; i++) {
		historyHeading[i].innerHTML = api3[i].title;
	}
	// Add details from api
	for (var i = 0; i < historyDetails.length; i++) {
		historyDate[i].innerHTML = "<p>Date: " + api3[i].event_date_utc + "</p>";
	}
	// Add details from api
	for (var i = 0; i < historyDate.length; i++) {
		historyDetails[i].innerHTML = api3[i].details;
	}
	// Add details from api

}

request3.send();

// Fetch api with history

let request4 = new XMLHttpRequest();
request4.open("GET", "https://api.spacexdata.com/v3/missions", true);

request4.onload = function () {
	let api4 = JSON.parse(this.response);
	var missionHeading = document.getElementsByClassName("mission-api1");
	var missionDate = document.getElementsByClassName("mission-api2");
	var missionDetails = document.getElementsByClassName("mission-api3");

	let output = ""
	for (var i = 0; i < api4.length; i++) {
		output += api4[i].message;
	}
	// Add mission name from api
	for (var i = 0; i < missionHeading.length; i++) {
		missionHeading[i].innerHTML = "<p>" + api4[i].mission_name + "</p>";
	}
	// Add details from api
	for (var i = 0; i < missionDetails.length; i++) {
		missionDate[i].innerHTML = "<p>" + api4[i].description + "</p>";
	}
	// Add details from api
	for (var i = 0; i < missionDate.length; i++) {
		missionDetails[i].innerHTML = "<a  href='" + api4[i].website + "'>Learn more</a>";
	}
	// Add details from api
console.log(missionHeading)[i];
}

request4.send();


// Function for displaying and hiding hamburger menu

function openMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// Contact validation 

document.getElementById("submit-contact").addEventListener("click", function() {
    
    var firstName = document.getElementById("first-name").value;
     var lastName =
        document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    
    var firstNameRegex = /[a-zA-Z]/;
    var lastNameRegex = /[a-zA-Z]/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/;
    
    var firstNameResult = firstNameRegex.test(firstName);
    var lastNameResult = lastNameRegex.test(lastName);
    var emailResult = emailRegex.test(email);
    
    if (firstNameResult === false) {
        document.getElementById("firstNameError").style.display = "block"
    } else {
        document.getElementById("firstNameError").style.display = "none"
    };
    if (lastNameResult === false) {
        document.getElementById("lastNameError").style.display = "block"
    } else {
        document.getElementById("lastNameError").style.display = "none"
    };
    if (emailResult === false) {
        document.getElementById("emailError").style.display = "block"
    } else {
        document.getElementById("emailError").style.display = "none"
    };
})