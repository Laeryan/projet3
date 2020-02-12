// class qui énère la carte avec LeafLet
class MyMap {
    constructor() {
        this.apiUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869';
        this.map = L.map('map').setView([47.75, 7.33], 14);
        this.tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGFlcnlhbiIsImEiOiJjazRjbjdzdm8wcGFsM2VrZDJidWtnNTZtIn0.F0pgTBxrtqMJu58YhQgC8w'
        }).addTo(this.map);
    }

    // méthode qui ajoute les markers sur chaque station
    addMarker(position, onClick) {
        var marker = L.marker(position).addTo(this.map);
        marker.addEventListener('click', function () {
            onClick()
        })
    }
}