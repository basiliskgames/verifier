import React from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap.css';
import './index.scss';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement)?.render(<App />);
