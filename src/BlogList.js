import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
 //remove this to get the actual data in home page
    const DisplayDate = (date) =>{
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        let dateOnly = date?.slice(0,10);
        const month = date?.slice(3,5);
        const newDate = date.slice(0,2)+" "+months[parseInt(month)-1]+" "+date.slice(6);
        return newDate;
    }
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blog/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <p>{DisplayDate(blog.created)}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;