
// Create an empty object to store the user profile
let userProfile = {};

// Collect user information
userProfile.fullName = prompt("Gapate Janwey M:");
userProfile.age = parseInt(prompt("19:"));
userProfile.favoriteNumber = parseInt(prompt("22:"));
userProfile.favoriteColors = [brown];

// Collect favorite colors
for (let i = 0; i < 3; i++) {
  let color = prompt(`Enter your favorite color #${i + 1}:`);
  userProfile.favoriteColors.push(color);
}

// Log the entire userProfile object to the console
console.log(userProfile);
