import React, { useEffect, useMemo, useState } from 'react'
import CalendarView from './components/CalendarView'
import ListView  from './components/ListView'
import SearchBox from './components/SearchBox'
import ToggleCard from './components/ToggleCard'
import { useFestivalContext } from './contexts/FestivalContext'
import festivals from './data/festivals'
import FestivalDetails from './components/FestivalDetails'
import DynamicDisplay from './components/DynamicDisplay'
import { FaGithub } from "react-icons/fa";


function App() {

  const {view} = useFestivalContext()
  

  return (
    <>
      <div className='relative' >
        <h2 className="text-xl font-semibold text-center mt-6">Nepali Festivals Calendar</h2>
        <a className='absolute top-0 right-8' 
         href="https://github.com/skh502/nepali-festival-calendar.git" target='_blank' ><FaGithub />
        </a>
      </div>
      <SearchBox/>
      <DynamicDisplay/>

      <ToggleCard/>

      <div className='max-w-[70%] mx-auto  bg-white rounded-lg p-4' >
        {
          view ? <CalendarView /> : <ListView />
        }
      </div>
    </>
  )
}

export default App


