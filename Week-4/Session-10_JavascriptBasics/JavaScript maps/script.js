/* This function calculates frequency of each word in a Sentence */
function calcWordFrequencies() {
  const input = prompt("Enter list of words separated by space");
  //   Initialise empty map to store frequency of words
  const word_freq = new Map();
  // separate words into a array by splitting at space
  const words = input.split(" ");
  for (const word of words) {
    // increase frequency of word if it is already in the map , or on first occurence set it to 1
    word_freq.set(word, (word_freq.get(word) || 0) + 1);
  }

  for (const [word, frequency] of word_freq) {
    console.log(`${word} ${frequency}`);
  }
}
