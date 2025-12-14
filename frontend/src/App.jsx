import './App.css';
import '@mantine/core/styles.css';
import "@mantine/dates/styles.css";
import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import AppLayout from './pages/AppLayout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import LoginPage from './pages/LoginPage';

// ✅ Ye line add karo!
import { useEffect } from 'react';

function App() {

  // ✅ Ye test block add karo!
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.text())
      .then(data => console.log('Backend Response:', data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PrivateRoute><AppLayout /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
