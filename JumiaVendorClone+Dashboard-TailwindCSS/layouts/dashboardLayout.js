import React from 'react'

export const DashboardLayout = ({children}) => {
  return (
    <div>
        <NavbarPage/>
        {children}
    </div>
  )
}
