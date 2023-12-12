import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <Typography variant='h4'>signup</Typography><br />
      <TextField variant='outlined' label='username'/><br /><br />
      <TextField variant='outlined' label='email'/><br /><br />
      <TextField variant='outlined' label='password'/><br /><br />
      <Button>login</Button>
    </div>
  )
}

export default Signup