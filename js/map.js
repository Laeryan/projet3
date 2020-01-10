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
    addMarker(position, onClick) {
        var marker = L.marker(position).addTo(this.map);
        marker.addEventListener('click', function () {
           // showDetailStation();
            onClick()
        })
    }
/*
    showDetailStation() {
        stations.forEach(function () {
            console.log(station.name)
        })
    }
*/
}

class DetailStation {
    constructor() {
        this.formContainerElement = document.getElementById('form_container');
        this.formContainerElement.style.display = 'none';
        this.informationElement = document.getElementById('information');
        this.stationNameElement = document.getElementById('station_name');
        this.stationStatusElement = document.getElementById('station_status');
        this.nameInputElement = document.getElementById('name_input') // à créer !
        this.bookingButtonElement.addEventListener('click', this.onBooking)
    }

    // méthode pour la réservation
    // fonctions qui vont être appelées au moment de cliquer sur réserver
    onBooking() {
        // ouvrir le canvas et afficher le bouton valider
    }

    // au moment de cliquer sur valider
    onSubmit() {
    // vérifie que le canvas est rempli et que les éléments du form sont renseignés
    }

    display(number, name, status, address, totalStands) {
       this.informationElement.style.display = 'none';
       this.stationNameElement.textContent = name;
       this.stationStatusElement.textContent = status;
       this.formContainerElement.style.display = 'inline-block';
    }
}

// this.timerElement.display = 'none'
// setTimeOut (bloquer, réservation modifiable)
// this... hide (pour cacher au bout de 20 mn et annuler la réservation (clear timeOut))
