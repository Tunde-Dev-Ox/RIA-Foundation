import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Issue from './components/pages/issue/Issue';
import Impact from './components/pages/impact/Impact';
import Involved from './components/pages/involved/Involved';
import Training from './components/pages/trainings/Trainings';
import './styles/main.scss'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/our-impact" element={<Impact />} />
        <Route path="/get-involved" element={<Involved />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </Router>
  )
}

export default App
