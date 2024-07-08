import React, { useState } from 'react'


const AccordionPractise = ({props}) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
      <button className='w-96 h-7 bg-slate-400' onClick={()=>setIsOpen(!isOpen)}>
         <span>{question[0]}</span>
         <span>{isOpen? "-":"+"}</span>
      </button>
      <div className={` w-96 bg-cyan-300 overflow-hidden ${isOpen?  'max-h-screen' : 'max-h-0'}`}>hello world</div>
    </div>
  )
}

export default AccordionPractise
