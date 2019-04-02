const canvas = document.getElementById('simple-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 150, 200);

let data = [ 100, 68, 20, 30, 100 ];

const pieCanvas = document.getElementById('pie-canvas');
let c = pieCanvas.getContext('2d');
//draw background
c.fillStyle = "white";
c.fillRect(0,0,500,500);

//a list of colors
let colors = [ "orange", "green", "blue", "yellow", "teal"];

//calculate total of all data
let total = 0;
for(let i=0; i < data.length; i++) {
    total += data[i];
}

//draw pie data
let prevAngle = 0;
for(let i = 0; i < data.length; i++) {
    //fraction that this pieslice represents
    let fraction = data[i]/total;
    //calc starting angle
    let angle = prevAngle + fraction * Math.PI*2;

    //draw the pie slice
    c.fillStyle = colors[i];

    //create a path
    c.beginPath();
    c.moveTo(250,250);
    c.arc(250,250, 100, prevAngle, angle, false);
    c.lineTo(250,250);

    //fill it
    c.fill();

    //stroke it
    c.strokeStyle = "black";
    c.stroke();

    //update for next time through the loop
    prevAngle = angle;
}

//draw centered text
c.fillStyle = "black";
c.font = "24pt sans-serif";
let text = "Sales Data from 2025";
let metrics = c.measureText(text);
c.fillText(text, 250-metrics.width/2, 400);
