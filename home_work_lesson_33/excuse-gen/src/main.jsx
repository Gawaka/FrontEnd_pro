import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
      </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
