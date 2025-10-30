import React from 'react'

const DropdownNavbar = ({isOpen, ref, children}) => {
  return (
    <nav ref={ref} className={`lg:hidden z-10 w-screen fixed right-0 flex flex-col
      bg-primary-50 shadow-md transition-all ease-in-out duration-300 overflow-y-auto
      ${isOpen ? "translate-y-20 -mt-0.5 max-h-[calc(100vh-5rem)]" : " -translate-y-[150%] max-h-0"}`}
    >
      {children}
    </nav>
  )
}

export default DropdownNavbar