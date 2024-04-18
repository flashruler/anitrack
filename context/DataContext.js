import React from 'react';
import fetchData from '../app/components/data'

const data = await fetchData
export const DataContext = React.createContext({})

export const useDataContext = () => React.useContext(DataContext)

export const DataContextProvider=()=>{
    return data
}