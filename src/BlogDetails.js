import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import AxiosFetch from "./AxiosFetch";

const BlogDetails = () => {
    const {id} = useParams()
    console.log(id)
    // const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const {data:blog,error, isPending} = AxiosFetch('http://localhost:8080/user/blogs/'+id);
    const navigate = useNavigate();
  
    const handleClick = () =>{
      fetch('http://localhost:8000/blogs/'+blog.id,{
        method: 'DELETE'
      }).then(()=>{
        navigate('/');
      })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog[0].title}</h2>
                    <p>Written by { blog[0].author}</p>
                    <div>{blog[0].body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;