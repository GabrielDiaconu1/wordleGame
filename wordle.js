// This is a javascript file.The functionality of the webpage is achieved through several functions. The checkWord() function checks if the word typed by the user matches the target word and updates the score accordingly. The generateNewWord() function generates a new target word from the list of fruits and updates the hint and target display areas. The clearColors() function removes any color classes from the letter buttons when generating a new word.
// The program listens for user input on the letter buttons and the backspace button, and updates the word being typed in the display area accordingly. When the user clicks the submit button, the program calls the checkWord() function to check if the word matches the target word, updates the score, and generates a new target word using the generateNewWord() function.
// Gabriel Diaconu 2023

/**

Represents a section of code that allows the user to input letters to form a word.
@type {string} word - the current word being formed by the user
@type {NodeList} buttons - a collection of all elements with class name "letter"
@type {Element} wordDiv - the element that displays the current word being formed
@function handleClick - a function that handles click events on the letter buttons
*/
let word = '';

const buttons = document.querySelectorAll('.letter');
const wordDiv = document.getElementById('word');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.innerHTML;
    word += letter;
    wordDiv.innerHTML = word;
  });
});
/**

Finds the backspace button element and adds a click event listener to it.
Removes the last character from the 'word' variable and updates the HTML display.
@param {string} word - A string representing the current word being typed.
@param {HTMLElement} wordDiv - An HTML element used to display the current word being typed.
@param {HTMLElement} backspaceButton - An HTML element used to delete the last character typed.
*/
const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
  word = word.slice(0, -1);
  wordDiv.innerHTML = word;
});
/**

An array of words that will be used as the target word for the game.
@type {string[]}
*/
const words = ['APPLE', 'BANANA', 'ORANGE', 'PINEAPPLE', 'GRAPEFRUIT', 'MANGO', 'PEACH', 'PEAR', 'PLUM', 'KIWI', 'WATERMELON', 'CANTALOUPE', 'BLUEBERRY', 'RASPBERRY', 'BLACKBERRY', 'STRAWBERRY', 'CHERRY', 'LEMON', 'LIME', 'GRAPES'];
/**

The target word randomly selected from the words array.
@type {string}
*/
let targetWord = words[Math.floor(Math.random() * words.length)];
/**

The HTML element that displays the target word.
@type {HTMLElement}
*/
const targetDiv = document.getElementById('target');
/**

The HTML element that displays the player's score.
@type {HTMLElement}
*/
const targetDiv2 = document.getElementById('target2');
targetDiv.innerHTML = `Type the word: `;
targetDiv.innerHTML = `Hint: Types of fruit`;
let count = 0;
/**

The function that checks if the player's word matches the target word and updates the score if it does.
*/
const checkWord = () => {
  if (word === targetWord) {
    targetDiv.style.color = 'green';
    count += 1;

    targetDiv2.innerHTML = 'Points: ' + count;
    targetDiv2.style.color = 'green';
  } else {
    targetDiv.style.color = 'red';
  }
};

/**

Represents a collection of letter buttons and a function to clear their colors.
@type {NodeList} letterButtons - A collection of letter buttons.
@function clearColors - A function that removes the 'btn-success' and 'btn-danger' classes from each button in letterButtons.
*/
const letterButtons = document.querySelectorAll('.letter');
const clearColors = () => {
  letterButtons.forEach(button => {
    button.classList.remove('btn-success', 'btn-danger');
  });
};
/**

Adds event listener to each button with class 'letter', and adds a success or danger class to the button depending on whether the letter it represents is present in both the current word and the target word.
@param {NodeList} letterButtons - A list of DOM elements representing the letter buttons.
@param {string} word - The current word being typed by the user.
@param {string} targetWord - The word that the user is trying to guess.
*/
letterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.textContent;
    if (word.includes(letter) && targetWord.includes(letter)) {
      button.classList.add('btn-success'); // add success class if letter is in word and in targetWord
    } else {
      button.classList.add('btn-danger'); // add danger class if letter is not in word or not in targetWord
    }
  });
});
/**

Generates a new word from the 'words' array and updates the target word and targetDiv content
@function
@returns {void}
*/
const generateNewWord = () => {
  targetWord = words[Math.floor(Math.random() * words.length)];
  targetDiv.innerHTML = `Type the word: `;
  targetDiv.innerHTML = `Hint: Types of fruit`;
  clearColors(); // clear colors after generating new word
};
/**

This section adds a click event listener to the submit button, which calls the checkWord function to check if the user's input word matches the target word, clears the input word, clears the colors of the letter buttons, generates a new target word, and updates the target word display with a new hint.
@function
@name submitButtonEventListener
@param {Event} event - The event object generated by the user clicking the submit button.
@returns {undefined}
*/
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  checkWord();
  word = '';
  wordDiv.innerHTML = '';
  generateNewWord(); // use generateNewWord function to generate new word
});
