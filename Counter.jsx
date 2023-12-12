import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter=()=>{
 var[count,setCount]=useState(0)
const inBtn=()=>{
    setCount(count+1)
 }

 const decBtn=()=>{
    setCount(count-1)
 }

  return (
    <div>
        <Typography>count:{count}</Typography>
        <Button variant='contained' color='success' onClick={inBtn}>+</Button> &nbsp;&nbsp;
        <Button variant='contained' color='error' onClick={decBtn}>-</Button>
    </div>
  )
}

export default Counter