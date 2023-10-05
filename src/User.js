import { useEffect } from "react";
import useFetch from "./useFetch";
import axios from "axios";
import AxiosFetch from "./AxiosFetch";
import profile from './assets/images/profile.jpg';

const id = '650162573a49381f3a261251';
const User = () => {
    // const {data: user, isPending, error} = useFetch('http://localhost:8000/user'); //http://localhost:8000/user
    const {data: user, isPending, error} = AxiosFetch('http://localhost:8080/user/profile/'+id);
    useEffect(()=>{
        console.log('inside user:',user);
        
    },[])
    
    return (    
        <div className="user">
            {/* this is the user's page <br /> */}
            {isPending && <div className="loading"></div>}
            {error && <div>{error}</div>}
            {user && (
                <div className="profile">
                    <div className="profile-container"> 
                        <img src={profile} alt="" className="profile-photo"/>
                        <div className="profile-name-container">
                            <label className="name">{ user[0].name }</label>
                            <br />
                            <label className="username"> { "@"+user[0].username}</label>
                        </div>
                    </div>
                    <br />
                    <div className="profile-fields">
                        <label>Email</label>
                        <div>{ user[0].email }</div>
                    </div>
                    <div className="profile-fields">
                        <label>Username</label>
                        <div>{ user[0].username}</div>
                    </div>
                    <div className="profile-fields">
                        <label>Country</label>
                        <div>India</div>
                    </div>
                    <div className="profile-fields">
                        <label>Date Joined</label>
                        <div>29 Sept 2010</div>
                    </div>
                </div>
            )}
            
            <div className="user-blogs">
                <h1>Blogs Published</h1>
            </div>
            
        </div>
     );
}
 
export default User;