
class HttpRequest {
    constructor() {
        this.request = new XMLHttpRequest();
    }

    // Méthode qui crée et exécute la requête
    get(url, onLoad) {
        this.request.onload = onLoad;           // Une fois que la requête est terminée on exécute onLoad
        this.request.open("get", url, true);    // Instancie une requête de type GET sur l'URL url de manière asynchrone.
        this.request.send();                    // Exécuter la requête
    }
}

// charge l'API JCDecaux
class ApiJCDecaux {
    constructor(city, apiKey) {
        this.url = `https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${apiKey}`; // littéraux de gabarit (permet de raccourcir la chaîne de caractère plutôt que d'écrire "" + "" +"" on utilise une expression)
    }
    
    // Fonction avec paramètre de callback ()
    listStations(onStationLoad) {
        const request = new HttpRequest()
        request.get(this.url, onStationLoad)
    }
}