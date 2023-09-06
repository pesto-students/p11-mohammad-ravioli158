import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shortenUrl } from "../store/urlSlice";
import validUrl from "valid-url";
import { formatUrl } from "../utils/urlUtils";

const UrlForm = () => {
  const dispatch = useDispatch();
  const [enteredUrl, setEnteredUrl] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formattedUrl = formatUrl(enteredUrl);
    if (validUrl.isWebUri(formattedUrl)) {
      console.log(formattedUrl);
      dispatch(shortenUrl(formattedUrl));
    } else {
      console.log("not valid url");
    }
  };
  return (
    <form
      className="flex items-center flex-wrap space-y-4 shadow-sm"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder="Enter the URL to shorten"
        className="border rounded w-full p-4"
        value={enteredUrl}
        onChange={(event) => {
          setEnteredUrl(event.target.value);
        }}
      />

      <input
        className="bg-primary text-lg text-white p-4 rounded w-full font-bold"
        type="submit"
        value={"Shorten "}
      />
    </form>
  );
};

export default UrlForm;
