import axios from "axios";
// import { response } from "express";
import { set } from "mongoose";
import { useState,useEffect } from "react";

const AxiosFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);  
    // 'http://localhost:8000/blogs'
    useEffect(()=>{
        const abortCont = new AbortController();
        axios.get(url).then((data)=>{
            setData(data.data);
            setIsPending(false);
            setError(null);
        }).catch(err =>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
                setIsPending(false);
                setError(err.message);
            }
        });
        return ()=> abortCont.abort();
    },[url]);//empty dependency array prevents the useEffect from running for every change

    return {data,isPending,error};
}


export default AxiosFetch;