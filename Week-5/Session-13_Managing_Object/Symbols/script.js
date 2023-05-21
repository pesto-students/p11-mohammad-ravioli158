// generateTranscationId creates a new transaction id using symbols and they are unique.
// function uses generator to generate a new and unique id.

const generateTranscationId = (function () {
  //IIFE preserves the idCounter and Symbol generates unique id at each call to inner fuction
  let idCounter = 1;
  return () => Symbol(`TRANSACTION_ID_${idCounter++}`);
})();
console.log(generateTranscationId);
const transactionId1 = generateTranscationId();
console.log(transactionId1);
const transactionId2 = generateTranscationId();
console.log(transactionId2);
