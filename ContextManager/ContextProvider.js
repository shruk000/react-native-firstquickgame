import React,{ createContext, useContext, useState } from 'react'



export const TopLevelContext = createContext({});

function ContextProvider({children,...props}) {
  
    const [Value, setValue] = useState(0)

    return (
    <TopLevelContext.Provider
    value={{
        Value:Value,
        setValue:setValue,


    }}

    {...props}
    >
        {children}
    </TopLevelContext.Provider>
  )
}

export default ContextProvider