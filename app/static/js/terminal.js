const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

const commands = {
    help: `Available commands: help, about, clear`,
    about: `I'm Shahnawaz, A computational biologist with a passion for coding.`,
    clear: '__clear__',   // Special command to clear the terminal
};

function handleCommand(command) {
    command = command.trim().toLowerCase();
    const commandLine = `<div>> ${command}</div>`;
    terminalOutput.innerHTML += commandLine;

    if (commands[command]) {
        if (commands[command] === '__clear__') {
            terminalOutput.innerHTML = ''; // Clear the terminal output
        } else {
            terminalOutput.innerHTML += `<div>${commands[command]}</div>`;
        }
    } else {
        terminalOutput.innerHTML += `<div>Command not found: ${command}</div>`;
    }

    terminalInput.value = ''; // Clear the input field
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to the bottom
}

terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        // e.preventDefault(); // Prevent form submission
        const command = terminalInput.value;
        handleCommand(command);
    }
});