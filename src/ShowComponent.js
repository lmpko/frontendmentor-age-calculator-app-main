import React from 'react'

const ShowComponent = ({calculatedAge, calculatedMonth, calculatedDay}) => {
  return (
    <div>
      <div className='results-container'>
        <span> {calculatedAge === ''  ?  '--' : calculatedAge}</span>
        <p>years</p>
      </div>
      <div className='results-container'>
        <span>{calculatedMonth === ''  ?  '--' : calculatedMonth}</span>
        <p>months</p>
      </div>
      <div className='results-container'>
        <span>{calculatedDay === ''  ?  '--' : calculatedDay}</span>
        <p>days</p>
      </div>
    </div>
  )
}

export default ShowComponent