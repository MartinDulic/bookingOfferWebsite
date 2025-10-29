import React from 'react'

const Sidebar = ({isOpen}) => {
  
  return (
    <div className={`z-1 lg:hidden 0 h-screen w-80 fixed right-0 bottom-0 bg-red-500 transition-all ease-in-out duration-400
      ${isOpen ? "translate-x-0" : " translate-x-full"}`}
    ></div>
  )
}

export default Sidebar