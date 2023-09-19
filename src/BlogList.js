import { Link } from "react-router-dom";
import DisplayDate from "./DisplayDate";
import blog1 from './assets/images/blog1.jpg';


const BlogList = ({blogs,title}) => {
    
    //limits the blog body to 2 lines to give a preview.
    const BlogBody = (body) =>{
        var letterLimit = 150;
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
                       
                        <div className="blog-content">
                            <div className="blog-preview-text">
                                <label className="author">{"@"+blog.author}</label>
                                <label > - </label>
                                <label className="created">{DisplayDate(blog.created)}</label>
                                <h2 className="title">{blog.title}</h2>
                                <p className="blog-body">{BlogBody(blog.body)} </p>
                            </div>
                            {!blog.thumbnail && <img src={blog1} alt="" className="image"/>}
                            {blog.thumbnail && <img src={blog.thumbnail} className="image"></img>}
                        </div>
                        {/* <Text numberOfLines = {1}>ojsbfs dfosjfsnf sojf apsofj  fapsjf poasfj asmf pamsfpas,f aspf apsofj as fpasjfp fsp psmfpa smap sfnfpas mf</Text> */}
                        
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;