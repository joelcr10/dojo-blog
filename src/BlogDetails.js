import { useNavigate, useParams, useLocation } from "react-router-dom";
import useFetch from "./useFetch";
import AxiosFetch from "./AxiosFetch";
import axios from "axios";
import DisplayDate from "./DisplayDate";


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
    // function replaceWithBr() {
    //   return haiku.replace(/\n/g, "<br />")
    // }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="title">{blog[0].title}</h2>
                    <p className="author">{ blog[0].author}</p>
                    <p className="created">{DisplayDate(blog[0].created)}</p>
                    <p className="blog-body">{blog[0].body}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;