import React from 'react';
import Modal from './Modal';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </Router>
    </>
  )
}

export default App