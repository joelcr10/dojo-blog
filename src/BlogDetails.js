import { useNavigate, useParams, useLocation } from "react-router-dom";
import useFetch from "./useFetch";
import AxiosFetch from "./AxiosFetch";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import blog1 from "./assets/images/blog1.jpg"
import profile from "./assets/images/profile.jpg";


const BlogDetails = () => {
    const {id} = useParams()
    console.log(id)
    // const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const {data:blog,error, isPending} = AxiosFetch('https://dojoblog-backend.onrender.com/user/blogs/'+id);
    const navigate = useNavigate();
  
    const handleClick = async () =>{
      axios.delete('https://dojoblog-backend.onrender.com/user/blogs/'+id).then(function(response){
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
            {isPending && <div className="loading"></div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="title">{blog[0].title}</h2>
                    <div className="author-info">
                        <img src={profile} alt="no working" className="image" />
                        <div className="user-date">
                            <p className="author">{"@"+blog[0].author}</p>
                            <p className="created">{DisplayDate(blog[0].created)}</p>
                        </div>
                        
                    </div>
                    {!blog[0].thumbnail && <img src={blog1} alt={blog[0].title} className="image" />}
                    {blog[0].thumbnail && <img src={blog[0].thumbnail} className="image"></img>}
                    <p className="blog-body">{blog[0].body}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;