import React from 'react'
import { Icon } from '@mui/material'

const SliderArrow = ({ className, to, onClick }) => (
    <button type="button" onClick={onClick} className={` ${className}`} aria-label={to}>
    <Icon icon={to}/>
    </button>
  )


export default SliderArrow