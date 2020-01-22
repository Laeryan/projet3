window.addEventListener("load", function () {

    let stations = [];

    let selectedStation = null;

    const slider = new Slider();

    const map = new MyMap();

    const api = new ApiJCDecaux("Mulhouse", "508a0da7d19086274962c418f8cc5b7338052869");

    const detail = new DetailStation();

    const canvas = new CanvasSignature();

    const timer = new Timer();

    detail._onSubmit = () => {
        timer.time = new Date();
        timer.start();
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
    /*
        detail.onSubmit( () => {
            detail.nameInputElement.value
        })
    */


    // J'ai besoin d'afficher le détail d'une station
    // lorsque l'utilisateur click sur un marker
    // Je dois instancier un objet DetailStation qui va afficher
    // le détail de la station dans la page / DOM
    // const detail = new DetailStation()
})
