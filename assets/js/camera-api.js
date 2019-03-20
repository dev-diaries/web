const canAccessUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;

let video = document.getElementById('video');
let button = document.getElementById('button');
let canvas = document.getElementById('canvas');
let code = document.getElementsByClassName('camera-api--code')[0];
let context = canvas.getContext('2d');

let demo = document.getElementById('demo');
let showDemo = document.getElementById('js-show-demo');
let cantShowDemo = document.getElementById('js-no-access');

showDemo.addEventListener('click', function(e) {
    e.preventDefault();
    if (canAccessUserMedia) {
        demo.style.display = 'block';
        code.style.display = 'block';
    } else {
        cantShowDemo.style.display = 'block';
    }
});


let base64;

if (canAccessUserMedia) {
    const params = { video: true };
    navigator.mediaDevices.getUserMedia(params).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

button.addEventListener('click', function(e) {
    context.drawImage(video, 0, 0, 640, 480);
    canvas.className += ' camera-api--frame';
    base64 = convertCanvasToImage(canvas);
});

function convertImageToCanvas(image) {
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);

    return canvas;
}

function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL('image/png');

    return image;
}

function checkImage() {
    if (base64) {
        // implement facial recognition as part of the demo?
    }
}

setTimeout(checkImage, 5000);
