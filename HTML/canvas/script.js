// Select the canvas elements
let theCanvas = document.getElementById('our-canvas');
// select context type    
theContext = theCanvas.getContext('2d');

// Choose fill style
theContext.fillStyle = '#F00';

// Draw Rectangle
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);