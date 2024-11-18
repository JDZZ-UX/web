// script.js

function calcularResultado() {
    const respuestas = document.querySelectorAll('input[type="radio"]:checked');
    let correctas = 0;

    respuestas.forEach(respuesta => {
        if (respuesta.value === "correcto") correctas++;
    });

    document.getElementById("resultado").innerText = `Obtuviste ${correctas} de ${respuestas.length} respuestas correctas.`;

    // Desactivar todas las opciones después de enviar
    const opciones = document.querySelectorAll('input[type="radio"]');
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });

    // Mostrar el botón de reinicio
    document.getElementById("reiniciarBtn").style.display = "block";
}

function reiniciarQuiz() {
    // Habilitar todas las opciones y desmarcar
    const opciones = document.querySelectorAll('input[type="radio"]');
    opciones.forEach(opcion => {
        opcion.disabled = false;
        opcion.checked = false;
    });

    // Limpiar el resultado
    document.getElementById("resultado").innerText = '';

    // Ocultar el botón de reinicio
    document.getElementById("reiniciarBtn").style.display = "none";
}