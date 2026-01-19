import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import routes from './routes/routes';
import { initPerformanceMonitoring } from './utils/performanceMonitoring';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes)
root.render(
  <RouterProvider router={router} />
);

// Initialize Core Web Vitals monitoring
initPerformanceMonitoring();
