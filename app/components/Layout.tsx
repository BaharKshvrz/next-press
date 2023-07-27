import React from 'react'

const Layout = ({children }: {children: React.ReactNode}) => {
  return (
    <div className="max-width padding-x">
       {children}
    </div>
  )
}

export default Layout
