import React, {createContext, useContext, useState } from 'react'
import festivals from '../data/festivals';

const FestivalContext = createContext();

export const useFestivalContext = ()=> useContext(FestivalContext);

export const FestivalProvider = ({children}) => {

    const [view, setView] = useState(true)  
    const [query, setQuery] = useState('')

    // function to switch the display between calendar & list view
    const toogleview = (selection)=>{
        setView(selection)  
    }

    // function to search the festival on the basis of input of festival name or date
    // that starts with the typed letters

    // const inputsearch = ()=>{
    //     return festivals.filter( festival => 
    //         festival.name.toLowerCase().startsWith(query.toLowerCase()) ||
    //         festival.date.startsWith(query)
    //     )
    // }

    // function to search the festival on the basis of input of festival name or date
    // that includes the typed letters
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
    }

    return <FestivalContext.Provider value={value} >
        {children} 
    </FestivalContext.Provider>
}
