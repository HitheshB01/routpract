import React from 'react'
import AccordionPractise from './AccordionPractise'

const AccordionListP = () => {
    const data=[

        {
           question:" Lorem ipsum dolor sit amet, consectetur adipisicing ",
           answer: "Lorem ipsum dolor sit amet."
        },
        {
            question:" Lorem ipsum dolor sit amet, consectetur adipisicing ",
            answer: "Lorem ipsum dolor sit amet."
         },
         {
            question:" Lorem ipsum dolor sit amet, consectetur adipisicing ",
            answer: "Lorem ipsum dolor sit amet."
         },
         {
            question:" Lorem ipsum dolor sit amet, consectetur adipisicing ",
            answer: "Lorem ipsum dolor sit amet."
         },


    ]
  return (
    <div>
      <AccordionPractise data={data}/>
    </div>
  )
}

export default AccordionListP
