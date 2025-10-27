import React from 'react'
import Navigation from '@/components/Navigation'

const layout = ({children}) => {
  return (
    <>
      <Navigation />
      <main >
        {children}
      </main>
    </>
  )
}

export default layout