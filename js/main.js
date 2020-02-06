window.addEventListener("load", function () {     // méthode qui charge toutes les constantes à l'ouverture du site dans la fenêtre

    let stations = [];

    let selectedStation = null;

    const slider = new Slider();

    const map = new MyMap();

    const api = new ApiJCDecaux("Mulhouse", "508a0da7d19086274962c418f8cc5b7338052869"); // Nom de la ville choisie + clé d'utilisation de l'API

    const detail = new DetailStation();

    const canvas = new CanvasSignature();

    const timer = new Timer();

    detail._onSubmit = (name) => {
        timer.time = new Date();
        timer.start();
        sessionStorage.setItem('stationName', name);
        sessionStorage.setItem('reservationDate', timer.time);
        localStorage.setItem('firstName', canvas.firstNameInputElement);
        localStorage.setItem('lastName', canvas.lastNameInputElement);
    }


    api.listStations(function () {
        const listStations = JSON.parse(this.responseText)

        for (let station of listStations) {
            const position = station.position
            map.addMarker([position.lat, position.lng], () => {
                console.log(station);
                detail.display(station.name, station.status, station.address, station.bike_stands)
            })

        }
    })
})
