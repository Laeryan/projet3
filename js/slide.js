class Slide {
    constructor(image, title, description) {
        this.image = image,
        this.title = title,
        this.description = description
    }
}

// instancie chaque slide dans un array, qui facilitera l'utilisation des différentes méthodes
class Slider {
    constructor() {
        this.slides = [
            new Slide("images/slider1.jpg", "Comment ça fonctionne ?", "Commencez par cliquer sur la station la plus proche de chez vous."),
            new Slide("images/vélo1.jpg", "Visualisation de la station", "Vous obtenez un récapitulatif des informations de la station : nombre de vélos disponibles, travaux, etc..."),
            new Slide("images/vélo2.jpg", "Réserver un vélo", "Pour réserver un vélo, il suffit de cliquer sur le bouton 'réserver', celui-ci ouvre un formulaire."),
            new Slide("images/vélo3.jpg", "Valider le formulaire", "Renseignez vos coordonnées, et n'oubliez pas de signer !"),
            new Slide("images/vélo4.jpg", "C'est aussi simple que ça ?", "Et oui ! Une fois le formulaire validé, un vélo vous est réservé pendant 20 minutes. Vérifiez sur le timer en bas de page que vous avez le temps de le récupérer !"),
        ];

        this.imgElement = document.querySelector(".slide_img");                      // récupère l'élément appelé '.slide_img' dans le DOM pour y placer imgElement
        this.titleElement = document.querySelector(".slide_title");                  // récupère l'élément appelé '.slide_title' dans le DOM pour y placer titleElement
        this.descriptionElement = document.querySelector(".slide_description");      // récupère l'élément appelé '.slide_description' dans le DOM pour y placer descriptionElement
        this.currentSlide = 0;          // indique que la slide à afficher par défaut est la première slide du array (numéro 0)
        this.onPause = false;           // indique que notre variable onPause est, par défaut, sur false

        // appel des méthodes
        this.displayCurrentSlide();         // méthode qui affiche une image, un titre et une description dans le DOM
        this.play();                        // méthode qui permet le défilement automatique des slides toutes les 5 secondes
        this.initEvents();                  // méthode qui initie les différents événements de click ou keydown présents
    }

    // appel des méthodes en fonction de la touche pressée
    // ou du bouton sur lequel on click
    initEvents() {
        const playButton = document.getElementById("play-btn");
        playButton.onclick = () => {
            if (this.onPause === true) {                    // lorsqu'on click sur l'élément du DOM appelé 'play-btn', si onPause est true
                this.play();                                // la méthode play() est appelée et fait défiler les slides
            }                                               // sinon, onPause reste en false, et donc, ne lance pas play()
            this.onPause = false
        }
        const pauseButton = document.getElementById("pause-btn");
        pauseButton.onclick = () => {                       // lorsqu'on click sur l'élément du DOM appelé 'pause-btn', 
            this.onPause = true                             // onPause passe en true et stoppe le défilement des slides
        }
        const leftButton = document.getElementById("chevron-left");
        leftButton.onclick = this.onLeft.bind(this);        // lorsqu'on click sur l'élément du DOM appelé 'chevron-left', on éxécute la méthode onLeft()

        const rightButton = document.getElementById("chevron-right");
        rightButton.onclick = this.onRight.bind(this);      // lorsqu'on click sur l'élément du DOM appelé 'chevron-right', on éxécute la méthode onRight()

        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {                     // lorsqu'on appuie sur la touche n°37 du clavier (flèche de gauche)
                this.onLeft();                              // on exécute la méthode onLeft()
            }
            if (event.keyCode === 39) {                     // lorsqu'on appuie sur la touche n°39 du clavier (flèche de droite)
                this.onRight();                             // on éxécute la méthode onRight()
            }
        })
    }

    // liste des slides à afficher
    // avec leur texte et leur description
    displayCurrentSlide() {
        this.imgElement.src = this.slides[this.currentSlide].image                              // indique l'image à afficher par rapport à la currentSlide du array slides
        this.titleElement.textContent = this.slides[this.currentSlide].title                    // indique le titre à afficher sur la currentSlide
        this.descriptionElement.textContent = this.slides[this.currentSlide].description        // indique la description à afficher sur la currentSlide
    }

    // méthode pour revenir à la slide précédente
    onLeft() {
        if (this.currentSlide === 0) {                          // si currentSlide est égal à 0, on demande à currentSlide de passer
            this.currentSlide = this.slides.length - 1          // à la dernière slide du array : longueur du tableau - 1
        } else {
            this.currentSlide--                                 // sinon, currentSlide décrémente simplement pour retourner au numéro précédent dans le array
        }
        this.displayCurrentSlide();
    }

    // méthode pour passer à la slide suivante
    onRight() {
        if (this.currentSlide >= this.slides.length - 1) {      // si currentSlide est supérieur ou égal à la longueur du array - 1 
            this.currentSlide = 0                               // on lui demande de passer à la première slide du array (numéro 0)
        } else {
            this.currentSlide++                                 // sinon, currentSlide s'incrémente simplement pour passer au numéro suivant dans le array
        }
        this.displayCurrentSlide();
    }

    // méthode de défilement automatique des slides
    // vers la droite toutes les 5 secondes
    play() {
        setTimeout(() => {
            if (this.currentSlide + 1 >= this.slides.length) {          // si le numéro de la slide affichée actuellement + 1 est supérieur ou égal à la longueur du array
                this.currentSlide = 0                                   // on lui demande d'afficher la première slide du array (il retourne au début du tableau en boucle)
            } else {
                this.currentSlide += 1                                  // sinon il affiche la slide actuelle (son numéro) + 1 (et passe donc à la slide suivante)
            }
            if (this.onPause === false) {                               // si onPause est false, on appelle la méthode displayCurrentSlide() qui
                this.displayCurrentSlide()                              // qui permet l'affichage des slides
                this.play()                                             // la méthode play() s'appelle elle-même afin d'avoir un défilement en boucle tant qu'aucun événement n'est enclenché
            }
        }, 5000)                                                        // paramètre du setTimeOut, 5000 milisecondes permettants le changement de slide toutes les 5 secondes
    }
}