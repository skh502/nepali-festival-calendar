import React, {createContext, useContext, useState } from 'react'
import festivals from '../data/festivals';
// import festivals from '../data/festivals';


const FestivalContext = createContext();

export const useFestivalContext = ()=> useContext(FestivalContext);

export const FestivalProvider = ({children}) => {

    const [view, setView] = useState(true)  
    const [query, setQuery] = useState('')
    // const [notes, setNotes] = useState(true)
    // const [event, setEvent] = useState("")

    
    const toogleview = (selection)=>{
        setView(selection)  
    }


    // const inputsearch = ()=>{
    //     return festivals.filter( festival => 
    //         festival.name.toLowerCase().startsWith(query.toLowerCase()) ||
    //         festival.date.startsWith(query)
    //     )
    // }

    const inputsearch = ()=>{
        return festivals.filter( festival => 
            festival.name.toLowerCase().includes(query.toLowerCase()) ||
            festival.date.includes(query) 
        )
    }


    const value = { 
        view,
        toogleview, 

        query, setQuery, inputsearch ,
        // notes, setNotes
        // event, setEvent
    }

    return <FestivalContext.Provider value={value} >
        {children} 
    </FestivalContext.Provider>
}
