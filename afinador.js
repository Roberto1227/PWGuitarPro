const notas = {
    E2: 82.41,
    A2: 110.00,
    D3: 146.83,
    G3: 196.00,
    B3: 246.94,
    E4: 329.63
};

const noteDisplay = document.getElementById("gt-note");
const freqDisplay = document.getElementById("gt-freq");
const statusDisplay = document.getElementById("gt-status");
const startBtn = document.getElementById("start");
const stringCircles = document.querySelectorAll(".gt-string-circle");

let audioContext;
let analyser;
let isRunning = false;
let lastPerfect = false;

function findClosestNote(frequency) {
    let closest = null;
    let minDiff = Infinity;
    for (const [note, freq] of Object.entries(notas)) {
        const diff = Math.abs(frequency - freq);
        if (diff < minDiff) {
            minDiff = diff;
            closest = { note, freq };
        }
    }
    return closest;
}

function updateUI(frequency, closestNote) {
    freqDisplay.textContent = isFinite(frequency) ? frequency.toFixed(1) + ' Hz' : '-- Hz';
    noteDisplay.textContent = closestNote ? closestNote.note[0] : '--';

    let status = "";
    let statusColor = "#fff";
    let isPerfect = false;

    if (Math.abs(frequency - closestNote.freq) < 2) {
        status = "¡Cuerda afinada!";
        statusColor = "#4CAF50";
        isPerfect = true;
    } else if (Math.abs(frequency - closestNote.freq) < 5) {
        status = "Casi";
        statusColor = "#FFC107";
    } else if (frequency > closestNote.freq) {
        status = "Demasiado alto";
        statusColor = "#F44336";
    } else {
        status = "Demasiado bajo";
        statusColor = "#F44336";
    }
    statusDisplay.textContent = status;
    statusDisplay.style.color = statusColor;

    // Resaltar círculo de cuerda
    stringCircles.forEach(circle => {
        circle.classList.remove("active-red", "active-green");
        if (closestNote && circle.dataset.note === closestNote.note) {
            if (isPerfect) {
                circle.classList.add("active-green");
            } else {
                circle.classList.add("active-red");
            }
        }
    });

    // Beep si está perfectamente afinada
    if (isPerfect && !lastPerfect) {
        playBeep();
    }
    lastPerfect = isPerfect;
}

// Beep
function playBeep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = 880;
        g.gain.value = 0.15;
        o.connect(g);
        g.connect(ctx.destination);
        o.start();
        setTimeout(() => {
            o.stop();
            ctx.close();
        }, 180);
    } catch (e) {}
}

// Algoritmo de autocorrelación robusto
function autoCorrelate(buf, sampleRate) {
    let SIZE = buf.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) {
        let val = buf[i];
        rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.01) return -1; // No hay suficiente señal

    let r1 = 0, r2 = SIZE - 1, thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
        if (Math.abs(buf[i]) < thres) { r1 = i; break; }
    }
    for (let i = 1; i < SIZE / 2; i++) {
        if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
    }

    buf = buf.slice(r1, r2);
    SIZE = buf.length;

    let c = new Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE - i; j++) {
            c[i] = c[i] + buf[j] * buf[j + i];
        }
    }
    let d = 0; while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < SIZE; i++) {
        if (c[i] > maxval) {
            maxval = c[i];
            maxpos = i;
        }
    }
    let T0 = maxpos;
    let x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
    let a = (x1 + x3 - 2 * x2) / 2;
    let b = (x3 - x1) / 2;
    if (a) T0 = T0 - b / (2 * a);
    return sampleRate / T0;
}

function detectFrequency() {
    if (!isRunning) return;
    const bufferLength = analyser.fftSize;
    const dataArray = new Float32Array(bufferLength);
    analyser.getFloatTimeDomainData(dataArray);

    const frequency = autoCorrelate(dataArray, audioContext.sampleRate);

    // Solo mostrar si la frecuencia está cerca de alguna cuerda (±15 Hz)
    let matched = false;
    if (frequency > 70 && frequency < 400) {
        const closestNote = findClosestNote(frequency);
        if (Math.abs(frequency - closestNote.freq) < 15) {
            updateUI(frequency, closestNote);
            matched = true;
        }
    }
    if (!matched) {
        statusDisplay.textContent = "Toca una cuerda al aire";
        statusDisplay.style.color = "#fff";
        noteDisplay.textContent = '--';
        freqDisplay.textContent = '-- Hz';
        stringCircles.forEach(c => c.classList.remove("active-red", "active-green"));
        lastPerfect = false;
    }
    requestAnimationFrame(detectFrequency);
}

startBtn.addEventListener("click", async () => {
    if (!isRunning) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048;
            analyser.smoothingTimeConstant = 0;
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
            isRunning = true;
            startBtn.innerHTML = '<i class="fas fa-stop"></i><span>Detener Afinador</span>';
            detectFrequency();
        } catch (error) {
            statusDisplay.textContent = "Error: No se pudo acceder al micrófono";
            statusDisplay.style.color = "#F44336";
        }
    } else {
        isRunning = false;
        startBtn.innerHTML = '<i class="fas fa-microphone"></i><span>Iniciar Afinador</span>';
        statusDisplay.textContent = "Afinador detenido";
        statusDisplay.style.color = "#fff";
        noteDisplay.textContent = '--';
        freqDisplay.textContent = '-- Hz';
        stringCircles.forEach(c => c.classList.remove("active-red", "active-green"));
        lastPerfect = false;
    }
});