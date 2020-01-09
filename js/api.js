
class HttpRequest {
    constructor() {
        this.request = new XMLHttpRequest();
    }

    // 
    get(url, onLoad) {
        this.request.onload = onLoad;
        this.request.open("get", url, true);
        this.request.send();
    }
}

// charge l'API JCDecaux
class ApiJCDecaux {
    constructor(city, apiKey) {
        this.url = `https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${apiKey}`;
    }
    
    // 
    listStations(onStationLoad) {
        const request = new HttpRequest()
        request.get(this.url, onStationLoad)
    }
}