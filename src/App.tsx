import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Sites from './pages/Sites';
import Bookings from './pages/Bookings';
import Waitlist from './pages/Waitlist';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;