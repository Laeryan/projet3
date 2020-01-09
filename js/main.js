window.addEventListener("load", function() {

    let stations = [];

    let selectedStation = null;

    const slider = new Slider()

    const myMap = new MyMap()
    
    const api = new ApiJCDecaux("Mulhouse", "508a0da7d19086274962c418f8cc5b7338052869")

    const detail = new DetailStation()

    api.listStations(function() {
        const listStations = JSON.parse(this.responseText)

        for (station of listStations) {
            const position = station.position
            myMap.addMarker([position.lat, position.lng])
        }
    })

    // J'ai besoin de créer une carte
    // Je dois instancier un objet MyMap qui va afficher une map
    // const map = new MyMap()


    // J'ai besoin d'afficher le détail d'une station
    // lorsque l'utilisateur click sur un marker
    // Je dois instancier un objet DetailStation qui va afficher
    // le détail de la station dans la page / DOM
    // const detail = new DetailStation()
})
