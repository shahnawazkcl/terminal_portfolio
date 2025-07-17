const terminal = document.getElementById('terminal');
const cmdInput = document.getElementById('cmd');

const commands = {
    help: "Available commands: help, about, projects, contact",
    about: "I'm Shahnawaz, a am a computational biologist with a passion for coding.",
    projects: "Check out my projects on GitHub:https://github.com/shahnawazkcl",
    contact: "You can reach me at twitter: @shahnawaz_mbd or email:saalis.uk@gmail.com or LinkedIn: https://www.linkedin.com/in/shahnawaz-ali-jmi/",
    clear: "__clear__",    
};

cmdInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = cmdInput.value.trim();
        terminal.innerHTML += `\n> ${input}\n`;
        
        if (commands[input]){
            if (commands[input] === "__clear__") {
                terminal.innerHTML = '';
            } else {
                terminal.innerHTML += `\n${commands[input]}\n`;
            }
        }
        else {
            terminal.innerHTML += `\nCommand not found: ${cmd}\n`;
        }
        cmdInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});