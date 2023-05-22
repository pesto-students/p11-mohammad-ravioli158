document.addEventListener("DOMContentLoaded", function () {
  const quoteForm = document.getElementById("topic-form");
  const topicInput = quoteForm["quote-topic"];

  quoteForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const topic = topicInput.value;

    if (topic !== "") {
      clearQuotesList();
      const quotes = await generateQuotes(topic);
      addQuotes(quotes, topic);
    }
  });
});
