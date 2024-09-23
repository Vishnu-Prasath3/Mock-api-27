import React, { useState } from 'react'
import axios from 'axios'
function List() {
  const[state,setstate]=useState([]);
  let ID=()=>{
    let data=document.getElementById("input-id");
    let array=[];
    
    array=array.push(data.value);
    
    data.value="";
  }
    return (
    <div>
<div className="card" style={{width: "18rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."></img> */}
  <div className="card-body">
    <h5 className="card-title">ToDo-List</h5>
    <input type='text' id='input-id'></input>
    {/* <button >Add list</button> */}
    <a href="#" onClick={()=>{ID()}} type='submit' className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default List