import React from 'react'

const DateFormCompononet = () => {
  return (
    <form className='date-form'>
      <label for="day">
        <input type="date" name="" value="" id='day' placeholder='DD'/>
      </label>

      <label for="month">
        <input type="month" name="" value="" id='month' placeholder='MM'/>
      </label>

      <label for="year">
        <input type="date" name="" value="" id='year' placeholder='YYYY'/>
      </label>
    </form>
  )
}

export default DateFormCompononet