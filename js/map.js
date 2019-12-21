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

        this.map.setView([47.74329631548472, 7.31549439585265], 13);
        
        this.createStationsOnMapFromJSON(this.map, this.apiUrl);


    }

    createStationsOnMapFromJSON(map, apiUrl){
        var request = new XMLHttpRequest()
        request.open('GET', this.apiUrl, false);

        request.onload = function(){
            var data = JSON.parse(this.response);
            
            data.forEach(element => {
                console.log(element.position.lng);
                var station = new Station()
                station.createMarker(map, element.position.lat, element.position.lng);
            });
        }

        request.send();
    }
    
}

class Station {
    constructor(number, name, position, status, address, totalStands) {
        this.number = number;
        this.name = name;
        this.coordinates = position;
        this.status = status;
        this.address = address;
        this.places = totalStands;
    }

    createMarker(map, latitude, longitude){
        this.marker = L.marker([latitude, longitude]).addTo(map);
        this.marker.on('click', this.test);

    }

    test(){
        console.log("Yo");
    }
    

}


const myMap = new Map()



