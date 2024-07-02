// import React from 'react'
// import Navbar from './components/Navbar'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Service from './components/Service'
// import RouterPractise from './components/RouterPractise'
// import Footer from './components/Footer'
// import Forms from './components/Forms'
// import router from './components/routes'
// import Contacts from './components/Contacts'
// import Accordion from './components/Accordion'
// const App = () => {

//   return (
//     <div>
//       {/* <Contacts/> */}
//       {/* <Navbar/> */}
//             {/* <RouterProvider router={router}/> */}

//       {/* <Forms/> */}
//       {/* <RouterPractise /> */}
//       {/* <Footer/> */}
//       <Accordion/>
//     </div>
//   )
// }

// export default App







import React from 'react';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4">React Toggle Switch with Tailwind</h1>
        <Accordion />
      </header>
    </div>
  );
}

export default App;
