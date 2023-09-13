import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import './index.css';
import RepositoriesExplorer from './pages/repositories-explorer';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18nConfig from './locales/i18next'

i18n.use(initReactI18next).init(i18nConfig)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RepositoriesExplorer />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
