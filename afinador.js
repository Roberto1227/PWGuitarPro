const notas = {
    E2: 82.41, A2: 110.00, D3: 146.83,
    G3: 196.00, B3: 246.94, E4: 329.63
};

const needle = document.querySelector(".needle");
const freqDisplay = document.getElementById("frequency");
const statusDisplay = document.getElementById("status");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", async () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);

    const bufferLength = analyser.fftSize;
    const dataArray = new Float32Array(bufferLength);

    const detectFrequency = () => {
        analyser.getFloatTimeDomainData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i] * dataArray[i];
        }
        const rms = Math.sqrt(sum / bufferLength);
        if (rms < 0.01) return requestAnimationFrame(detectFrequency);

        let peak = 0, peakIndex = 0;
        for (let i = 1; i < bufferLength - 1; i++) {
            if (dataArray[i] > peak) {
                peak = dataArray[i];
                peakIndex = i;
            }
        }

        const frequency = peakIndex * audioContext.sampleRate / bufferLength;
        freqDisplay.textContent = frequency.toFixed(2);

        let status = "Fuera de tono";
        let deviation = 0;
        for (const [nota, freq] of Object.entries(notas)) {
            if (Math.abs(frequency - freq) < 5) {
                status = `Afinado en ${nota}`;
                deviation = frequency - freq;
                break;
            }
        }
        statusDisplay.textContent = status;

        // Mueve la aguja del afinador según la desviación
        needle.style.transform = `rotate(${deviation * 4}deg)`;

        requestAnimationFrame(detectFrequency);
    };

    detectFrequency();
});