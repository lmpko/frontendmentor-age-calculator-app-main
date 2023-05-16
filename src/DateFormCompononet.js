import React, { useState } from 'react'
import arrowIMG from "/assets/images/icon-arrow.svg"
import moment from 'moment';
import ShowComponent from './ShowComponent';


const DateFormCompononet = () => {
  const actualYear = moment().format('YYYY');
  const actualMonth = moment().format('MM');
  const actualDay = moment().format('DD');

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [calculatedAge, setCalculatedAge] = useState('');
  const [calculatedMonth, setCalculatedMonth] = useState('');
  const [calculatedDay, setCalculatedDay] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleDay = (event) => {
    setDay(event.target.value);
  };

  const handleMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    if (day && month && year && parseInt(day, 10) <= moment(`${year}-${month}`, 'YYYY-M').daysInMonth() && parseInt(month, 10) <= 12 && parseInt(year, 10) <= parseInt(actualYear, 10)) {
      calculateAge(actualDay, actualMonth, actualYear, day, month, year);
    }
  };

  function calculateAge(actualD, actualM, actualY, submittedD, submittedM, submittedY) {
    
    let calculatedAge = actualY- submittedY;
    let calculatedMonth = actualM - submittedM;
    let calculatedDay = actualD - submittedD;

    if (calculatedMonth < 0 ){
        calculatedMonth += 12;
        calculatedAge -= 1; 
    }

    if(calculatedDay < 0){
      calculatedMonth -= 1;
      calculatedDay += moment(`${submittedY}-${submittedM}`, 'YYYY-M').daysInMonth();
    }

    setCalculatedAge(Math.max(0, calculatedAge));
    setCalculatedMonth(Math.max(0 ,calculatedMonth));
    setCalculatedDay(Math.max(0,calculatedDay));
  }


  

  return (
    <>

      <form className='date-form' onSubmit={handleSubmit}>
        <label htmlFor="day" className={!day && submitted ? 'invalid' : '' ||
        parseInt(day, 10) > moment(`${year}-${month}`, 'YYYY-M').daysInMonth() && submitted ? 'invalid' : ''} >
          day
          <input type="number" name="day" value={day} onChange={handleDay}
            id='day' placeholder='DD'
            min="1" step="1" 
            className={!day && submitted ? 'is-invalid' : '' ||
            parseInt(day, 10) > moment(`${year}-${month}`, 'YYYY-M').daysInMonth() && submitted ? 'is-invalid' : ''} />

          {!day && submitted && <span className="error">This field is required</span>}
          {parseInt(day, 10) > moment(`${year}-${month}`, 'YYYY-M').daysInMonth() && submitted && <span className='error'>Must be a valid day</span>}
        </label>
        

        <label htmlFor="month" className={!month && submitted ? 'invalid' : '' || parseInt(month, 10) > 12 && submitted ? 'invalid' : ''}>
          month
          <input type="number" name="month" value={month} onChange={handleMonth}
            id='month' placeholder='MM'
            min="1" step="1" 
            className={!month && submitted ? 'is-invalid' : '' || parseInt(month, 10) > 12 && submitted ? 'is-invalid' : ''}/>

            {!month && submitted && <span className="error">This field is required</span>}
            {parseInt(month, 10) > 12 && submitted && <span className='error'>Must be a valid month</span>}
        </label>

        <label htmlFor="year" className={!year && submitted ? 'invalid' : '' || parseInt(year, 10) > parseInt(actualYear, 10) && submitted ? 'invalid' : ''}>
          year
          <input type="number" name="year"  value={year} onChange={handleYear} 
            id='year' placeholder='YYYY'
            step="1" min="0" 
            className={!year && submitted ? 'is-invalid' : '' || parseInt(year, 10) > parseInt(actualYear, 10) && submitted ? 'is-invalid' : ''} />

            {!year && submitted && <span className="error">This field is required</span>}
            {parseInt(year, 10) > parseInt(actualYear, 10) && submitted && <span className='error'>Must be in the past</span>}
        </label>
        
        <div className='line-with-img'>
          <hr/>
          <button type='submit' value='submit'>
            <img src={arrowIMG} alt="arrow-icon" />
          </button>
        </div>
      </form>
      <ShowComponent calculatedAge={calculatedAge}
                      calculatedDay={calculatedDay}
                      calculatedMonth={calculatedMonth}
                    />
    </>
    
  )
}

export default DateFormCompononet