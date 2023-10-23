import React from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import { CssBaseline } from "@mui/material";
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-center'>
        <CssBaseline/>
        <ClimbingBoxLoader
        size={30}
        color="#efcc0b"
        />
    </div>
  )
}

export default Loading