import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import AxiosFetch from "./AxiosFetch";
import axios from "axios";

const BlogDetails = () => {
    const {id} = useParams()
    console.log(id)
    // const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const {data:blog,error, isPending} = AxiosFetch('http://localhost:8080/user/blogs/'+id);
    const navigate = useNavigate();
  
    const handleClick = async () =>{
      axios.delete('http://localhost:8080/user/blogs/'+id).then(function(response){
        console.log(response);
        navigate('/');
    }).catch((error)=>{
        console.log(error.response.data);
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