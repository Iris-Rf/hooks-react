import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Finder from './pages/Finder'
import Gallery from './pages/Gallery'
import Home from './pages/Home'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='finder' element={<Finder/>} />
          <Route path='gallery' element={<Gallery/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
