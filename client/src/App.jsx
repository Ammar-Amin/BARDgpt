import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Layout } from './components';


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
