import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppStarter from './pages/AppStarter'
import HomePage from './pages/HomePage'
import DataProvider from './services/DataProvider'

function App() {
  return (
    <DataProvider>
      <AppStarter />
    </DataProvider>
  )
}

export default App
