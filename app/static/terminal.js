const terminal = document.getElementById('terminal');

function createInputLine() {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `<span>> </span> <input type="text" id="cmd" autofocus />`;
    terminal.appendChild(inputLine);

    const commands = {
        help: "Available commands: help, about, projects, contact",
        about: "I'm Shahnawaz, a am a computational biologist with a passion for coding.",
        projects: "Check out my projects on GitHub:https://github.com/shahnawazkcl",
        contact: "You can reach me at twitter: @shahnawaz_mbd or email:saalis.uk@gmail.com or LinkedIn: https://www.linkedin.com/in/shahnawaz-ali-jmi/",
        clear: "__clear__",    
    };

    const cmdInput = document.getElementById('cmd');
    cmdInput.focus();

    cmdInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const input = cmdInput.value.trim();
            inputLine.remove();  // remove current input line

            terminal.innerHTML += `\n> ${input}\n`;
            
            if (commands[input]){
                if (commands[input] === "__clear__") {
                    terminal.innerHTML = '';
                } else {
                    terminal.innerHTML += `\n${commands[input]}\n`;
                }
            }
            else {
                terminal.innerHTML += `\nCommand not found: ${input}\n`;
            }
            createInputLine();  // recreate input line
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
    cmdInput.focus();
}

window.onload = () => {
    createInputLine();
};