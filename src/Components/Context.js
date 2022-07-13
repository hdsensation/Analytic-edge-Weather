import React, { createContext, useContext, useState } from 'react'
const Global=createContext()

export const Contxt=()=>useContext(Global)

export function Context({children}) {
    const [data, setdata] = useState([])
    const [current, setcurrent] = useState([])
    const [city, setcity] = useState('Bhopal')
    const [info, setinfo] = useState('')
    return (
        <Global.Provider value={{
        data,
        set:setdata,
        current,
        setcr:setcurrent,
        city,
        setcity,
        info,
        setinfo
        }}>
            {children}
        </Global.Provider> 
    )
}

