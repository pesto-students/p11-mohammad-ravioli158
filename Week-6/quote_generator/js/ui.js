function clearQuotesList() {
  const quotesList = document.getElementById("quotes-list");
  if (quotesList) {
    quotesList.innerHTML = "";
  }
}

function addQuotes(quotes, topic) {
  const quotesList = document.getElementById("quotes-list");
  const quoteTitle = document.getElementById("quotes-title");

  if (quotesList) {
    const htmlString = quotes.reduce(
      (accumulator, quote) => accumulator + `<li>${quote}</li>`,
      ""
    );
    quoteTitle.innerHTML = `5 Quotes on ${topic}`;
    quotesList.innerHTML = htmlString;
  }
}
