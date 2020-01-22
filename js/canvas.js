
class CanvasSignature {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 5;
        this.mousePosition = {x : 0, y : 0};
        this.lastPosition = this.mousePosition;
        this.draw = true;
    }

    canvasEvents() {
        // click de la souris
        this.canvas.addEventListener('click', function(e) {
            this.draw = true;
            this.lastPosition = this.newMousePosition(e);
        })

        // mouvement de la souris avec le click
        this.canvas.addEventListener('mousemove', function(e) {
            this.mousePosition= this.newMousePosition(e);
        })

        // pad ou doigt pour la version tablette/mobile ?
    }

    // détermine les positions x et y de la souris
    newMousePosition(mouseEvent) {

    }

    // affiche le dessin du canvas
    canvasDraw() {

    }
}