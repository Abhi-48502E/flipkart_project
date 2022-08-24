import './App.css';
import Navbar from './Component/Navbar';
import RawPics from './Component/RawPics';
import CarouselResponsive from './Component/CarouselResponsive';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
