import React from 'react'
import festivals from '../data/festivals'

function ListView() {
  return (
    <div className=' h-full p-2 rounded-md cursor-pointer max-w-[80%] mx-auto'>

      <div className='font-semibold text-center text-xl mb-4 p-2 
        border-b-2 border-slate-400 '
      >Festivals List</div>

      {
        festivals.map( fest=> (
          <div key={fest.id} className='bg-slate-200 rounded-md hover:bg-slate-300 hover:shadow-md 
           m-4 p-4' 
          >
            <h2 className='font-medium ' > {fest.name} </h2>
            <p className='font-medium ' > {fest.date} </p>
            <p className='font-mono mt-4 ' > {fest.description} </p>
          </div>
          
        ))
      }
      

    </div>
    
  )
}

export default ListView