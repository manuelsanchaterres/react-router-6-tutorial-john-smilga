import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {About, Error, Home} from './pages/index'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="about" element={<About />} />

        <Route path="error" element={<Error />} />
        <Route path="/" element={<Home />} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App;