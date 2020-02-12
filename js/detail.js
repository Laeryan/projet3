class DetailStation {
    constructor() {
        this.formContainerElement = document.getElementById('form_container');
        this.formContainerElement.style.display = 'none';
        this.informationElement = document.getElementById('information');
        this.stationNameElement = document.getElementById('station_name');
        this.stationStatusElement = document.getElementById('station_status');              // recherche les différents éléments du DOM pour y afficher les 
        this.stationAddressElement = document.getElementById('station_address');            // valeurs définies
        this.stationStandsElement = document.getElementById("station_stands");
        this.firstNameInputElement = document.getElementById('first_name');
        this.lastNameInputElement = document.getElementById('last_name');
        this.bookingButtonElement = document.getElementById('reservation');
        this.signatureElement = document.getElementById('signature');
        this.submitButtonElement = document.getElementById('validation');
        this.canvasElement = document.getElementById('canvas');
        this.bookingButtonElement.addEventListener('click', this.onBooking.bind(this));
        this._onSubmit = function () { };
        this.submitButtonElement.addEventListener('click', this.onSubmit.bind(this));
        this.stationName = null;        
    }

    // méthode qui affiche le canvas et le bouton valider (pour la signature)
    onBooking() {
        this.signatureElement.style.display = 'inline-block';
    }

    // méthode qui vérifie que le canvas est rempli et que les éléments du form sont renseignés
    onSubmit() {
        if (this.lastNameInputElement.value == "" || this.firstNameInputElement.value == "") {
            alert('Veuillez saisir vos noms et prénoms');
        } else if (isCanvasBlank(this.canvasElement) == true) {
            alert('Veuillez entrer votre signature');
        } else {
            this._onSubmit(this.stationName);
        }
    }

    // méthode qui affiche les informations sur les stations, récupérées grâce à l'API
    // le localStorage permet de mémoriser les noms et prénoms de l'utilisateur dans le navigateur
    display(name, status, address, totalStands) {
        this.informationElement.style.display = 'none';
        this.formContainerElement.style.display = 'inline-block';
        this.stationNameElement.textContent = "Numéro et nom de la station : " + name;
        this.stationStatusElement.textContent = "Statut : " + status;
        this.stationAddressElement.textContent = "Adresse : " + address;
        let bikeNumber = "Il reste " + totalStands + " vélos à réserver !";
        this.stationStandsElement.textContent = bikeNumber;
        this.stationName = name;

        if (localStorage.getItem('firstName') != null) {
            this.firstNameInputElement.value = localStorage.getItem('firstName')
        };
        
        if (localStorage.getItem('lastName') != null) {
            this.lastNameInputElement.value = localStorage.getItem('lastName')
        };
    }
}