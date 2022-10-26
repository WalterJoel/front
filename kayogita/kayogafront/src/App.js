import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Seriados from './Pages/Seriados'
import ListLotesPage from './Pages/ListLotesPage';
import DetailLotesPage from './Pages/DetailLotesPage';
import InsertInsertosPage from './Pages/InsertInsertosPage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<HomePage/>}>
          <Route index element={<HomePage/>} />
          <Route path="Seriados" element={<Seriados />} />
          <Route path="ListLotesPage" element={<ListLotesPage />} />
          <Route path="DetailLotesPage/:idLote" element={<DetailLotesPage />} />
          <Route path="InsertInsertosPage" element={<InsertInsertosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
