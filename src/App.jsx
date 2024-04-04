import React from 'react'
import Home from './pages/Home'
import UploadPage from './pages/UploadPage'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />

      </Routes>
    </Router>
  )
}

export default App