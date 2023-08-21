import React from 'react';
import DetailsPage from './DetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './ListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DetailsPage />} />
        <Route index element={<DetailsPage />} />
        <Route path='/ListPage/:movieId' element={<ListPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
