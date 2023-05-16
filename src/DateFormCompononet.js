import React from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"

const DateFormCompononet = () => {
  return (
    <form className='date-form'>
      <label for="day">
        day
        <input type="number" name="day" 
          id='day' placeholder='DD'
          min="1" max="31" step="1"/>
      </label>

      <label for="month">
        month
        <input type="number" name="month" 
          id='month' placeholder='MM'
          min="1" max="12" step="1"/>
      </label>

      <label for="year">
        year
        <input type="number" name="year" 
           id='year' placeholder='YYYY'
           step="1" min="0"/>
      </label>

      <div className='line-with-img'>
      <hr/>
      <button>
        <img src={arrowIMG} alt="arrow-icon"/>
      </button>
        
    </div>
    </form>
  )
}

export default DateFormCompononet