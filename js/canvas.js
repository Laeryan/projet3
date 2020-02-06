class CanvasSignature {
    constructor() {
        this.canvas = document.getElementById('canvas');
       // this.clearBtn = document.getElementById("clear-btn");
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

    clearCanvas() {
        const clearBtn = document.getElementById("clear-btn");
        clearBtn.onclick = () => {
         console.log("yipyepyup");
        }
    }

 /*   clearCanvas(e) {
       this.clearBtn.addEventListener('click', e => {
            console.log("yipyepyup");
        });
    } */
}

// Méthode qui crée un canvas vide et invisible, qui permet de comparer le canvas supposé être rempli par l'utilisateur.
// Si le canvas utilisateur est vide (= identique au canvas vide invisible), un message d'alerte s'affiche.
function isCanvasBlank(canvas) {
    const blank = document.createElement('canvas');

    blank.width = canvas.width;
    blank.height = canvas.height;

    return canvas.toDataURL() === blank.toDataURL();
}