import { useEffect } from "react";
import useFetch from "./useFetch";
import axios from "axios";
import AxiosFetch from "./AxiosFetch";

const id = '650162573a49381f3a261251';
const User = () => {
    // const {data: user, isPending, error} = useFetch('http://localhost:8000/user'); //http://localhost:8000/user
    const {data: user, isPending, error} = AxiosFetch('http://localhost:8080/user/profile/'+id);
    useEffect(()=>{
        console.log('inside user:',user);
        
    },[])
    
    return (    
        <div>
            this is the user's page <br />
            {isPending && <div className="loading"></div>}
            {error && <div>{error}</div>}
            {user && (
                <section>
                    <label>Name: { user[0].name }</label>
                    <br />
                    <label>Email: { user[0].email }</label>
                    <br />
                    <label>Username: { user[0].username}</label>
                    <br />
                    <label>Date Joined: { user[0].dateRegistered}</label>
                </section>
            )}
        </div>
     );
}
 
export default User;