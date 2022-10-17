import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Pedals, Amps, Guitars} from './pages'
import {Navbar, MobileNav, MobileHelp, Footer} from './components'
function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <MobileNav />
      <Routes>
        <Route exact path="/" element={< Home/>} />
        <Route exact path="/guitars" element={< Guitars/>} />
        <Route exact path="/amps" element={< Amps/>} />
        <Route exact path="/pedals" element={< Pedals/>} />
      </Routes>
      <MobileHelp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;