import React from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import { CssBaseline } from "@mui/material";
import './CircleLoading.css'


const CircleLoading: React.FC<{loading: boolean}> = ({loading}) => {
  return (
    <div className='CircleLoading'>
        <CssBaseline/>
        <CircleLoader
        size={100}
        color="rgb(33, 146, 255)"
        loading={loading}
        />
    </div>
  )
}

export default CircleLoading