import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [Btitle,setTitle] = useState('');
    const [Bbody,setBody] = useState('');
    const [Bauthor,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = {
            title: Btitle,
            body: Bbody,
            author: Bauthor
        };
        setIsPending(true);  
        axios({
            method: 'post',
            url: 'http://localhost:8080/user/save',
            data: blog,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function(response){
            console.log(response);
            history('/');
        }).catch((error)=>{
            console.log(error.response.data);
        })

    }
    return ( 
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={ Btitle }
                    onChange={(e)=>setTitle(e.target.value)}
                 />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={Bbody}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={Bauthor}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="maria">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
     );
}
 
export default Create;