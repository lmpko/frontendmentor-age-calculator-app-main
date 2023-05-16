import React, { useState } from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"
import Moment from 'moment';


const DateFormCompononet = () => {
  const actualDate = Moment().format('DD-MM-YYYY')
  const actualYear = Moment().format('YYYY')
  const actualMonth = Moment().format('MM')
  const actualDay = Moment().format('DD')

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  
  const handleDay = (event) => {
    setDay(event.target.value);
  }

  const handleMonth = (event) => {
    setMonth(event.target.value);
  }

  const handleYear = (event) => {
    setYear(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    calculateAge(actualDay, actualMonth, actualYear,day, month, year)
  }

  function calculateAge(actualD, actualM, actualY, submittedD, submittedM, submittedY){
    console.log("calculated age", actualD, actualM, actualY, submittedD, submittedM, submittedY)
  }


  return (
    <form className='date-form' onSubmit={handleSubmit}>
      {actualDate}
      <label htmlFor="day">
        day
        <input type="number" name="day" value={day} onChange={handleDay}
          id='day' placeholder='DD'
          min="1" max="31" step="1"/>
      </label>

      <label htmlFor="month">
        month
        <input type="number" name="month" value={month} onChange={handleMonth}
          id='month' placeholder='MM'
          min="1" max="12" step="1"/>
      </label>

      <label htmlFor="year">
        year
        <input type="number" name="year"  value={year} onChange={handleYear} 
           id='year' placeholder='YYYY'
           step="1" min="0" max={actualYear}/>
      </label>

      <div className='line-with-img'>
        <hr/>
        <button type='submit' value='submit'>
          <img src={arrowIMG} alt="arrow-icon"/>
        </button>
      </div>
    </form>
  )
}

export default DateFormCompononet