import React, { useEffect, useState } from 'react'
import { useFestivalContext } from '../contexts/FestivalContext';
import FestivalDetails from './FestivalDetails';

function DynamicDisplay() {
    const {query, inputsearch} = useFestivalContext()

    // const display = inputsearch()

    const [display, setDisplay] = useState([]);
    
    useEffect(()=>{
      const filteredFestivals = inputsearch(); 
      setDisplay(filteredFestivals); 
    },[query])

  return (

    <>
        {
            query && display.length>0 && (
                <div className="max-w-[60%] mx-auto  bg-white rounded-md p-4">
                    {display.map( (each) => (
                        <div key={each.id}>
                        <FestivalDetails detail={each} />
                        </div>
                    ))}
                </div> 
            )
        }
        {
              
        }


    </>
  )
}

export default DynamicDisplay