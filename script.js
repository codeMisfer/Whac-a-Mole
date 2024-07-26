document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('gameBoard');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const startButton = document.getElementById('startButton');

    // Game state variables
    let score = 0;
    let timeLeft = 30;
    let gameInterval, moleInterval, snakeInterval;
    let snakeClicked = false; // Flag to check if a snake was clicked during the game

    // Function to create blocks on the game board
    function createBlocks() {
        for (let i = 0; i < 12; i++) {
            const block = document.createElement('div');
            block.classList.add('block'); 
            block.dataset.status = 'empty'; // Initially set the status to 'empty'
            block.dataset.id = i; // Assign an ID to each block for reference
            gameBoard.appendChild(block); // Add the block to the game board
        }
    }

    // Function to add moles to the game board
    function addMole() {
        const emptyBlocks = [...document.querySelectorAll('.block[data-status="empty"]')];
        if (emptyBlocks.length > 0) {
            const index = Math.floor(Math.random() * emptyBlocks.length);
            const block = emptyBlocks[index];
            const mole = new Image();
            mole.src = 'mole.jpg'; // Path to mole image
            mole.style.width = '100%';
            mole.style.height = '100%';
            mole.style.borderRadius = '50%'; // Style to make the image round
            mole.classList.add('mole');
            mole.onclick = function () {
                this.remove(); // Remove mole on click
                block.dataset.status = 'empty';
                score++;
                scoreDisplay.textContent = score;
            };
            block.appendChild(mole);
            block.dataset.status = 'mole';
            setTimeout(() => {
                if (block.contains(mole)) {
                    mole.remove(); // Remove mole after 2 seconds if not clicked
                    block.dataset.status = 'empty';
                }
            }, 2000);
        }
    }

    // Function to add snakes to the game board
    function addSnake() {
        const emptyBlocks = [...document.querySelectorAll('.block[data-status="empty"]')];
        if (emptyBlocks.length > 0) {
            const index = Math.floor(Math.random() * emptyBlocks.length);
            const block = emptyBlocks[index];
            const snake = new Image();
            snake.src = 'snake.jpg'; // Path to snake image
            snake.style.width = '100%';
            snake.style.height = '100%';
            snake.style.borderRadius = '50%';
            snake.classList.add('snake');
            snake.onclick = function() {
                snakeClicked = true; // Set flag when snake is clicked
                gameOver(); // Trigger game over
            };
            block.appendChild(snake);
            block.dataset.status = 'snake';
            setTimeout(() => {
                if (block.contains(snake)) {
                    snake.remove(); // Remove snake after 2 seconds if not clicked
                    block.dataset.status = 'empty';
                }
            }, 2000);
        }
    }

    // Function to handle game over conditions
    function gameOver() {
        clearInterval(gameInterval); // Stop the game timer
        clearInterval(moleInterval); // Stop mole generation
        clearInterval(snakeInterval); // Stop snake generation
        timeLeftDisplay.textContent = "Game Over"; 

        // If a snake was clicked, fill all blocks with snakes
        if (snakeClicked) {
            document.querySelectorAll('.block').forEach(block => {
                if (block.firstChild) {
                    block.firstChild.remove(); // Remove any existing moles or snakes
                }
                const snake = new Image();
                snake.src = 'snake.jpg';
                snake.style.width = '100%';
                snake.style.height = '100%';
                snake.style.borderRadius = '50%';
                block.appendChild(snake);
                block.dataset.status = 'snake';
            });
        }
    }
    
    // Function to start or restart the game
    function startGame() {
        clearInterval(gameInterval); 
        clearInterval(moleInterval);
        clearInterval(snakeInterval);
        gameBoard.innerHTML = ''; // Clear the game board
        createBlocks(); // Re-create blocks for a new game
        score = 0;
        scoreDisplay.textContent = score; // Update score display
        timeLeft = 30; // Reset timer
        timeLeftDisplay.textContent = timeLeft;
        snakeClicked = false; // Reset snake click flag
        gameInterval = setInterval(() => { // Set up game timer
            if (timeLeft <= 0 && !snakeClicked) {
                clearInterval(gameInterval); // Clear intervals if time runs out without snake click
                clearInterval(moleInterval);
                clearInterval(snakeInterval);
                timeLeftDisplay.textContent = "Time Over"; // Display 'Time Over' instead of 'Game Over'
                alert("Time is Over!");
            }
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        }, 1000);
        moleInterval = setInterval(addMole, 1000); // Interval for adding moles
        snakeInterval = setInterval(addSnake, 2000); // Interval for adding snakes
    }

    startButton.addEventListener('click', startGame); // Set up the start button to initiate the game
});
