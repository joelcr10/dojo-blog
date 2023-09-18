import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
 //remove this to get the actual data in home page
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blog/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <label>{ blog._id }</label>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;