const getGreetingMessage = require("./greetings");
const fs = require("fs");
// Use readline module to get username
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user
rl.question("Please enter the name: ", (name) => {
  // Generate greeting
  const greeting = getGreetingMessage(name);
  // Write the greeting message
  writeToFile("output.txt", greeting, () => {
    rl.close();
  });
});

// Use fs module to write greeting to output.txt
function writeToFile(message, fileName, onWrite) {
  fs.writeFile(message, fileName, (err) => {
    if (err) {
      console.error("Error writing to ", fileName, err);
    } else {
      console.info("Greeting saved to ", fileName);
    }
    onWrite();
  });
}
