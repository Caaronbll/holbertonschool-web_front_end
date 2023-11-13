function changeMode(size = Number, weight = String, transform = String, background = String, color = String) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color
    };
};

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    let spookyButton = document.createElement('button');
    let darkModeButton = document.createElement('button');
    let screamModeButton = document.createElement('button');

    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    spookyButton.textContent = 'Dark Mode';
    spookyButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    spookyButton.textContent = 'Scream Mode';
    spookyButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
};

main();