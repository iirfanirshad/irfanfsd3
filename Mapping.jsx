import React, { useState } from 'react'

const Mapping = () => {
    var [names,setName]=useState(["irfan","dhiya","sona"])
  return (
    <div>
        <ul>
            {names.map((value,index)=>{
                return(
                <li>{value}</li>
                ) 
            })}
        </ul>
    </div>
  )
}

export default Mapping