import React from 'react'

const Section = ({className, children}) => {
  return (
    <section className={`${className} w-full px-4 sm:px-8 pb-4 sm:pb-8`}>
      {children}
    </section>
  )
}

export default Section