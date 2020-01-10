class Slide {
    constructor(image, title, description) {
        this.image = image,
        this.title = title,
        this.description = description
    }
}

class Slider {
    constructor() {
        this.slides = [
            new Slide("images/slider1.jpg", "Comment ça fonctionne ?", "Commencez par cliquer sur la station la plus proche de chez vous."),
            new Slide("images/vélo1.jpg", "Visualisation de la station", "Vous obtenez un récapitulatif des informations de la station : nombre de vélos disponibles, travaux, etc..."),
            new Slide("images/vélo2.jpg", "Réserver un vélo", "Pour réserver un vélo, il suffit de cliquer sur le bouton 'réserver', celui-ci ouvre un formulaire."),
            new Slide("images/vélo3.jpg", "Valider le formulaire", "Renseignez vos coordonnées, et n'oubliez pas de signer !"),
            new Slide("images/vélo4.jpg", "C'est aussi simple que ça ?", "Et oui ! Une fois le formulaire validé, un vélo vous est réservé pendant 20 minutes. Vérifiez sur le timer en bas de page que vous avez le temps de le récupérer !"),
        ];

        this.imgElement = document.querySelector(".slide_img");
        this.titleElement = document.querySelector(".slide_title");
        this.descriptionElement = document.querySelector(".slide_description");
        this.currentSlide = 0;
        this.onPause = false;

        // appel des méthodes
        this.displayCurrentSlide();
        this.play();
        this.initEvents();
    }

    // appel des méthodes en fonction de la touche pressée
    // ou du bouton sur lequel on click
    initEvents() {
        const playButton = document.getElementById("play-btn");
        playButton.onclick = () => {
            if (this.onPause === true) {
                this.play();
            }
            this.onPause = false
        }
        const pauseButton = document.getElementById("pause-btn");
        pauseButton.onclick = () => {
            this.onPause = true
        }
        const leftButton = document.getElementById("chevron-left");
        leftButton.onclick = this.onLeft.bind(this);

        const rightButton = document.getElementById("chevron-right");
        rightButton.onclick = this.onRight.bind(this);

        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {
                this.onLeft();
            }
            if (event.keyCode === 39) {
                this.onRight();
            }
        })
    }

    // liste des slides à afficher
    // avec texte et description
    displayCurrentSlide() {
        this.imgElement.src = this.slides[this.currentSlide].image
        this.titleElement.textContent = this.slides[this.currentSlide].title
        this.descriptionElement.textContent = this.slides[this.currentSlide].description
    }

    // méthode pour revenir à la slide précédente
    onLeft() {
        if (this.currentSlide === 0) {
            this.currentSlide = this.slides.length - 1
        } else {
            this.currentSlide--
        }
        this.displayCurrentSlide();
    }

    // méthode pour passer à la slide suivante
    onRight() {
        if (this.currentSlide >= this.slides.length - 1) {
            this.currentSlide = 0
        } else {
            this.currentSlide++
        }
        this.displayCurrentSlide();
    }

    // méthode de défilement automatique des slides
    // vers la droite toutes les 5 secondes
    play() {
        setTimeout(() => {
            if (this.currentSlide + 1 >= this.slides.length) {
                this.currentSlide = 0
            } else {
                this.currentSlide += 1
            }
            if (this.onPause === false) {
                this.displayCurrentSlide()
                this.play()
            }
        }, 5000)
    }
}