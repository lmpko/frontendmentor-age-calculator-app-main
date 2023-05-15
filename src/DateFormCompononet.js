import React from 'react'

const DateFormCompononet = () => {
  return (
    <form className='date-form'>
      <label for="day">
        day
        <input type="number" name="day" value="" 
          id='day' placeholder='DD'/>
      </label>

      <label for="month">
        month
        <input type="number" name="month" value="" 
          id='month' placeholder='MM'/>
      </label>

      <label for="year">
        year
        <input type="number" name="year" value=""
           id='year' placeholder='YYYY'/>
      </label>
    </form>
  )
}

export default DateFormCompononet