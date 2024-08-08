function render(vimtages) {

    const container = document.getElementById("container");
    const contain = document.getElementById("test");
    const factDisplayGet = document.getElementById("fact-display");
    factDisplayGet.innerHTML = "";
    container.innerHTML = "";
    contain.innerHTML = "";
    const factDisplay = $("#fact-display");

    const randomButton = `<h1>Letzzzz Play</h1>
    <h3 id="fact-display">Click here for a random fact!</h3>
    <button id="new-fact-button">Random Fact</button>
    <h2 id = "clearButton"></h2>
    <div id="image-display"></div>
    <div id="message-display"></div>
    `;

    $(randomButton).appendTo(factDisplay);

    const button = document.getElementById("new-fact-button");

    const personButtonsHTML = vimtages.map(vimt => `
        <button class="person-button" data-name="${vimt.name}">${vimt.name}</button>`).join(' ');
    contain.innerHTML = personButtonsHTML;

    let randomName = '';


    button.addEventListener('click', () => {

        const randomIndex = Math.floor(Math.random() * vimtages.length);
        const randomPerson = vimtages[randomIndex];
        const randomFact = vimtages[randomIndex].fact;
        randomName = randomPerson.name;

        document.getElementById("clearButton").innerHTML = ` ${randomFact}`;
        document.getElementById("image-display").innerHTML = '';
        document.getElementById("message-display").innerHTML = '';

        document.querySelectorAll('.person-button').forEach(btn => {
            btn.classList.remove('highlight');
            if (btn.dataset.name === randomName) {
                btn.classList.add('highlight');
            }
        });

    });

    document.querySelectorAll('.person-button').forEach(button => {
        button.addEventListener('click', () => {
            const personName = button.dataset.name;
            const person = vimtages.find(v => v.name === personName);
            
            if (person) {
                const factDisplay = document.getElementById("clearButton");
                const imageDisplay = document.getElementById("image-display");
                const messageDisplay = document.getElementById("message-display");

                if (personName === randomName) {
                    factDisplay.innerHTML = `Correct! Fact for ${personName}: ${person.fact}`;
                    imageDisplay.innerHTML = `<img src="${person.image}" alt="${personName}" class="img-fluid" />`;
                    messageDisplay.innerHTML = ''; // Clear previous message
                } else {
                    factDisplay.innerHTML = `Ops that's not me, try again.`;
                    imageDisplay.innerHTML = ''; // Clear previous image
                }
            }
        });
    });

    
}

export default { render };