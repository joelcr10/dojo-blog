import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [isPending,setIsPending] = useState(true);

    const [error,setError] = useState(null);


    useEffect(()=>{
        fetch('http://localhost:8000/blogs').
            then(res => { 
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                } 
                return res.json();
            }).then(data => {
                console.log(data);
                setBlogs(data)
                setIsPending(false);
                setError(null);  //for removing the  loading sign
            }).catch(err=>{
                setIsPending(false);
                setError(err.message);
            });
    },[]);  //empty dependency array prevents the useEffect from running for every change
    
    return ( 
        <div className="home">
             {error && <div>{error}</div>}
             {isPending && <div>Loading........</div>}  {/**Displays the loading sign before the data is loaded */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}            
        </div>
     );
}
  
export default Home;