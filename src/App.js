import React from 'react'
import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
      </div>
    </AuthProvider>
  )                                   
}

export default App;
