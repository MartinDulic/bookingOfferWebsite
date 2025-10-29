import React from 'react'
import Navigation from '@/components/ui-lib/navigation/Navigation';
import navigationData from '@/constants/NavigationData';

const layout = ({children}) => {
  return (
    <>
      <Navigation navigationData={navigationData} />
      <main >
        {children}
      </main>
    </>
  )
}

export default layout