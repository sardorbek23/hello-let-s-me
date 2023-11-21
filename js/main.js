var speedOnfoot = 3.6;
var speedBike = 20;
var speedCar = 70;
var speedplane = 800;

var elForm = document.querySelector(".form");
var userDistances = document.querySelector(".input__form");
var error = document.querySelector(".error");
var onfootResult = document.querySelector(".onfoot_result");
var bikeResult = document.querySelector(".bike_result");
var carResult = document.querySelector(".car_result");
var planeResult = document.querySelector(".plane_result");

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    var input = userDistances.value.trim()
    onfootResult.textContent = "Soat " + input / speedOnfoot.toFixed()
    bikeResult.textContent = "Soat " + input / speedBike.toFixed()
    carResult.textContent = "Soat " + input / 70 .toFixed()
    planeResult.textContent = "Soat " + input / 800 .toFixed()
})