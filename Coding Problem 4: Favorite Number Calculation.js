
// Declare the favorite number
let favNumber = 7; // You can change this to any number

// Start the guessing loop
let guess;
while (true) {
  guess = parseInt(prompt("Guess my favorite number:"));

  if (guess === favNumber) {
    console.log("You guessed it! My favorite number is " + favNumber);
    break; // Exit the loop if the guess is correct
  } else if (guess > favNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("Too low! Try again.");
  }
}
 
