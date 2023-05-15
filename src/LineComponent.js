import React from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"

const LineComponent = () => {
  return (
    <div className='line-with-img'>
      <hr/>
      <img src={arrowIMG} alt="arrow-icon"/>
    </div>
  )
}

export default LineComponent