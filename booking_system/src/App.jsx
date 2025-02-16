import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from '../pages/home';
import Tours from '../pages/ToursPage';
import AddTours from '../pages/AddTour';
import MyTours from '../pages/MyTours';
import ExploreNow from '../pages/ExploreNow';
import PerezPage from '../pages/Perez';
import HardRockPage from '../pages/HardRock';
import MathesonPage from '../pages/Matheson';
import UpdateTour from '../pages/Update';
const App = () => {
  return (
  <div className='app'>
    <Router>
      <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/tours" element={<Tours/>}/>
        <Route path="/perez" element={<PerezPage/>}/>
         <Route path="/hardRock" element={<HardRockPage/>}/>
         <Route path="/matheson" element={<MathesonPage/>}/>
         <Route path="/addTour" element={<AddTours/>}/>
         <Route path="/myTours" element={<MyTours/>}/>
         <Route path="/explore" element={<ExploreNow/>}/>
         {<Route path="/update" element={<UpdateTour/>}/>}
        </Routes>
    </Router>
  </div>
  )
}

export default App;
