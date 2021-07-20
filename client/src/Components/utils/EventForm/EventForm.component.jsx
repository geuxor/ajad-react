import React, { useState } from 'react';
import './EventForm.style.css';

function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [errorVenue, setErrorVenue] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  
  const formHandler = async (el) => {
    el.preventDefault();
    title === '' ? setErrorTitle(true) : setErrorTitle(false);
    venue === '' ? setErrorVenue(true) : setErrorVenue(false);
    date.length !== 16 ? setErrorDate(true) : setErrorDate(false);
    image === '' ? setErrorImage(true) : setErrorImage(false);

    if ((title !== '') & (venue !== '') & (date.length === 16) & (image !== '')) {
      setTitle('');
      setDate(new Date().toISOString().slice(0, 16));
      setVenue('');
      setImage('');
      const newev = { title, date, venue, image };
      addEvent(newev);
    }
  };

  return (
    <div className='event-form'>
      <form onSubmit={formHandler}>
        <div className='form-title'>
          <input
            name='title'
            className={errorTitle ? 'error' : ''}
            type='text'
            id='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-venue'>
          <input
            name='venue'
            id='venue'
            className={errorVenue ? 'error' : ''}
            type='text'
            value={venue}
            placeholder='Venue'
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className='form-date'>
          <input
            name='date'
            id='date'
            className={errorDate ? 'error' : ''}
            type='datetime-local'
            value={date}
            placeholder='Venue'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='file-uploader'>
          <input
            name='image'
            id='image'
            className={errorImage ? 'error' : ''}
            type='file'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <input type='submit' value='Create New Event' />
      </form>
    </div>
  );
}

export default EventForm;

        // {
        //   /* <div className='form-cat py-2 px-2'>
        //   <select class='form-select' aria-label='Default select example'>
        //     <option selected>Select Category</option>
        //     <option value='1'>One</option>
        //     <option value='2'>Two</option>
        //     <option value='3'>Three</option>
        //   </select>
        // </div> */
        // }