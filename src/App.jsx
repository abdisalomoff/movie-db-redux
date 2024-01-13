import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleMoviePage from './pages/SingleMoviePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
