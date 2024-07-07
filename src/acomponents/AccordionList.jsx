// src/AccordionList.js
import React from 'react';
import Accordion from './Accordion';

const accordionData = [
  {
    title: 'Section 1',
    content: 'Content for section 1 goes here.',
  },
  {
    title: 'Section 2',
    content: 'Content for section 2 goes here.',
  },
  {
    title: 'Section 3',
    content: 'Content for section 3 goes here.',
  },
  {
    title: 'Section 4',
    content: 'Content for section 4 goes here.',
  },
];

const AccordionList = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Accordion with Tailwind CSS</h1>
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordionList;
