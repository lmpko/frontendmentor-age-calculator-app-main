import React, { useState } from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"
import moment from 'moment';
import ShowComponent from './ShowComponent';


const DateFormCompononet = () => {
  const actualDate = moment().format('DD-MM-YYYY')
  const actualYear = moment().format('YYYY')
  const actualMonth = moment().format('MM')
  const actualDay = moment().format('DD')

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [calculatedAge, setCalculatedAge] = useState('')
  const [calculatedMonth, setCaculatedMonth] = useState('')
  const [calculatedDay, setCaculatedDay] = useState('')
  
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

    setCalculatedAge(actualY - submittedY) 
    setCaculatedMonth(actualM - submittedM)
    setCaculatedDay(actualD - submittedD)
    
  }


  return (
    <>

      <form className='date-form' onSubmit={handleSubmit}>
        
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
      <ShowComponent calculatedAge={calculatedAge}
                      calculatedDay={calculatedDay}
                      calculatedMonth={calculatedMonth}/>
    </>
    
  )
}

export default DateFormCompononet