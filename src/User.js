import { useEffect } from "react";
import useFetch from "./useFetch";
import axios from "axios";
import AxiosFetch from "./AxiosFetch";


const User = () => {
    // const {data: user, isPending, error} = useFetch('http://localhost:8000/user'); //http://localhost:8000/user
    const {data: user, isPending, error} = AxiosFetch('http://localhost:8080/user/profile');
    useEffect(()=>{
        console.log('inside user:',user);
        
    },[])
    const username = "joelcr10"
    return ( 
        <div>
            this is the user's page <br />
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {user && (
                <section>
                    <label>Name: { user.name }</label>
                    <br />
                    <label>Email: { user.email }</label>
                    <br />
                    <label>Username: { user.username}</label>
                    <br />
                    <label>Date Joined: { user.dateRegistered}</label>
                </section>
            )}
        </div>
     );
}
 
export default User;