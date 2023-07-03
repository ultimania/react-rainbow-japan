import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({children}: AppProviderProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>    
  )
}