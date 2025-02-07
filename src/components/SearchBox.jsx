import React, { useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useFestivalContext } from '../contexts/FestivalContext';


function SearchBox() {
   
  const {query, setQuery} = useFestivalContext()
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault() 
      inputRef.current.blur();
    }
  }



  return (
    <div className='flex p-4  justify-center gap-4' >
        <input className='py-2 px-4 rounded-lg focus:outline-none hover:shadow-md 
          focus:w-1/4 focus:outline-blue-800 focus:outline-1 focus:bg-slate-100' 
         ref={inputRef} 
         type="text" placeholder='Search festivals....' 
         value={query}
         onChange={(e)=>{setQuery(e.target.value)}} 
         onKeyDown={handleKeyPress}  
        />
        
        {/* <button className='bg-blue-800 text-white rounded-md py-4 px-5 hover:bg-blue-950' 
        > <FaSearch />
        </button> */}

    </div>
  )
}

export default SearchBox