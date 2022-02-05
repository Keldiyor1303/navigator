'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude, accuracy } = position.coords
        console.log(accuracy)

        const map = L.map('map').setView([latitude, longitude], 25);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('PDP AKADEMIYA')
            .openPopup();

        map.on("click", function (e) {
            const { lat, lng } = e.latlng

            L.marker([lat, lng]).addTo(map)
                .bindPopup(
                    L.popup({
                        maxWidth: 250,
                        minWidth: 40,
                        autoClose: false,
                        closeOnClick: false,
                        className: "running-popup"

                    })
                ).setPopupContent("12344788")
                .openPopup();
        })

    })
}


let myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

L.marker([50.505, 30.57], { icon: myIcon }).addTo(map);