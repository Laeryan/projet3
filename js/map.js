class myMap {
    constructor() {
        this.apiUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869';
        this.map = L.map('map');
        this.tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGFlcnlhbiIsImEiOiJjazRjbjdzdm8wcGFsM2VrZDJidWtnNTZtIn0.F0pgTBxrtqMJu58YhQgC8w'
        }).addTo(this.map);
        this.latitude = 47.75;
        this.longitude = 7.33;
        this.zoom = 15;
    }
    
}

/*
var myMap = L.map('map').setView([47.75, 7.33], 13);

).addTo(myMap);

const apiUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869';


request.open('GET','https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869');
request.send(null);


L.marker([latitude, longitude]).addTo(myMap);




class Station {
    constructor(number, name, position, status, address, totalStands) {
        this.number = number;
        this.name = name;
        this.coordinates = position;
        this.status = status;
        this.address = address;
        this.places = totalStands;

    addMarker() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const {latitude, longitude} = data;
    }
}



var requestApiJcDecaux = new Request("GET",
    "https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869");

requestApiJcDecaux.call(function (response) {

    response = JSON.parse(response);
    response.forEach(function (info) {
        var latitude = info.position.lat;
        var longitude = info.position.lng;
        L.marker([latitude, longitude]).on('click', onMarkerClick).addTo(myMap);
    });
    */