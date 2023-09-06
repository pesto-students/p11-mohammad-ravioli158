import React from "react";
import { useSelector } from "react-redux";
import ShortLinkItem from "./ShortLinkItem";
const URLList = () => {
  const shortUrls = useSelector((state) => state.urls.urls);
  return (
    <div className="mt-4  [&>*:not(:first-child)]:my-3">
      {shortUrls.map((shortUrl, index) => (
      <ShortLinkItem key={shortUrl.code} shortUrl={shortUrl} />
      ))}
    </div>
  );
};

export default URLList;
