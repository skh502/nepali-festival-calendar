import React, { useEffect, useState } from 'react'
import { useFestivalContext } from '../contexts/FestivalContext'
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';



function FestivalDetails({detail}) {

  const {query, notes, setNotes} = useFestivalContext()
  const [showInput, setShowInput] = useState(false);
  const [event, setEvent] = useState(detail.event)
  // const inputref = useRef(null);

  const inputEnter = (e)=>{
    if(e.key === 'Enter'){
      setEvent(e.target.value);
      setShowInput(false)
    }
  }

  // useEffect(() => {
  //   setEvent(detail.event);
  // }, [detail]);

  useEffect(()=>{
    const sotredevent = localStorage.getItem(detail.id);
    if (sotredevent) {setEvent(JSON.parse(sotredevent))}
    else {setEvent(detail.event)}
  },[detail.id])

  useEffect(()=>{
    localStorage.setItem( detail.id , JSON.stringify(event) );
  },[event, detail.id])


  return (
    <>
        <div className='bg-slate-200 h-full p-4 rounded-md hover:bg-slate-300 hover:shadow-md 
         cursor-pointer mb-2 ' 
        >
            {/* max-w-[80%] */}
            
            {/* <div className='font-semibold text-center text-xl mb-4 p-2 
             border-b-2 border-slate-400 ' 
            >Festival Details</div> */}
            {/* <h2 className='font-medium ' > {detail.name} </h2> */}      

            <div className='font-semibold pr-3 text-xl ' 
            >{detail.name}</div>
            <p className='font-medium border-b-2 pr-3 pt-1 pb-1  border-slate-400 ' > {detail.date} </p> 
            <p className='font-mono mt-5 mb-3' > {detail.description} </p>

            <div className="flex items-center gap-2 mt-3">
                <span
                  className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:shadow-md hover:bg-blue-700"
                  onClick={()=>{
                    setShowInput(prev=>!prev);
                  }}
                >
                  <FaPlus className="w-3 h-3" />
                  <span className="font-medium">Add Notes</span>
                </span>

                {showInput && (
                  <input
                    type="text"
                    className="mt-1 p-2 border  rounded-md focus:outline-none focus:shadow-md"
                    placeholder="Type your note..."
                    onChange={(e)=>setEvent(e.target.value)}
                    onKeyDown={inputEnter}
                  />
                )}
            </div>
            {
              event && (
                <p className='font-mono m-2 p-2  hover:shadow-md hover:bg-slate-400 rounded-md' >
                  Your Notes: {event}
                </p>
              )
            }

        </div>
        
    </>

  )
}

export default FestivalDetails