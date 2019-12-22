class Map {
    constructor() {
        this.apiUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=508a0da7d19086274962c418f8cc5b7338052869';
        this.map = L.map('map');
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGFlcnlhbiIsImEiOiJjazRjbjdzdm8wcGFsM2VrZDJidWtnNTZtIn0.F0pgTBxrtqMJu58YhQgC8w'
        }).addTo(this.map);
        this.latitude = 47.75;
        this.longitude = 7.33;
        this.zoom = 15;

        this.map.setView([this.latitude, this.longitude], this.zoom = 15);
        
        this.createStationsOnMapFromJSON(this.map, this.apiUrl);

    }

    createStationsOnMapFromJSON(map, apiUrl){
        //Creating the request
        let request = new XMLHttpRequest()
        request.open('GET', this.apiUrl, false);

        request.onload = function(){
            let data = JSON.parse(this.response);
            
            data.forEach(element => {
                //For each object in the JSON, we create a station.
                let number = element.number;
                let name = element.name;
                let status = element.status;
                let address = element.address;
                let position = [element.position.lat, element.position.lng];
                let totalStands = element.bike_stands;
                let availableStands = element.available_bikes;

                let station = new Station(number, name, status, address, position, totalStands, availableStands);
                station.createMarker(map);
            });
        }

        //Executing request
        request.send();
    }
    
}

class Station {
    constructor(number, name, status, address, position, totalStands, availableBikes) {
        this.number = number;
        this.name = name;
        this.status = status;
        this.address = address;
        this.position = position;
        this.places = totalStands;
        this.availableBikes = availableBikes;
    }

    createMarker(map){
        console.log(this);
        this.marker = L.marker(this.position).addTo(map);
        //Using bind to pass this (the station) so that "this" doesn't refer to the marker in the function. 
        this.marker.on('click', this.displayInfo.bind(this));
        this.marker.bindPopup(this.createPopup.bind(this));

    }

    createPopup(){
        let popup;
        popup = "<h3>"+ this.name+"</h3>";
        popup += "<p><strong>" + this.address+ "</strong></p>";
        popup += "<p>" + this.availableBikes + " vélos disponibles</p>";
        popup += "<button> Réserver </button>"
        return popup
    }

    displayInfo(){
        console.log(this.number);
        let mapDescription = document.getElementById("mapDescription");
    
    }
}

const myMap = new Map()



