const DisplayDate = (date) =>{
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    let dateOnly = date?.slice(0,10);
    const month = date?.slice(3,5);
    const newDate = date?.slice(0,2)+" "+months[parseInt(month)-1]+" "+date?.slice(6);
    return newDate;
}

export default DisplayDate;