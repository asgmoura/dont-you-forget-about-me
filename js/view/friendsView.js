function render(vimtages) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    const contain = document.getElementById("test");
    contain.innerHTML = "";
    const factDisplayGet = document.getElementById("fact-display");
    factDisplayGet.innerHTML = "";
    


    const title = '<h1>THE VIMTAGES</h1>';

    if (!container) {
        console.error('Container element not found');
        return;
    }

    container.innerHTML = title; // Adiciona o título ao container

    vimtages.forEach(vimt => {
        const vimtCard = `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img src="${vimt.image || 'images/hooded-man.jpg'}" class="card-img-top" alt="${vimt.name}">
                    <div class="card-body">
                        <h5 class="card-title">${vimt.name}</h5>
                        <p class="card-text">${vimt.fact}</p>
                    </div>
                </div>
            </div>
        `;
        
        const card = document.createElement("div");
        card.innerHTML = vimtCard;
        container.appendChild(card.firstElementChild);
    });
}

export default { render };