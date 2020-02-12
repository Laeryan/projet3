class Timer {
    constructor(maxTime = 1200000) {
        this.timerElement = document.getElementById('timer');
        this.time = null;
        this.maxTime = maxTime;

        if (sessionStorage.getItem('reservationDate') !== false) {
            this.time = new Date(sessionStorage.getItem('reservationDate'))
            this.start();
        }

    }
    //  rajouter les noms et prénoms dans la phrase
    display() {
        if (this.time && this.restTime() > 0) {
            this.timerElement.innerHTML = `Merci ${localStorage.firstName} ${localStorage.lastName} ! Il reste ${this.formatRestTime().restMinutes} minutes et ${this.formatRestTime().restSeconds}
            secondes avant l'annulation de votre réservation pour la station numéro ${sessionStorage.stationName}.`
        }

        if (this.restTime <= 0) {
            this.stop();
        }

    }

    // calcule le temps restant
    restTime() {
        return (this.time.getTime() + this.maxTime - Date.now())
    }

    // commence le timer
    start() {
        this.interval = setInterval(() => {
            this.display();
        }, 1000)
    }

    // arrête le timer
    stop() {
        clearInterval(this.interval)
    }

    formatRestTime() {
        const restMinutes = Math.floor(this.restTime() / 60000);
        const restSeconds = Math.floor(this.restTime() % 60000 / 1000);
        return ({
            restMinutes, restSeconds
        })
    }
}