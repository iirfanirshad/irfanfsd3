import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableArray = () => {
  return (
    <div>
        <TableContainer>
            <table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>irfan</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                </TableBody>
            </table>
        </TableContainer>
    </div>
  )
}

export default TableArray