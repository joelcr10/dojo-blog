import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);  
    // 'http://localhost:8000/blogs'
    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url,{mode: 'no-cors'}).
            then(res => { 
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                } 
                return res.json();
            }).then(data => {
                // console.log(data);
                setData(data)
                setIsPending(false);
                setError(null);  //for removing the  loading sign
            }).catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
                
            });
        return ()=> abortCont.abort();
    },[url]); //empty dependency array prevents the useEffect from running for every change

    return {data,isPending,error};
}


export default useFetch;