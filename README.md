# React-hangman

Hangman is a classic word-guessing game where one player thinks of a word and the other player tries to guess it by suggesting letters within a certain number of guesses.Created using Typescript and React js

## Description:

The Hangman game implemented in React and TypeScript offers a modern and interactive user experience. The game consists of a user interface where players can interact with the game elements to guess the hidden word. Here's an overview of the main components and features:

### Game Interface: 
The game interface provides a clear and intuitive layout for players to interact with. It typically includes elements such as the display of the hidden word with blanks for each letter, a section to display incorrect guesses, a visual representation of the hangman figure, and an input field to submit letter guesses.

### Word Selection: 
At the beginning of each game session, a word is randomly selected from a predefined list or generated from a chosen category. This word remains hidden from the player attempting to guess it.

### Visual Representation of Hangman: 
As the player makes incorrect guesses, a visual representation of the hangman figure gradually appears. This visual cue helps to indicate the number of incorrect guesses remaining before the game ends.

### Input Field for Letter Guesses:
Players can input their guesses by typing letters into an input field and submitting them. The game validates the input to ensure it is a single letter and has not been guessed before.

### Feedback on Guesses:
After each guess, the game provides feedback to the player indicating whether the guessed letter is correct or incorrect. If correct, the corresponding blanks in the hidden word are filled, revealing the position(s) of the guessed letter. If incorrect, the guessed letter is added to the list of incorrect guesses, and the hangman figure progresses.

### Game End Conditions: 
The game ends when either the player successfully guesses the entire word or the hangman figure is completed (indicating too many incorrect guesses). In either case, the game displays the outcome and allows the player to start a new game.

