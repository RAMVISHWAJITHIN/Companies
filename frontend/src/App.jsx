// App.jsx
import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import CompanyCard from "./components/CompanyCard"
import AddCompany from './components/addCompany'
import EditCompany from './components/EditCompany'

const App = () => {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/company/:id" element={<CompanyCard />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/edit-company/:id" element={<EditCompany />} />
      </Routes>
    </div>
  )
}

export default App
