let request2 = new XMLHttpRequest();
request2.open("GET", "https://api.spacexdata.com/v3/info", true);

request2.onload = function () {
	let api2 = JSON.parse(this.response);
	document.getElementsByClassName("index-info-api")[0].innerHTML = api2.summary;
	console.log(api2.summary);
}
request2.send();

function openBoxIndex() {
    document.getElementById("boxIndex").style.width = "100%";
};

function closeBoxIndex() {
    document.getElementById("boxIndex").style.width = "0%";
};