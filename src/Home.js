import AxiosFetch from "./AxiosFetch";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    // const {data: blogs, isPending, error} = useFetch( 'http://localhost:8000/blogs');
    const {data: blogs, isPending, error} = AxiosFetch( 'http://localhost:8080/user/blogs');

    return ( 
        <div className="home">
             {error && <div>{error}</div>}
             {isPending && <div>Loading........</div>}  {/**Displays the loading sign before the data is loaded */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}            
        </div>
     );
}
  
export default Home;