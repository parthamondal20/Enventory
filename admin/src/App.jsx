import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import Participants from './pages/Participants';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Auth Route */}
        <Route path="/signin" element={<SignIn />} />

        {/* Admin Routes with Layout */}
        <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/events" element={<AdminLayout><Events /></AdminLayout>} />
        <Route path="/events/:id" element={<AdminLayout><EventDetails /></AdminLayout>} />
        <Route path="/create-event" element={<AdminLayout><CreateEvent /></AdminLayout>} />
        <Route path="/participants" element={<AdminLayout><Participants /></AdminLayout>} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

