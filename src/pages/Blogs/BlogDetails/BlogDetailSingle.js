import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailsCard from "../../../component/Blogs/BlogDetails/BlogDetailsCard";
import useDataContexts from "../../../hooks/useDataContexts";

const BlogDetailSingle = () => {
  const { id } = useParams();
  // console.log(id);

  const { nrbBlogs } = useDataContexts();
  // console.log("nrb", nrbBlogs);

  const singleBlog = nrbBlogs?.find((blog) => blog.id === id);
  // console.log("Blog-matched", singleBlog);

  return (
    <div>
      <BlogDetailsCard singleBlog={singleBlog} />
    </div>
  );
};

export default BlogDetailSingle;
