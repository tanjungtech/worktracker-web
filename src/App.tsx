import React from 'react';
import { Routes, Route } from 'react-router-dom'

// import Navigation from './component/Navigation'
import DrawerNavigation from './component/DrawerNavigation'

import HomePage from './page/HomePage'
import DashboardPage from './page/DashboardPage'
import DevelopmentPage from './page/DevelopmentPage'
import TestPage from './page/TestPage'
import BugPage from './page/BugPage'
import TeamPage from './page/TeamPage'

import './App.css';

function App() {
  return (
    <div>
      <DrawerNavigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/development' element={<DevelopmentPage />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/bug' element={<BugPage />} />
        <Route path='/team' element={<TeamPage />} />
      </Routes>
    </div>
  )
}

export default App
