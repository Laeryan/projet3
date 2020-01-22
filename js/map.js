// Génère la carte LeafLet
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

    // méthode qui ajoute les marker sur chaque station
    addMarker(position, onClick) {
        var marker = L.marker(position).addTo(this.map);
        marker.addEventListener('click', function () {
            onClick()
        })
    }

}

function isCanvasBlank(canvas) {
    const blank = document.createElement('canvas');

    blank.width = canvas.width;
    blank.height = canvas.height;

    return canvas.toDataURL() === blank.toDataURL();
}

class DetailStation {
    constructor() {
        this.formContainerElement = document.getElementById('form_container');
        this.formContainerElement.style.display = 'none';
        this.informationElement = document.getElementById('information');
        this.stationNameElement = document.getElementById('station_name');
        this.stationStatusElement = document.getElementById('station_status');
        this.stationAddressElement = document.getElementById('station_address');
        this.stationStandsElement = document.getElementById("station_stands");
        this.firstNameInputElement = document.getElementById('first_name');
        this.lastNameInputElement = document.getElementById('last_name');
        this.bookingButtonElement = document.getElementById('reservation');
        this.signatureElement = document.getElementById('signature');
        this.submitButtonElement = document.getElementById('validation');
        this.canvasElement = document.getElementById('canvas');
        this.bookingButtonElement.addEventListener('click', this.onBooking.bind(this));
        this._onSubmit = function() {};
        this.submitButtonElement.addEventListener('click', this.onSubmit.bind(this));
    }

    // méthode qui affiche le canvas et le bouton valider (pour la signature)
    onBooking() {
        this.signatureElement.style.display = 'inline-block';
    }



    // vérifie que le canvas est rempli et que les éléments du form sont renseignés
    onSubmit() {
        if (this.lastNameInputElement.value == "" || this.firstNameInputElement.value == "") {
            alert('Veuillez saisir vos noms et prénoms');
      //  } else if (isCanvasBlank(this.canvasElement) == true) {
       //     alert('Veuillez entrer votre signature');
        } else {
            this._onSubmit();
        }
    }

    display(name, status, address, totalStands) {
        this.informationElement.style.display = 'none';
        this.formContainerElement.style.display = 'inline-block';
        this.stationNameElement.textContent = name;
        this.stationStatusElement.textContent = status;
        this.stationAddressElement.textContent = address;
        let bikeNumber = totalStands + " vélos restants";
        this.stationStandsElement.textContent = bikeNumber;
    }
}