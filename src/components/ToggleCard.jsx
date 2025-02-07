import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { useFestivalContext } from '../contexts/FestivalContext';

function ToggleCard() {
    const {view, toogleview} = useFestivalContext()

  return (

    <div className='flex p-4 justify-center gap-2 text-blue-800 hover:cursor-pointer'>
        <span onClick={()=>toogleview(true)} 
         className={`border border-slate-300 rounded-md inline-block p-2
            ${view && 'bg-gray-400 shadow-sm '}
         `}
        > 
            <FaCalendar/> 
        </span> 

        <span onClick={()=>toogleview(false)} 
         className={`border border-slate-300 rounded-md inline-block p-2 
            ${!view && 'bg-gray-400 shadow-sm '}
         `}
        > 
            <FaList/> 
        </span>
    </div>
  )
}

export default ToggleCard