import { useState, useEffect } from "react";

const useBlog = () => {
  const [nrbBlogs, setNrbBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogFile.json")
      .then((res) => res.json())
      .then((data) => setNrbBlogs(data));
  }, []);
  return { nrbBlogs, setNrbBlogs };
};

export default useBlog;
