import { Routes, Route } from 'react-router-dom';
import SideNavigation from "./components/SideNavigation/SideNavigation";
import Home from './pages/Home/Home';
import MarketPlace from './pages/Marketplace/Marketplace';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SideNavigation />
      <div className="right-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
