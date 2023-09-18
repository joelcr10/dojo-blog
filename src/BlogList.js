import { Link } from "react-router-dom";
import DisplayDate from "./DisplayDate";


const BlogList = ({blogs,title}) => {
    
    //limits the blog body to 2 lines to give a preview.
    const BlogBody = (body) =>{
        var letterLimit = 130;
        if(body.length<=letterLimit){
            return body;
        }

        var i = letterLimit;
        while(body[i]!=" "){
            i++;
        }

        var newBody = body.slice(0,i)+"...";
        return newBody;

    }
    return ( 
        <div className="blog-list">
            
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blog/${blog._id}`} state={blog}>
                        <label className="author">{blog.author}</label>
                        <label > - </label>
                        <label className="created">{DisplayDate(blog.created)}</label>
                        <h2 className="title">{blog.title}</h2>
                        <p className="blog-body">{BlogBody(blog.body)} </p>
                        {/* <Text numberOfLines = {1}>ojsbfs dfosjfsnf sojf apsofj  fapsjf poasfj asmf pamsfpas,f aspf apsofj as fpasjfp fsp psmfpa smap sfnfpas mf</Text> */}
                        
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;