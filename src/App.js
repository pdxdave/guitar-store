import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Pedals, Amps, Guitars, SingleProduct, Cart, PrivateRoute, Checkout} from './pages'
import {Navbar, MobileNav, MobileHelp, Footer } from './components'

function App() {
  
  return (
    <BrowserRouter className="App">
      <Navbar />
      <MobileNav />
      <Routes>
        <Route exact path="/" element={< Home/>} />
        <Route exact path="/guitars" element={< Guitars/>} />
        <Route path="/guitars/:id" element={<SingleProduct />} />
        <Route exact path="/amps" element={< Amps/>} />
        <Route path="/amps/:id" element={<SingleProduct />} />
        <Route exact path="/pedals" element={< Pedals/>} />
        <Route path="/pedals/:id" element={<SingleProduct />} />  
        <Route path="/cart" element={<Cart />}/>
        <Route element={<PrivateRoute />}>
          <Route exact path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <MobileHelp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;