import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Authenticated } from './modules/Authenticated';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Authenticated />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teams" element={<Dashboard />} />
        <Route path="/messages" element={<Dashboard />} />
        <Route path="/announcements" element={<Dashboard />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
