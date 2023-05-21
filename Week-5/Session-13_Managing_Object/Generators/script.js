// yiels a symbol for each string of provided string array
function* stringToSymbols(arrStrings) {
  // loop over strings in array using for of
  for (let str of arrStrings) {
    //yield  each string on call to generator
    yield Symbol(str);
  }
}
// Example usage:
const symbolsIterator = stringToSymbols(["hello", "world", "test"]);
console.log(symbolsIterator.next().value);
console.log(symbolsIterator.next().value);
console.log(symbolsIterator.next().value);
console.log(symbolsIterator.next());
