import React from 'react';
import Modal from './Modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [ showHideModal, setShowHideModal ] = useState(false)

  

  return (
    <>
     <div className='app'>
      <button onClick={ () => setShowHideModal(true) }>Show Modal</button>
      <Modal show={showHideModal} />
     </div>
   </>
  )
}

export default App