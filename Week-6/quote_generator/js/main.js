const memoizedGenerateQuotes = memoize(generateQuotes);
document.addEventListener("DOMContentLoaded", function () {
  const quoteForm = document.getElementById("topic-form");
  const topicInput = quoteForm["quote-topic"];

  quoteForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const topic = topicInput.value;

    if (topic !== "") {
      clearQuotesList();
      const quotes = await memoizedGenerateQuotes(topic);
      addQuotes(quotes, topic);
    }
  });
});

//Memoization
function memoize(f) {
  const cache = new Map(); //value cache stored in closure
  return function (...args) {
    let key = args.length + args.join("+");

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);

      return result;
    }
  };
}
