import axios from "axios";
import { useState } from "react";

const useApi = () => {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  // State for recommendations
  const [recommendations, setRecommendations] = useState([]);
  // State for wishlist items
  const [wishlisted, setWishlisted] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(false);

  /**
   * Function to fetch recommendations from OpenAI's GPT-3.5 model
   * @param {number} age
   * @param {string} gender
   * @param {string} interests
   */
  const fetchRecommendations = async (age, gender, interests) => {
    // Set loading to true to indicate that a request is in progress
    setLoading(true);

    // Request headers including API key
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    // Data object containing the model and user message
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Give me 5 ideas for ${age} year old ${gender} who likes ${interests}`,
        },
      ],
    };

    try {
      // Send a POST request to the OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        data,
        { headers }
      );

      // Set loading to false once the response is received
      setLoading(false);
      console.log("got responise", response);
      // Process the response and extract recommendations
      const result = response.data.choices[0].message.content
        .split(/\d+\.\s+/) // Split the content into sentences
        .filter((sentence) => sentence.trim() !== "") // Remove empty sentences
        .map((sentence) => {
          const [name, description] = sentence.split(":"); // Split sentence into name and description
          return { name, description };
        });

      // Update the recommendations state with the parsed data
      console.log("got recommendatoins", result);
      setRecommendations(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  /**
   * Function to add an item to the wishlist
   * @param {string} name name of the recommended gift
   * @param {string} description name of the recommended gift
   */
  const addToWishlist = (name, description) => {
    const isAlreadyWishlisted = wishlisted.some((gift) => gift.name === name);
    if (!isAlreadyWishlisted)
      setWishlisted((prevState) => [...prevState, { name, description }]);
  };

  /**
   * Function to remove an item from the wishlist
   * @param {string} name : name of the recommended gift
   */
  const removeFromWishlist = (name) => {
    setWishlisted((prevState) =>
      prevState.filter((gift) => gift.name !== name)
    );
  };

  return {
    recommendations,
    wishlisted,
    loading,
    fetchRecommendations,
    addToWishlist,
    removeFromWishlist,
  };
};

export default useApi;
