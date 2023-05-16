import React, { useState } from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"
import moment from 'moment';


const DateFormCompononet = () => {
  const actualDate = moment().format('DD-MM-YYYY')
  const actualYear = moment().format('YYYY')
  const actualMonth = moment().format('MM')
  const actualDay = moment().format('DD')

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [calculatedAge, setCalculatedAge] = useState(0)
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
    console.log("calculated age", actualD, actualM, actualY, submittedD, submittedM, submittedY)
    setCalculatedAge(actualY - submittedY) 
    setCaculatedMonth(actualM - submittedM)
    setCaculatedDay(actualD - submittedD)

    if (calculatedMonth < 0 || (calculatedMonth === 0 && calculatedDay < 0)) {
      setCalculatedAge(prevAge => prevAge - 1);
      setCaculatedMonth(prevMonth => prevMonth + 12);
    }
    
    if (calculatedDay < 0) {
      const lastMonthDays = moment(actualY + "-" + actualM, "YYYY-MM").daysInMonth();
      setCaculatedDay(lastMonthDays - submittedD + actualD);
      setCaculatedMonth(prevMonth => prevMonth - 1);
    }
  }


  return (
    <form className='date-form' onSubmit={handleSubmit}>
      {calculatedAge + " "}
      {calculatedMonth +" "}
      {calculatedDay}
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