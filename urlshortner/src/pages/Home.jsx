import React from "react";
import URLList from "../components/UrlList";
import UrlForm from "../components/UrlForm";

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4 text-center md:max-w-md lg:max-w-lg">
      <h1 className="text-4xl font-bold text-secondary p-4">URL Shortner</h1>
      <p className="px-2 py-4">
        World's Shortest Link Shortener service to track, brand, and share short
        URLs.
      </p>
      <UrlForm />
      <URLList />
    </div>
  );
};

export default Home;
