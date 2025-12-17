import React from 'react'

const Section = ({className, children, id}) => {
  return (
    <section id={id} className={`${className} w-full px-4 sm:px-8 pb-4 sm:pb-8 lg:py-8 xl:py-12`}>
      {children}
    </section>
  )
}

export default Section