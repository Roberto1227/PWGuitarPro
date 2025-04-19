let indiceActual = 0;

// Función para mostrar la diapositiva siguiente
function mostrarSiguiente() {
  const diapositivas = document.querySelectorAll('.introduccion, .diapositiva'); // Incluye la introducción
  diapositivas[indiceActual].style.display = 'none'; // Oculta la diapositiva actual
  indiceActual++; // Avanza al siguiente índice
  diapositivas[indiceActual].style.display = 'block'; // Muestra la siguiente diapositiva
}

// Función para mostrar la diapositiva anterior
function mostrarAnterior() {
  const diapositivas = document.querySelectorAll('.introduccion, .diapositiva'); // Incluye todas las diapositivas
  diapositivas[indiceActual].style.display = 'none'; // Oculta la diapositiva actual
  indiceActual = (indiceActual - 1 + diapositivas.length) % diapositivas.length; // Retrocede en el índice circularmente
  diapositivas[indiceActual].style.display = 'block'; // Muestra la diapositiva anterior
  actualizarBarraProgreso(); // Actualiza la barra de progreso
}

document.addEventListener('DOMContentLoaded', () => {
  const diapositivas = document.querySelectorAll('.introduccion, .diapositiva');
  diapositivas.forEach((diapositiva, index) => {
    diapositiva.style.display = index === 0 ? 'block' : 'none'; // Solo muestra la introducción al principio
  });
  actualizarBarraProgreso(); // Inicializa la barra de progreso
});

function actualizarBarraProgreso() {
  const totalDiapositivas = document.querySelectorAll('.introduccion, .diapositiva').length; // Incluye todas las secciones
  const progreso = ((indiceActual + 1) / totalDiapositivas) * 100; // Calcula el porcentaje de avance
  document.querySelector('.barra-progreso .indicador').style.width = progreso + '%'; // Actualiza el ancho de la barra
}