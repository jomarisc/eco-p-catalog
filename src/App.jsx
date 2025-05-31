import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Header from './components/Header/Header'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={'/product/:id'}element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;