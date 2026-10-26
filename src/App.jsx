import { Routes, Route } from 'react-router-dom'
import Gallery from './routes/Gallery.jsx'
import ShowDetail from './routes/ShowDetail.jsx'
import './App.css'


function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Gallery />} />
       <Route path="/show/:id" element={<ShowDetail />} />
     </Routes>
    </>
  )
}

export default App
