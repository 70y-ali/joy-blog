/* eslint-disable */
import { computeHeadingLevel } from "@testing-library/react";
import { useState, useEffect } from "react";
import Bloglist from "../Create/Bloglist";
import useFetch from "../Fetch/usefetch";

const Home = () => {
  // data: blogs is meaning call it blog in this context
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blog");
  // const [blog, setBlog] = useState([
  //     {title: 'a', body: 'a', author:'mario', id:'1'},
  //     {title: 'a', body: 'a', author:'a', id:'2'},
  //     {title: 'a', body: 'a', author:'a', id:'3'}
  // ])

  // const [name, setName] = useState('mario')

  // const handleDelete = (id) => {
  //     const newBlogs = blog.filter(b => b.id !== id);
  //     setBlog(newBlogs)
  // }
  // useEffect(() => {
  //     console.log('use effect running...')
  //     console.log(name)
  // }, [name])
  // const [blogs, setBlogs] = useState(null)
  // const [isPending, setIsPending] = useState(true)
  // const [error, setError] = useState(null)

  //  useEffect(() => {
  //     setTimeout(() => {
  //         fetch('http://localhost:8000/blog')
  //         .then(res => {
  //             console.log('res=>', res)
  //             if(!res.ok){
  //                 throw Error('could not fetch the data for that resource')
  //             }
  //             return res.json()
  //         })
  //         .then(data => {
  //             setBlogs(data)
  //             setIsPending(false)
  //             setError(null)
  //         })
  //         .catch(err => {
  //             setError(err.message)
  //         })
  //     }, 1000)
  //  }, [])
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading ... </div>}
      {blog && <Bloglist blog={blog} title="All blog!" />}{" "}
      {/*handleDelete={handleDelete}*/}
      {/* <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p> */}
      {/* <Bloglist blog={blog.filter((b) => b.author === 'mario' )} title="Mario's blog!"/> */}
      {/* {blog.map((b) => (
                <div className="blog-preview" key={b.id}>
                    <h2>{b.title}</h2>
                    <p>Written by {b.author}</p>
                </div>
            ))}
            {/* <p>{name} is {age} yearsold </p>
            <button onClick={handleClick}>Click me</button> */}
      {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
    </div>
  );
};
export default Home;
