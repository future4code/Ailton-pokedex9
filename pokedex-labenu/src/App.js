import React from 'react'
import { GlobalState } from './global/GlobalState';
import GlobalStyle from './globalStyles'
import { Router } from './routes/Router'


function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
