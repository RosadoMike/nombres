// script.js
document.getElementById('generar').addEventListener('click', generarNombre);

function generarNombre() {
    const nombres1 = ['Pedro', 'Pochoclo', 'Mateo', 'Hugo', 'Karen','Mía','Josue'];
    const nombres2 = ['Martínez', 'García', 'López', 'Pérez', 'González','Ronaldo','Kau','Contreras'];

    const nombreAleatorio1 = nombres1[Math.floor(Math.random() * nombres1.length)];
    const nombreAleatorio2 = nombres2[Math.floor(Math.random() * nombres2.length)];

    const nombreCompleto = `${nombreAleatorio1} ${nombreAleatorio2}`;

    document.getElementById('nombre-resultado').textContent = nombreCompleto;
}
