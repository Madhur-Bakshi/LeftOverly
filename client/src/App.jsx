import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import RecipeDetail from './pages/RecipeDetail'
import RecipeResults from './pages/RecipeResults'
import Login from './components/Login'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<SearchBar/>}/>
        <Route path="/recipes" element={<RecipeResults />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App