/* eslint-disable */
import { Link } from "react-router-dom";

const Bloglist = ({ blog, title }) => {
  //handleDelete
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <div>
        {blog.map((b) => (
          <div className="blog-preview" key={b.id}>
            {/* `` is template string */}
            <Link to={`/blogs/${b.id}`}>
              <h2>{b.title}</h2>
              <p>Written by {b.author}</p>
              {/* <button onClick={() => handleDelete(b.id)}>Delete blog</button> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bloglist;
