// src/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <span className="text-lg font-medium text-gray-800">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-4 py-2 bg-gray-50 text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;










// // src/Accordion.js
// import React, { useState } from 'react';

// const Accordion = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200">
//       <button
//         className="w-full py-4 px-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-lg font-medium text-gray-800">{title}</span>
//         <span className="text-lg font-medium text-gray-800">
//           {isOpen ? '-' : '+'}
//         </span>
//       </button>
//       {isOpen && (
//         <div className="px-4 py-2 bg-gray-50 text-gray-700">
//           {content}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accordion;
