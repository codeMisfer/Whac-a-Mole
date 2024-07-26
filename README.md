Whac-a-Mole Game

Overview

The Whac-a-Mole game is an interactive web-based application that mimics the classic arcade game where players must "whac" moles that appear at random positions at random intervals. This implementation of the game adds a unique twist with the inclusion of a "snake" character that introduces additional gameplay mechanics and challenges.

Features

Dynamic Mole Appearance: Moles pop up randomly on the game board in one of 12 blocks. Each mole stays visible for 2 seconds before disappearing, challenging players to react quickly.
Snake Mechanic: Alongside moles, a snake randomly appears in any of the empty blocks every 2 seconds. If the snake is clicked, it triggers an immediate game over sequence, filling all blocks with snakes.
Scoring System: Players earn points by successfully clicking on moles. Each mole clicked increases the score by one.
Timer: The game is time-bound with a 30-second countdown. Players need to score as much as possible before the time runs out.
Game Over Handling: The game can end in two ways:
If a snake is clicked, the game ends immediately, and all blocks are filled with snake images.
If the timer runs out without the snake being clicked, the game ends and displays "Time is Over!" without filling the blocks with snakes.
How to Start the Game
To start playing the game, simply load the game page and click on the "Start Game!" button. The moles and snakes will begin to appear, and you can start clicking to increase your score.

Technical Details

The game is built using HTML, CSS, and JavaScript. It utilizes plain JavaScript for DOM manipulation and event handling without relying on external libraries, making it lightweight and easy to host on any static file server.

HTML: Structures the game board and UI components.
CSS: Provides styling for the game elements to enhance visual appeal and user interaction.
JavaScript: Powers the game logic, including the random appearance of game characters, score tracking, and timer management.
