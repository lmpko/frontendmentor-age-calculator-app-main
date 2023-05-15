import React from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"

const LineComponent = () => {
  return (
    <div className='line-with-img container'>
      <hr/>
      <img src={arrowIMG} alt="arrow-icon"/>
    </div>
  )
}

export default LineComponent