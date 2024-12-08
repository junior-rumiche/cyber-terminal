/* JUNIOR RUMICHE  */


/**
 * 
 * Array of hacking-related text messages to be displayed.
 * @type {string[]}
 */
const hacking_texts = [
    "Accessing mainframe...",
    "Bypassing security protocols...",
    "Decrypting database...",
    "Injecting payload...",
    "Establishing secure connection...",
    "Running quantum algorithms...",
    "Deploying neural network...",
    "Analyzing system vulnerabilities...",
    "Executing binary exploitation...",
    "System compromised successfully!"
];

const terminal = document.getElementById('terminal');
const date_element = document.getElementById('date');



/**
 * Updates the date and time display.
 */
function update_date_time() {
    const now = new Date();
    date_element.textContent = `> ${now.toLocaleString()}`;
}




update_date_time();
setInterval(update_date_time, 1000);




/**
 * Types out text character by character with a random delay.
 * @param {string} text - The text to be typed.
 * @param {HTMLElement} element - The element to append the text to.
 * @returns {Promise<void>}
 */
async function type_text(text, element) {
    for (let char of text) {
        element.textContent += char;
        // Random typing speed between 50ms and 150ms
        await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50));
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
}




/**
 * Starts the hacking simulation by displaying hacking texts and a success message.
 * @returns {Promise<void>}
 */
async function start_hacking() {
    for (let text of hacking_texts) {
        const line = document.createElement('div');
        line.className = 'mb-2';
        terminal.appendChild(line);
        await type_text(text, line);
    }

    const success_line = document.createElement('div');
    success_line.className = 'text-yellow-400 font-bold mt-4';
    terminal.appendChild(success_line);
    await type_text("✓ Access Granted!", success_line);
}

start_hacking();
