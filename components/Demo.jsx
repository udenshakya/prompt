"use client";

import { useState, useEffect } from "react";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {

    
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({...article,url:e.target.value})}
            required
            className="search_input peer"
          />
          <button type="submit" className="submit_btn">
            =
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
