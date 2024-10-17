//variables
const resultadoDiv = document.getElementById('resultado');
const opciones = ['piedra', 'papel', 'tijeras'];


function obtenerEleccionOrdenador() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function convertiraIcono(opcion) {
    if (opcion === 'piedra') 
         return '🪨';
    if (opcion === 'papel') 
        return '📄';
    if (opcion === 'tijeras') 
        return '✂️';
}

function jugar(eleccionJugador) {
    const eleccionOrdenador= obtenerEleccionOrdenador();
    const iconoJugador = convertiraIcono(eleccionJugador);

    let resultado = '';

    if (eleccionJugador === eleccionOrdenador) {
        resultado = `Has empatado 🤝 Ambos eligieron ${eleccionJugador} (${emojiJugador}).`;
    } else if (eleccionJugador === 'piedra' && eleccionOrdenador === 'tijeras') {
        resultado = `¡Ganaste! 🎉 Piedra (🪨) vence a Tijeras (✂️).`;
    } else if (eleccionJugador === 'papel' && eleccionOrdenador === 'piedra') {
        resultado = `¡Ganaste! 🎉 Papel (📄) vence a Piedra (🪨).`;
    } else if (eleccionJugador === 'tijeras' && eleccionOrdenador === 'papel') {
        resultado = `¡Ganaste! 🎉 Tijeras (✂️) vence a Papel (📄).`;
    } else if (eleccionOrdenador === 'piedra' && eleccionJugador === 'tijeras') {
        resultado = `Has perdido 😔 Piedra (🪨) vence a Tijeras (✂️).`;
    } else if (eleccionOrdenador === 'papel' && eleccionJugador === 'piedra') {
        resultado = `Has perdido 😔 Papel (📄) vence a Piedra (🪨).`;
    } else if (eleccionOrdenador === 'tijeras' && eleccionJugador === 'papel') {
        resultado = `Has perdido 😔 Tijeras (✂️) vence a Papel (📄).`;
    }


    resultadoDiv.textContent = resultado;
}
