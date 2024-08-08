function render(onClick){
    const container = document.getElementById("test");
    const factDisplayGet = document.getElementById("fact-display");
    factDisplayGet.innerHTML = "";
    container.innerHTML = "";
    const contain = document.getElementById("container");
    contain.innerHTML = "";
    console.log(container, "assh");
    
    container.innerHTML = `<div class="text-center">
        <h1>Welcome To <br> RememberMe App</h1>
        <p class="lead">Keep track of your precious memories and never forget about the good times with friends.</p>
    </div>
    <div class="card mb-4">
        <div class="card-body text-center">
            <h2 class="mt-3">Get Started</h2>
            <p class="text">RememberMe App is designed to help you keep track of precious memories with friends.
                <br>Capture, store, and revisit your favorite moments anytime. Use facts and images to create a quiz to play with your friends.
                <br>With RememberMe, you can create a digital experience of your life's best times.
                Never let those special memories fade away.</p>
        </div>
    </div>
    <div class="card flip-card mb-4" id="flipCard">
        <div class="flip-card-inner">
            <div class="flip-card-back">
                <img src="image/quiz-img.png" alt="Back Image" class="img-fluid" id="quizImage">
             </div>
            <div class="card-body flip-card-front text-center"></div>
            <div class="card-body text-center">
                <h2 class="mt-3">Quizz</h2>
                <p class="lead">In the quiz, you'll see a card with no picture and some facts about a friend. <br> Guess who it is, and once you make your selection, the person's picture will be revealed!</p>
                <a target="_blank" href="#/quizz" id="quizz-href" class="btn btn-info">Start Playing</a>
            </div>
        </div>
    </div>`;


    document.addEventListener('DOMContentLoaded', (event) => {
        const flipCard = document.getElementById('flipCard');
        const flipCardInner = flipCard.querySelector('.flip-card-inner');
        const quizImage = document.getElementById('quizImage');
        

        // Initially hide the image
        quizImage.style.display = 'none';

        flipCard.addEventListener('click', () => {
            flipCardInner.classList.toggle('is-flipped');
            // Toggle the visibility of the image
            if (flipCardInner.classList.contains('is-flipped')) {
                setTimeout(() => {
                    quizImage.style.display = 'block';
                }, 300); // Wait for the flip animation to complete
            } else {
                quizImage.style.display = 'none';
            }
        });

    });

}

    export default { render };