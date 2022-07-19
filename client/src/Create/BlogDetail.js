import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Fetch/usefetch";
//GET method
const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blog/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blog/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      <h1>Blog detail - {id} </h1>
      {/* && it is check True */}
      {isPending && <div>Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetail;
