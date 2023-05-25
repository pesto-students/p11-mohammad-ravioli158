const API_ENDPOINT = "https://api.openai.com/v1/completions";
const API_KEY = "api-key-here"; // Use environment variable for API key

async function generateQuotes(topic) {
  try {
    const requestBody = {
      model: "text-davinci-003",
      prompt: `generate 5 short quotes about ${topic}`,
      temperature: 0.7,
      max_tokens: 500,
      n: 1,
    };

    const response = await fetch(API_ENDPOINT, {
      method: "post",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (response.status === 200) {
      const responseData = await response.json();
      const quotesData = responseData.choices[0].text;
      const quotesArray = convertToSentencesArray(quotesData);
      return quotesArray;
    } else {
      throw new Error("Error fetching quotes");
    }
  } catch (error) {
    // Handle error
    console.log(error);
    throw error;
  }
}

function convertToSentencesArray(quoteString) {
  const sentencesArray = quoteString.match(/\d+\.\s*"(.*?)"/g);

  if (!sentencesArray) {
    return [];
  }

  const sanitizedArray = sentencesArray.map((sentence) =>
    sentence.replace(/^\d+\.\s*"/, "").replace(/"$/, "")
  );

  return sanitizedArray;
}
