import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { testConnection } from './config/supabase';

testConnection();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
