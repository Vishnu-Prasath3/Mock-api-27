import React, { useState } from 'react'
function List() {
  const[state,setstate]=useState([]);
const handlechange=(e)=>{
console.log(e.target.value);
}

const handlesubmit=(e)=>{
console.log(e);

}

    return (
    <div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">ToDo-List</h5>
 <form onSubmit={ (e) => {
  handlesubmit(e)
 }}>
 <input onChange={(e)=>{handlechange(e)}}    type='text' id='input-id'></input>
 <button type='button' onSubmit={(a)=>{handlesubmit(a)}}>Submit</button>
 </form>
  </div>
</div>
    </div>
  )
}

export default List