import React from 'react'

const DropdownNavbar = ({isOpen, ref, children}) => {
 /*TODO: make scrollable */
  return (
    <div ref={ref} className={`lg:hidden z-10 h-fit w-screen fixed right-0 flex flex-col
      bg-primary-50 shadow-md transition-all ease-in-out duration-300
      ${isOpen ? "translate-y-20 -mt-0.5" : " -translate-y-[150%]"}`}
    >{children}</div>
  )
}

export default DropdownNavbar