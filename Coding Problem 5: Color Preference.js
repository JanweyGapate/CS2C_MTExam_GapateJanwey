
// Create an empty array to store colors
let favoriteColors = [];

// Collect three color preferences from the user
for (let i = 0; i < 3; i++) {
  let color = prompt(`Enter your favorite color #${i + 1}:`);
  favoriteColors.push(color);
}

// Display the collected colors
console.log("Your favorite colors are:", favoriteColors);
 
