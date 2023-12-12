import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var[Name,setName]=useState()

    const changeHName=()=>{
        setName("Home")
    }


    
    const changeCName=()=>{
        setName("Contact")
    }
    const changeGName=()=>{
        setName("Gallery")
    }

    useEffect(()=>{
        changeHName()
    },[])
 

 
  return (
    <div>
        <Typography>Welcome to {Name}</Typography>
        <Button variant='contained'  onClick={changeHName}>Home</Button><br /><br />
        <Button variant='contained' onClick={changeCName}>Contact</Button><br /><br />
        <Button variant='contained' onClick={changeGName}>Gallery</Button>
    </div>
  )
}

export default UseE