class CanvasSignature {
    constructor() {
        this.canvas = document.getElementById('canvas');
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
        // lorsqu'on click sur la souris
        this.canvas.addEventListener('mousedown', e => {
            this.canvasDraw(e)
            this.draw = true;
            
        });

        // mouvement de la souris avec le click
        this.canvas.addEventListener('mousemove', e => {
            this.canvasDraw(e);
        });

        // lorsqu'on arrête de clicker
        window.addEventListener('mouseup', e => {
                this.draw = false
                this.ctx.beginPath();
        });
    }

    canvasDraw(e) {
        if (!this.draw) return
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        console.log(x, y)
    }
}
const sign = new CanvasSignature();