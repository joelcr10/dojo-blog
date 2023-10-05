import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

// import datetime from datetime;

const Create = () => {

    const [Btitle,setTitle] = useState('');
    const [Bbody,setBody] = useState('');
    const [Bauthor,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false);
    const [image, setImage] = useState(null);
    const history = useNavigate();


    function convertToBase64(e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            console.log(reader.result);
            setImage(reader.result);
        }
        reader.onerror = error =>{
            console.log('error',error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Month is 0-based.
        const year = currentDate.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        const blog = {
            title: Btitle,
            body: Bbody,
            author: Bauthor,
            created: formattedDate,
            thumbnail: image
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
                    rows={9}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={Bauthor}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="maria">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <input
                    type="file"
                    accept="image/*"
                    onChange={convertToBase64}
                />

                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
     );
}
 
export default Create;