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

    // vérifie que le canvas est rempli et que les éléments du form sont renseignés
    onSubmit() {
        if (this.lastNameInputElement.value == "" || this.firstNameInputElement.value == "") {
            alert('Veuillez saisir vos noms et prénoms');
        } else if (isCanvasBlank(this.canvasElement) == true) {
            alert('Veuillez entrer votre signature');
        } else {
            this._onSubmit(this.stationName);
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
        this.stationName = name;
    }
}

class CanvasSignature {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.draw = false;
        this.x = 0;
        this.y = 0;
        this.canvas.width = 250;
        this.canvas.height = 100;
        this.canvasEvents();
    }

    canvasEvents() {
        // lorsqu'on fait un click sur la souris, draw passe à 'true' et permet d'écrire dans le canvas
        this.canvas.addEventListener('mousedown', e => {
            this.canvasDraw(e)
            this.draw = true;

        });

        // le mouvement de la souris avec le click continue d'appeler canvasDraw()
        this.canvas.addEventListener('mousemove', e => {
            this.canvasDraw(e);
        });

        // lorsqu'on arrête de clicker, 'draw' repasse en 'false' et le dessin s'arrête même si on continue de bouger la souris
        window.addEventListener('mouseup', e => {
            this.draw = false
            this.ctx.beginPath();
        });
    }

    //méthode qui affiche le dessin dans le canvas
    canvasDraw(e) {
        if (!this.draw) return
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
    }
}

// Méthode qui crée un canvas vide et invisible, qui permet de comparer le canvas supposé être rempli par l'utilisateur.
// Si le canvas utilisateur est vide, un message d'alerte s'affiche.
function isCanvasBlank(canvas) {
    const blank = document.createElement('canvas');

    blank.width = canvas.width;
    blank.height = canvas.height;

    return canvas.toDataURL() === blank.toDataURL();
}

const sign = new CanvasSignature();