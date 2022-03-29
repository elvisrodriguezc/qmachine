import React, { useState, useContext } from 'react'
import { QuoteBox } from './components/QuoteBox'
import { QContext } from './context/QContext'
function App() {
  const {
    colourTheme,
  } = useContext(QContext)
  return (
    <div className="App" style={{ backgroundColor: colourTheme }}>
      <header className="App-header" style={{ color: colourTheme }}>
        <QuoteBox />
      </header>
    </div>
  );
}

export default App;