import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import TopWear from './Pages/TopWear';
import BottomWear from './Pages/BottomWear';
import Accessories from './Pages/Accessories';
import Cart from './Pages/Cart';
import LoginModal from './components/LoginModal';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen text-gray-900">
      {/* Pass trigger function */}
      <Navbar onLoginClick={() => setShowLogin(true)} />
      
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-wear" element={<TopWear />} />
          <Route path="/bottom-wear" element={<BottomWear />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      {/*  Conditionally render LoginModal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;
