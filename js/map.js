// Génère la carte LeafLet
class MyMap {
    constructor() {
        //this.apiUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869';
        this.map = L.map('map').setView([47.75, 7.33], 14);
        this.tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGFlcnlhbiIsImEiOiJjazRjbjdzdm8wcGFsM2VrZDJidWtnNTZtIn0.F0pgTBxrtqMJu58YhQgC8w'
        }).addTo(this.map);
    }

    // méthode qui ajoute les marker sur chaque station
    addMarker(position) {
        var marker = L.marker(position).addTo(this.map);
        marker.addEventListener('click', function () {
            console.log('ok');
        })
    }

}

class DetailStation {
    constructor(number, name, position, status, address, totalStands) {
        this.number = number;
        this.name = name;
        this.coordinates = position;
        this.status = status;
        this.address = address;
        this.places = totalStands;
    }
}

class Form {

}