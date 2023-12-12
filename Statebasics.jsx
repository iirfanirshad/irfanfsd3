import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[fname,setFname]=useState("dhiya")
    var [val,setVal]=useState()

    const changeName=()=>{
        console.log("clicked")
        setFname("val")
    }

    const inputhandler=(e)=>{
        console.log(e.target.value)
        setVal(e.target,value)
    }
  return (
    <div>
        <Typography>My Name is {fname}</Typography><br /><br />
        <TextField variant='outlined' label='enter name' onChange={inputhandler} value={val}/><br /><br />
        <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics