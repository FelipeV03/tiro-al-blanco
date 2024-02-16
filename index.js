let pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 1271, 800);



let radio = 10;


function dibujarCicunferencia(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}


function limpiar() {
    pincel.clearRect(0, 0, 1271, 800);
}


function circiferencia(x, y) {
    dibujarCicunferencia(x, y, radio + 20, 'red');
    dibujarCicunferencia(x, y, radio + 10, 'white');
    dibujarCicunferencia(x, y, radio, 'red');
}


function randomPosition(max) {
    return Math.floor(Math.random() * max);
}


let x = 0;
let xRandom = randomPosition(1271);
let yRandom = randomPosition(800);
function actualizarPantalla() {
    limpiar();
    xRandom = randomPosition(1271);
    yRandom = randomPosition(800);
    circiferencia(xRandom, yRandom);
    x++;
}


setInterval(() => {
    actualizarPantalla();
}, 1000);


function disparo(e) {
    let x = e.pageX - pantalla.offsetLeft;
    let y = e.pageY - pantalla.offsetTop;

    if (x < xRandom + radio && x > xRandom - radio && y < yRandom + radio && y > yRandom - radio) {
        // alert('Bien hecho sos un crack! :D');

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Bien hecho sos un crack! :D"
        });
    } else {
        // alert('Perdiste sos re manco :P');
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Perdiste sos re manco :P"
        });
    }
}

pantalla.onclick = disparo;
