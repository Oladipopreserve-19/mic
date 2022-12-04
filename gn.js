function gn() {
    var element = document.getElementById("gn");
    element.classList.toggle("dark");

    if (annyang) {
        // Let's define a command.
        const commands = {
            'about': () => { window.location.href = "#about"; }
        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start();
    }
    if (annyang) {
        // Let's define a command.
        const home = {
            'home': () => { window.location.href = "index.html"; }
        };

        // Add our commands to annyang
        annyang.addCommands(home);

        // Start listening.
        annyang.start();
    }
    if (annyang) {
        // Let's define a command.
        const hero = {
            'hero': () => { window.location.href = "#hero"; }
        };

        // Add our commands to annyang
        annyang.addCommands(hero);

        // Start listening.
        annyang.start();
    }
    if (annyang) {
        // Let's define a command.
        const service = {
            'service': () => { window.location.href = "#services"; }
        };

        // Add our commands to annyang
        annyang.addCommands(service);

        // Start listening.
        annyang.start();
    }
    if (annyang) {
        // Let's define a command.
        const projects = {
            'projects': () => { window.location.href = "#works"; }
        };

        // Add our commands to annyang
        annyang.addCommands(projects);

        // Start listening.
        annyang.start();
    }
    if (annyang) {
        // Let's define a command.
        const projects = {
            'works': () => { window.location.href = "#portfolio"; }
        };

        // Add our commands to annyang
        annyang.addCommands(projects);

        // Start listening.
        annyang.start();
    }
}
if (annyang) {
    // Let's define a command.
    const test = {
        'testimonies': () => { window.location.href = "#testimonials"; }
    };

    // Add our commands to annyang
    annyang.addCommands(test);

    // Start listening.
    annyang.start();
}
if (annyang) {
    // Let's define a command.
    const contact = {
        'contact': () => { window.location.href = "#contact"; }
    };

    // Add our commands to annyang
    annyang.addCommands(contact);

    // Start listening.
    annyang.start();
}