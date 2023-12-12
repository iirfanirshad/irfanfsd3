import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography variant='h4'> hello</Typography>
        <TextField variant='outlined' label="username"/><br /><br />
        <Button>submit</Button>
    </div>
  )
}

export default Login