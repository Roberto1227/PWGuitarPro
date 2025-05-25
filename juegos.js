// Acordes básicos para el juego
const acordes = [
    { nombre: 'Do', imagen: 'Acordes/Basico/Mayores/DoMayor.png' },
    { nombre: 'Re', imagen: 'Acordes/Basico/Mayores/ReMayor.png' },
    { nombre: 'Mi', imagen: 'Acordes/Basico/Mayores/MiMayor.png' },
    { nombre: 'Fa', imagen: 'Acordes/Basico/Mayores/FaMayor.png' },
    { nombre: 'Sol', imagen: 'Acordes/Basico/Mayores/SolMayor.png' },
    { nombre: 'La', imagen: 'Acordes/Basico/Mayores/LaMayor.png' },
    { nombre: 'Si', imagen: 'Acordes/Basico/Mayores/SiMayor.png' }
];

let cartas = [];
let cartasVolteadas = [];
let paresEncontrados = 0;
let intentos = 0;
let juegoIniciado = false;

// Elementos del DOM
const memoryGame = document.getElementById('memory-game');
const startButton = document.getElementById('start-game');
const pairsFoundDisplay = document.getElementById('pairs-found');
const attemptsDisplay = document.getElementById('attempts');

// Función para crear las cartas del juego
function crearCartas() {
    // Duplicar los acordes para crear pares
    const paresAcordes = [...acordes, ...acordes];
    
    // Mezclar las cartas
    cartas = paresAcordes.sort(() => Math.random() - 0.5);
    
    // Limpiar el contenedor del juego
    memoryGame.innerHTML = '';
    
    // Crear las cartas en el DOM
    cartas.forEach((acorde, index) => {
        const carta = document.createElement('div');
        carta.classList.add('memory-card');
        carta.dataset.index = index;
        
        carta.innerHTML = `
            <div class="memory-card-inner">
                <div class="memory-card-front">
                    ?
                </div>
                <div class="memory-card-back">
                    <img src="${acorde.imagen}" alt="${acorde.nombre}">
                </div>
            </div>
        `;
        
        carta.addEventListener('click', () => voltearCarta(carta));
        memoryGame.appendChild(carta);
    });
}

// Función para voltear una carta
function voltearCarta(carta) {
    if (!juegoIniciado || carta.classList.contains('flipped') || cartasVolteadas.length >= 2) {
        return;
    }
    
    carta.classList.add('flipped');
    cartasVolteadas.push(carta);
    
    if (cartasVolteadas.length === 2) {
        intentos++;
        attemptsDisplay.textContent = intentos;
        
        const [carta1, carta2] = cartasVolteadas;
        const index1 = parseInt(carta1.dataset.index);
        const index2 = parseInt(carta2.dataset.index);
        
        if (cartas[index1].nombre === cartas[index2].nombre) {
            // Par encontrado
            paresEncontrados++;
            pairsFoundDisplay.textContent = paresEncontrados;
            cartasVolteadas = [];
            
            if (paresEncontrados === acordes.length) {
                setTimeout(() => {
                    alert(`¡Felicidades! Has completado el juego en ${intentos} intentos.`);
                }, 500);
            }
        } else {
            // No es un par, voltear las cartas de nuevo
            setTimeout(() => {
                carta1.classList.remove('flipped');
                carta2.classList.remove('flipped');
                cartasVolteadas = [];
            }, 1000);
        }
    }
}

// Iniciar el juego
startButton.addEventListener('click', () => {
    if (!juegoIniciado) {
        juegoIniciado = true;
        paresEncontrados = 0;
        intentos = 0;
        pairsFoundDisplay.textContent = '0';
        attemptsDisplay.textContent = '0';
        startButton.textContent = 'Reiniciar Juego';
        crearCartas();
    } else {
        // Reiniciar el juego
        cartasVolteadas = [];
        crearCartas();
    }
});