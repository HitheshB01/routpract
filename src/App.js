import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import RouterPractise from './components/RouterPractise'
import ProductPage from './components/ProductPage'
import Layout from './Rcomponents/Layout'
import RoutingPage from './Rcomponents/RoutingPage'
import QuizApp from './qcomponent/QuizApp'
import Accordion from './acomponents/Accordion'
import AccordionList from './acomponents/AccordionList'

const App = () => {

  return (
    <div>
      {/* <QuizApp/> */}
      {/* <RoutingPage/> */}
      {/* <ProductPage/> */}
      {/* <Contacts/> */}
      {/* <Navbar/> */}
            {/* <RouterProvider router={router}/> */}

      {/* <Forms/> */}
      {/* <RouterPractise/> */}
      {/* <Footer/> */}
      <AccordionList/>
    </div>
  )
}

export default App







// import React from 'react';
// import Accordion from './components/Accordion';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="text-3xl font-bold mb-4">React Toggle Switch with Tailwind</h1>
//         <Accordion />
//       </header>
//     </div>
//   );
// }

// export default App;
