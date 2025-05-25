// Función para inicializar el estado de progreso
function initializeProgress() {
    if (!localStorage.getItem('guitarProProgress')) {
        localStorage.setItem('guitarProProgress', JSON.stringify({
            partesGuitarra: false,
            nivelBasico: false,
            nivelMedio: false,
            nivelAvanzado: false
        }));
    }
}

// Función para verificar si una lección está desbloqueada
function isLessonUnlocked(lessonName) {
    const progress = JSON.parse(localStorage.getItem('guitarProProgress'));
    
    switch(lessonName) {
        case 'partes':
            return true; // Siempre desbloqueado
        case 'basico':
            return progress.partesGuitarra;
        case 'intermedio':
            return progress.nivelBasico;
        case 'avanzado':
            return progress.nivelMedio;
        default:
            return false;
    }
}

// Función para verificar acceso a la página actual
function checkPageAccess() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    if (currentPage !== 'lecciones' && currentPage !== 'partes') {
        if (!isLessonUnlocked(currentPage)) {
            alert('Debes completar la lección anterior para acceder a esta sección.');
            window.location.href = 'lecciones.html';
        }
    }
}

// Función para actualizar el estado de las tarjetas
function updateCardStates() {
    const progress = JSON.parse(localStorage.getItem('guitarProProgress'));
    
    // Partes siempre desbloqueado
    document.getElementById('nivel-partes').classList.remove('locked');
    document.getElementById('nivel-partes').classList.add('unlocked');
    
    // Básico desbloqueado si partes completado
    if (progress.partesGuitarra) {
        document.getElementById('nivel-basico').classList.remove('locked');
        document.getElementById('nivel-basico').classList.add('unlocked');
        document.querySelector('#nivel-basico .btn-2').classList.remove('disabled');
    }
    
    // Intermedio desbloqueado si básico completado
    if (progress.nivelBasico) {
        const nivelMedio = document.getElementById('nivel-medio');
        nivelMedio.classList.remove('locked');
        nivelMedio.classList.add('unlocked');
        const btnMedio = nivelMedio.querySelector('.btn-2');
        if (btnMedio) {
            btnMedio.classList.remove('disabled');
        }
    }
    
    // Avanzado desbloqueado si intermedio completado
    if (progress.nivelMedio) {
        document.getElementById('nivel-avanzado').classList.remove('locked');
        document.getElementById('nivel-avanzado').classList.add('unlocked');
        document.querySelector('#nivel-avanzado .btn-2').classList.remove('disabled');
    }
}

// Función para marcar una lección como completada
function marcarLeccionCompletada(nivel) {
    const progress = JSON.parse(localStorage.getItem('guitarProProgress'));
    
    switch(nivel) {
        case 'partesGuitarra':
            progress.partesGuitarra = true;
            alert('¡Felicidades! Has completado la lección de Partes de la Guitarra. Ahora puedes acceder a las lecciones básicas.');
            break;
        case 'nivelBasico':
            progress.nivelBasico = true;
            // Mostrar mensaje de felicitación
            alert('¡Felicidades! Has completado las lecciones básicas. Ahora puedes acceder a los Acordes Intermedios. ¡Sigue así!');
            // Guardar el progreso
            localStorage.setItem('guitarProProgress', JSON.stringify(progress));
            // Redirigir a la página de lecciones
            window.location.href = 'lecciones.html';
            return; // Salir de la función aquí para evitar la redirección duplicada
        case 'nivelMedio':
            progress.nivelMedio = true;
            alert('¡Felicidades! Has completado las lecciones intermedias. Ahora puedes acceder a las lecciones avanzadas.');
            break;
    }
    
    localStorage.setItem('guitarProProgress', JSON.stringify(progress));
    window.location.href = 'lecciones.html';
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    initializeProgress();
    updateCardStates();
    checkPageAccess();
});

// Mostrar toast si se acaba de desbloquear el intermedio o avanzado
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('showIntermedioToast')) {
        const toast = document.getElementById('toast-intermedio');
        if (toast) {
            toast.style.display = 'block';
            setTimeout(() => {
                toast.style.display = 'none';
                sessionStorage.removeItem('showIntermedioToast');
            }, 3500);
        }
    }
    if (sessionStorage.getItem('showAvanzadoToast')) {
        const toast = document.getElementById('toast-avanzado');
        if (toast) {
            toast.style.display = 'block';
            setTimeout(() => {
                toast.style.display = 'none';
                sessionStorage.removeItem('showAvanzadoToast');
            }, 3500);
        }
    }
});

// Modifica la función marcarLeccionCompletada para activar el toast
const originalMarcarLeccionCompletada = marcarLeccionCompletada;
window.marcarLeccionCompletada = function(nivel) {
    if (nivel === 'nivelBasico') {
        sessionStorage.setItem('showIntermedioToast', '1');
    }
    if (nivel === 'nivelMedio') {
        sessionStorage.setItem('showAvanzadoToast', '1');
    }
    originalMarcarLeccionCompletada(nivel);
};

// Botón para reiniciar el progreso
document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('resetProgressBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('¿Seguro que quieres reiniciar tu progreso?')) {
                localStorage.removeItem('guitarProProgress');
                location.reload();
            }
        });
    }
}); 