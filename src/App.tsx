
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import BlogDetails from './pages/Blog-Details/BlogDetailsPage'
import BlogPage from './pages/blog/BlogPage'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs'  element= {<BlogPage/>}/>
        <Route path='/blogs/:slug' element = {<BlogDetails/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
