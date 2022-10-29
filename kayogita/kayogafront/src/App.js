import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import ListLotesPage from './Pages/ListLotesPage';
import ListModelsPage from './Pages/ListModelsPage';
import DetailLotesPage from './Pages/DetailLotesPage';
import InsertInsertosPage from './Pages/InsertInsertosPage';
import InsertNewLotePage from './Pages/InsertNewLotePage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<HomePage/>}>
          <Route index element={<HomePage/>} />
          <Route path="InsertNewLotePage" element={<InsertNewLotePage/>} />
          <Route path="ListLotesPage" element={<ListLotesPage />} />
          <Route path="DetailLotesPage/:idLoteParam/:serieParam" element={<DetailLotesPage />} />
          <Route path="InsertInsertosPage" element={<InsertInsertosPage />} />
          <Route path="ListModelsPage" element={<ListModelsPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
