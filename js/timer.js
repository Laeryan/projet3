class Timer {
    constructor(maxTime = 1200000) {
        this.timerElement = document.getElementById('timer');
        this.time = null;
        this.maxTime = maxTime;
    }

    display() {
        if (this.time && this.restTime() > 0) {
            this.timerElement.innerHTML = `Il reste ${this.formatRestTime().restMinutes} minutes et ${this.formatRestTime().restSeconds} secondes avant l'annulation de votre réservation.`
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
        this.interval = setInterval( () => {
            console.log(this.restTime())
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
        console.log(restMinutes, restSeconds)
        return ({
            restMinutes, restSeconds
        })
    }
}