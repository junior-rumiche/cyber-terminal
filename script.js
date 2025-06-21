/* JUNIOR RUMICHE  */


/**
 * 
 * Array of hacking-related text messages to be displayed.
 * @type {string[]}
 */
const hacking_texts = [
    "Initiating neural access sequence...",
    "Overflowing perimeter security buffers...",
    "Decrypting encrypted data nodes...",
    "Injecting ghost code into the system core...",
    "Establishing stealth link via the darknet...",
    "Executing reverse quantum cryptography algorithms...",
    "Releasing sentinel A.I. into target infrastructure...",
    "Scanning for zero-day vulnerabilities on the corporate network...",
    "Compiling distributed denial-of-service exploit...",
    "Breaching next-generation firewalls...",
    "Exfiltrating exabytes of confidential information...",
    "Intrusion complete! System compromised.",
    "Establishing handshake with OmniCorp mainframe...",
    "ICE firewall bypass successful...",
    "Accessing classified files from Ground Zero...",
    "WARNING: Hostile AI detected in sub-level 3...",
    "Decrypting data streams with quantum-entangled algorithms...",
    "Bypassing biometric security layers...",
    "Uploading viral payload to central server...",
    "Manipulating shadow government data logs...",
    "Engaging cloaking protocols... Vanishing from system.",
    "Access granted. Welcome to the other side."
];

const terminalOutput = document.getElementById('terminal');
const dateElement = document.getElementById('date-output'); // ID actualizado para coincidir con HTML

/**
 * Updates the date and time display.
 */
function updateDateTime() { // Nombre de función camelCase
    const now = new Date();
    if (dateElement) { // Verificar si el elemento existe
        dateElement.textContent = `> ${now.toLocaleString()}`;
    }
}

if (dateElement) { // Solo ejecutar si el elemento existe
    updateDateTime();
    setInterval(updateDateTime, 1000);
} else {
    console.error("Elemento 'date-output' no encontrado.");
}

/**
 * Types out text character by character with a random delay.
 * @param {string} text - The text to be typed.
 * @param {HTMLElement} element - The element to append the text to.
 * @returns {Promise<void>}
 */
async function typeText(text, element) { // Nombre de función camelCase
    for (let char of text) {
        element.textContent += char;
        // Random typing speed between 50ms and 150ms
        await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50));
    }
    // No agregar espera extra aquí para que la siguiente línea comience antes si es necesario
}

/**
 * Starts the hacking simulation by displaying hacking texts and a success message.
 * @returns {Promise<void>}
 */
async function startHackingSimulation() { // Nombre de función más descriptivo
    if (!terminalOutput) { // Verificar si el elemento de la terminal existe
        console.error("Elemento 'terminal' no encontrado. La simulación no puede iniciar.");
        return;
    }

    // Mostrar un mensaje estático inicial si es necesario o deseado para SEO/accesibilidad antes de la animación
    // const staticInitialContent = document.createElement('p');
    // staticInitialContent.textContent = "Initiating cyberpunk terminal simulation..."; // Translated
    // staticInitialContent.className = "sr-only"; // Oculto visualmente pero accesible
    // terminalOutput.parentNode.insertBefore(staticInitialContent, terminalOutput); // Opcional

    for (let i = 0; i < hacking_texts.length; i++) {
        const text = hacking_texts[i];
        const line = document.createElement('div');
        line.className = 'mb-2 text-green-400'; // Asegurando color base
        terminalOutput.appendChild(line);
        await typeText(text, line);
        // Pequeña pausa entre líneas
        if (i < hacking_texts.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }

    const successLine = document.createElement('div');
    successLine.className = 'text-yellow-300 font-bold mt-4 glow'; // Added glow and adjusted color
    terminalOutput.appendChild(successLine);
    await typeText("λ Connection established. Full system control achieved.", successLine); // Translated
}

// Iniciar la simulación después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // El mensaje de inicialización ya está en el HTML, así que no es necesario agregarlo aquí.
    // const initializationMessage = document.getElementById('initialization-message');
    // if (initializationMessage) {
    //     // Se puede dejar como está o manipularlo si es necesario
    // }
    startHackingSimulation();
});
