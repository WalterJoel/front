import React from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Seriados from './Pages/Seriados'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<Home/>}>
          <Route index element={<Home />} />
          <Route path="Seriados" element={<Seriados />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
