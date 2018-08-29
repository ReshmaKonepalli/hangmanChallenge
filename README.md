# Hangman Challenge

This application is a Hangman Game Challenge developed as a web project using AngularJS and NodeJS. 

## Getting Started

Below are the instructions that will get you a copy of the project up and running on your local machine for
development and testing purposes. See notes below on how to get the project on a local system.

### Prerequisites

* AngularJS
* NodeJS 
* Any IDE or Editor (above project was developed using webstorm) 

### Rules of the Game

* When the game is started, the player is represented with an empty field for
each letter in the word.
* When the player guesses a letter correctly, each field that represents that
letter is filled with the letter.
* When the player guesses a letter incorrectly, a piece of a gallows with a
hanging man is drawn.
* After 10 incorrect guesses, the game is over and the player lost.
* Thus, there should be 10 different states of the gallows to be drawn.
* If all fields are filled with their letter before 10 incorrect guesses, the player
has won the game.

### Installation

* Git Clone the required repository.
* Import existing code source from Github/folder.
* Open the project in any IDE or Editor.
* Run the project with the following command: nodemon hangmanChallenge\bin\setup.js
* Enjoy playing the game. 

