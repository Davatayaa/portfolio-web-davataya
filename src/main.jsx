import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Impor komponen halaman
import App from './App.jsx';
import Home from './pages/Home.jsx';
import NotFound from "./pages/NotFound.jsx";

// Impor halaman-halaman proyek baru Anda
import SistemMonitoring from './pages/projects/SistemMonitoring.jsx';
import EcommerceApi from './pages/projects/EcommerceApi.jsx';
// ...impor halaman proyek lainnya di sini

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Daftarkan setiap halaman proyek di sini
      {
        path: 'project/infrastructure-monitoring', // <-- Gunakan slug
        element: <SistemMonitoring />,
      },
      {
        path: 'project/ecommerce-api', // <-- Gunakan slug
        element: <EcommerceApi />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);