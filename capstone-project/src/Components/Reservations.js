import './Main.css'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"





function Reservations() {
 
  //State setter for the calendar
  const [selectedDate, setSelectedDate] = useState(new Date());

  //State management for the occasion
  const [selectedOption, setSelectedOption] = useState('');
  
   //Event handler for the occasion options
   const handleChange = (event) => {
     setSelectedOption(event.target.value)
  }
  //State Management for the Name entry field
  const [name, setName] = useState ({firstLastName: ''})

  //Event handler for the Name entry field 
  const handleChangeName = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  return (
    <div className='reservationComponent'>
      <h1>Reservations</h1>
      <p>Book your table below:</p>
    <div className='reservationForm'>
     
      <div className='nameInput'>
        <input
        type='text'
        id='firstLastName'
        name='firstLastName'
        value={name.firstLastName}
        onChange={handleChangeName}
        placeholder='first & last name'></input>
      </div>

      <div className='partySize'>

      </div>



     <DatePicker 
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    showTimeSelect
    dateFormat="MMMM d, yyyy h:mm aa"
    minDate={new Date()}
    placeholderText="Select date and time"
    className="border p-2 rounded-lg"
/>

    <div className='specialOccasionSelect'></div>
    
      <select
      id='options'
      value={selectedOption}
      onChange={handleChange}
      className=''
      >
        <option value="" disabled>Select an Occasion</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Graduation">Graduation</option>
      </select>
      {selectedOption && <p className="mt-2 text-white">You selected: {selectedOption}</p>}
     </div> 
    </div>
  );
}

export default Reservations;

