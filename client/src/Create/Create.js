import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () =>{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] =useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        fetch('http://localhost:8000/blog/', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('added');
            setIsPending(false);
            history.push('/');
        })
    }

    return(
        <div className="create">
            <h1>Add new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                <label>Blog body</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='mario'>mario</option>
                    <option value='lulili'>lulili</option>
                    <option value='john'>john</option>
                </select>
                { !isPending && <button>Add blog</button>}
                { isPending && <button disabled >Add bloging ... </button>}
            </form>
        </div>
    )
}
export default Create