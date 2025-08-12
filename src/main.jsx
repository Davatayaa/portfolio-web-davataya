import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ErrorLayout from './components/ErrorLayout.jsx'; 
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import BackendApiKost from './pages/projects/BackendApiKost.jsx';
import EcommerceApi from './pages/projects/EcommerceApi.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    // RUTE UTAMA: Menggunakan layout <App> yang memiliki Header
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'project/backend-api-kost', //slug from data/projects.js
        element: <BackendApiKost />,
      },
      {
        path: 'project/ecommerce-api',
        element: <EcommerceApi />,
      },
      // ...rute proyek lainnya
    ],
  },
  {
    // RUTE KEDUA: Menggunakan layout <ErrorLayout> tanpa Header
    element: <ErrorLayout />,
    children: [
      {
        path: '*', // Rute "catch-all" untuk 404
        element: <NotFound />,
      },
      // Anda bisa menambahkan halaman lain di sini yang tidak butuh header
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);