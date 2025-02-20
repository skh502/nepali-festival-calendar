import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Removed default styles
import festivals from '../data/festivals';
import FestivalDetails from './FestivalDetails';
import { useFestivalContext } from '../contexts/FestivalContext';

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [festivalDetails, setFestivalDetails] = useState(null);

  const {view, query, inputsearch} = useFestivalContext()

  // function to handle the click on the calendar date
  // it finds the selected date from the festival data if present
  const handleDateClick = (date) => {
    // alert("date: "+date)
    setSelectedDate(date);
    const festival = festivals.find(festival => new Date(festival.date).toDateString() === date.toDateString());
    setFestivalDetails(festival || null);
  };


  // function to add class to the calender date section if festival is present
  const tileClassName = ({ date }) => {
    const festival = festivals.find(festival => new Date(festival.date).toDateString() === date.toDateString());
    return festival ? 'has-festival' : '';
  };

  return (
    <div className="flex flex-col gap-8 justify-around md:flex-row">
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={tileClassName} 
        />

      <div className="p-4">

        {festivalDetails ? (
          <>
            <FestivalDetails detail={festivalDetails} />
          </>
        ) : (
          <div className="text-center text-slate-500">
            <p>Select a date to see festival details.</p>
            <p className='font-bold p-2 m-2' >No Festaivals on the selected date</p>
          </div>
        )}


      </div>

    </div>
  );
}

export default CalendarView;




