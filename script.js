

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

	var countDown = new Date(api1[1].launch_date_local).getTime();

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

// Function for displaying and hiding hamburger menu

function openMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}





