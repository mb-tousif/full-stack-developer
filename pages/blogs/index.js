import { Typography } from '@mui/material'
import React from 'react'

export default function Blogs() {
  const blogs =[
    {
      title: 'Javascript Closure and Scope',
      link: 'https://medium.com/@programmer.decoder.2021/lets-talk-about-javascript-closure-and-scope-fd258becdf7e',
    }
  ]
  return (
    <div 
      style={{
      background: "linear-gradient(90deg, #809b0e 0%, #aeb778 100%)",
      padding: "1rem",
      color: "#fff"
    }}>
        <Typography variant='h3'>Blogs</Typography>

    </div>
  )
}
