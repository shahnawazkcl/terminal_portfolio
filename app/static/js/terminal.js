const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

const commands = {
    help: `
    Available commands: 
    - help: Show a list of available commands, 
    - about: Who am I,
    - projects: Dummy List my projects,
    - skills: List my skills,
    - contact: How to reach me,
    - clear: Clear the terminal output`,
    projects: `My Projects (Dummy list):
    - Project 1: A web application for data visualization.
    - Project 2: A machine learning model for predicting outcomes.
    - Project 3: A bioinformatics tool for genomic analysis.`,
    skills: `My Skills:
    - Programming: Python, JavaScript, R
    - Data Analysis: Pandas, NumPy, SciPy
    - Web Development: HTML, CSS, Flask
    - Bioinformatics: Sequence analysis, Genomic data interpretation`,
    contact: `You can contact me via:
    - Email: saalis.uk@gmail.com
    - ResearchGate: https://www.researchgate.net/profile/Shahnawaz-Ali
    - LinkedIn: https://www.linkedin.com/in/shahnawaz-ali-jmi
    - GitHub: https://github.com/shanenawazkcl
    - Personal blogsite: https://shahnawazkcl.github.io/
    - Twitter: https://twitter.com/shahnawaz_mbd`,
    about: `I'm Shahnawaz, A computational biologist with a passion for blending code with creativity.`,
    clear: '__clear__',   // Special command to clear the terminal
};

const history = [];
let historyIndex = -1;

function handleCommand(command) {
    command = command.trim().toLowerCase();

    history.push(command);
    historyIndex = history.length; // Reset history index

    const commandLine = `<div>&gt; ${command}</div>`;
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
    } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = history[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            terminalInput.value = history[historyIndex];
        } else {
            historyIndex = history.length; // Reset to the end of history
            terminalInput.value = '';
        }
    }
});