import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContexProvider } from './context/AuthContext';
import { ModelsContextProvider } from './context/ModelsContext';
import { SearchContexProvider } from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthContexProvider>
      <SearchContexProvider>
        <ModelsContextProvider>
          <App />
        </ModelsContextProvider>
      </SearchContexProvider>
    </AuthContexProvider>
  </React.StrictMode>
);
