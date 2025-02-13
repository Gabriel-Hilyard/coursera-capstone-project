import './Reservations.css';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservations() {
  // State for form inputs
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState({ firstLastName: '', partySize: '' });
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Event handlers for inputs
  const handleChangeName = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({ ...prevName, [name]: value }));
  };

  const handleChangeSize = (event) => {
    const { name, value } = event.target;
    setName((prevPartySize) => ({ ...prevPartySize, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset all fields
    setName({ firstLastName: '', partySize: '' });
    setEmail('');
    setSelectedDate(new Date());
    setSelectedOption('');
    setIsChecked(false);

    alert("Reservation submitted successfully!");
  };

  return (
    <div className='reservationComponent'>
      <h1>Reservations</h1>
      <p>Book your table below:</p>
      <form className='reservationForm' onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <div className='nameInput'>
          <input
            type='text'
            id='firstLastName'
            name='firstLastName'
            value={name.firstLastName}
            onChange={handleChangeName}
            placeholder='First & Last Name'
            required
          />
        </div>

        {/* Email Input */}
        <div className='emailInput'>
          <input
            type='email'
            id='emailInput'
            name='emailInput'
            value={email}
            onChange={handleEmailChange}
            placeholder='example@yahoo.com'
            required
          />
        </div>

        {/* Party Size Input */}
        <div className='partySize'>
          <input
            type='number'
            id='partySize'
            name='partySize'
            min={1}
            max={25}
            value={name.partySize}
            onChange={handleChangeSize}
            placeholder='Party Size (1-25)'
            required
          />
        </div>

        {/* Date Picker */}
        <DatePicker 
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          placeholderText="Select date and time"
          className="border p-2 rounded-lg"
        />

        {/* Occasion Dropdown */}
        <div className='specialOccasionSelect'>
          <select
            id='options'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>Select an Occasion</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Graduation">Graduation</option>
          </select>
        </div>

        {/* Consent Checkbox */}
        <div className='consentButton'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>I consent to receiving a confirmation email</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default Reservations;
