import React from 'react';
import { Routes, Route } from 'react-router-dom'

// import Navigation from './component/Navigation'
import DrawerNavigation from './component/DrawerNavigation'
import HeaderLoginSection from './component/HeaderLoginSection'

import HomePage from './page/HomePage'
import DashboardPage from './page/DashboardPage'
import DevelopmentPage from './page/DevelopmentPage'
import TestPage from './page/test/Index'
import BugPage from './page/BugPage'
import TeamPage from './page/TeamPage'
import RandomDatePage from './page/RandomDatePage'
import ComponentLayoutPage from './page/componentlayout/Index'

import './App.css';

function App() {
  return (
    <div>
      <DrawerNavigation />
      <div>
        <HeaderLoginSection />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/development' element={<DevelopmentPage />} />
            <Route path='/test' element={<TestPage />} />
            <Route path='/bug' element={<BugPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/random-date' element={<RandomDatePage />} />
            <Route path='/component-layout' element={<ComponentLayoutPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
