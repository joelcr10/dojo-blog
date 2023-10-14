import AxiosFetch from "./AxiosFetch";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import rec from "./assets/images/recommended.jpeg";


const Home = () => {
    // const {data: blogs, isPending, error} = useFetch( 'http://localhost:8000/blogs');
    const {data: blogs, isPending, error} = AxiosFetch( 'https://dojoblog-backend.onrender.com/user/blogs');

    return ( 
        <div className="home">
            
             {error && <div>{error}</div>}
             {isPending && <div className="loading"></div>}  {/**Displays the loading sign before the data is loaded */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}            
            <div className="home-right">
                <div className="home-right-image-container">
                    <div className="image-overlay"></div>
                    <img src={rec} alt="" />
                    <label>5 tips to start wildlife photography and start earning</label>
                    
                </div>
                <div className="rec-topics">
                    <h1>recommended topics</h1>
                    <div className="topics">
                        <label>Machine Learning</label>
                        <label>Writing</label>
                        <label>Art</label>
                        <label>Photoshop</label>
                        <label>Tech</label>
                        <label>Programming</label>
                        <label>Read</label>
                        <label>Data Science</label>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
  
export default Home;