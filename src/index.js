import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App';
import LoginPage from './routes/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>

    

    </BrowserRouter>
  </React.StrictMode>
);


