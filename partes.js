let indiceActual = 0; // Índice inicial de las diapositivas

// Función para inicializar las diapositivas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const introduccion = document.querySelector('.introduccion'); // Seleccionar la introducción
  const diapositivas = document.querySelectorAll('.diapositiva'); // Seleccionar todas las diapositivas

  // Configurar visibilidad inicial
  if (introduccion) {
    introduccion.style.display = 'block'; // Mostrar solo la introducción si existe
    diapositivas.forEach((diapositiva) => {
      diapositiva.style.display = 'none'; // Ocultar todas las diapositivas
    });
  } else {
    // Si no hay introducción, mostrar la primera diapositiva
    diapositivas.forEach((diapositiva, index) => {
      diapositiva.style.display = index === 0 ? 'block' : 'none';
    });
  }

  actualizarBarraProgreso(); // Inicializar la barra de progreso
});

// Función para mostrar la diapositiva siguiente
function mostrarSiguiente() {
  const introduccion = document.querySelector('.introduccion'); // Seleccionar introducción
  const diapositivas = document.querySelectorAll('.diapositiva'); // Seleccionar diapositivas

  // Gestionar visibilidad entre la introducción y las diapositivas
  if (introduccion && introduccion.style.display !== 'none') {
    introduccion.style.display = 'none'; // Oculta la introducción
    diapositivas[indiceActual].style.display = 'block'; // Muestra la primera diapositiva
  } else {
    diapositivas[indiceActual].style.display = 'none'; // Oculta la diapositiva actual
    indiceActual = (indiceActual + 1) % diapositivas.length; // Avanza al siguiente índice
    diapositivas[indiceActual].style.display = 'block'; // Muestra la siguiente diapositiva

    if (diapositivas[indiceActual].id === 'diapositiva-final') {
      lanzarConfeti(); // Lanza el confeti si es la última diapositiva
    }
  }

  actualizarBarraProgreso(); // Actualiza la barra de progreso
}

function mostrarAnterior() {
  const introduccion = document.querySelector('.introduccion'); // Seleccionar la introducción
  const diapositivas = document.querySelectorAll('.diapositiva'); // Seleccionar todas las diapositivas

  // Si estamos en la introducción, no hacemos nada
  if (indiceActual === 0 && introduccion && introduccion.style.display === 'none') {
    introduccion.style.display = 'block'; // Muestra la introducción
    diapositivas[indiceActual].style.display = 'none'; // Oculta la diapositiva actual
    return; // Salimos de la función porque estamos ahora en la introducción
  }

  // Oculta la diapositiva actual
  diapositivas[indiceActual].style.display = 'none';

  // Calcula el índice anterior correctamente
  indiceActual = (indiceActual - 1 + diapositivas.length) % diapositivas.length;

  // Muestra la diapositiva anterior
  diapositivas[indiceActual].style.display = 'block';

  // Actualiza la barra de progreso
  actualizarBarraProgreso();
}

function actualizarBarraProgreso() {
  const totalDiapositivas = document.querySelectorAll('.diapositiva').length;
  const progreso = ((indiceActual + 1) / totalDiapositivas) * 100; // Calcula el porcentaje de avance
  document.querySelector('.barra-progreso .indicador').style.width = progreso + '%'; // Actualiza la barra
}

// Función para lanzar confeti
function lanzarConfeti() {
  confetti({
    particleCount: 100, // Número de partículas
    spread: 70, // Ángulo de dispersión
    origin: { y: 0.6 } // Origen del confeti (más abajo de lo normal)
  });

  let interval = setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
  }, 5000); // Detener confeti después de 5 segundos
}