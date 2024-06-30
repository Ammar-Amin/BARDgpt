import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Home, Layout, Plants, Seeds } from './components';


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='plants' element={<Plants />} />
          <Route path='seeds' element={<Seeds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
