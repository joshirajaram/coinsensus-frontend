import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import TransactionForm from './components/TransactionForm';
import Loader from './components/Loader';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Home from '../src/components/Home';
import Account from '../src/components/Account';
import Groups from '../src/components/Groups';
import Friends from '../src/components/Friends';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoadingAfterLogin, setIsLoadingAfterLogin] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (authToken: string) => {
    setIsLoadingAfterLogin(true);
    setToken(authToken);
    sessionStorage.setItem('token', authToken);

    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoadingAfterLogin(false);
    }, 2000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    sessionStorage.removeItem('token');
  };

  return (
    <div>
      {false
        &&
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      }
      {true
        &&
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </BrowserRouter>
      }
    </div>
  );
}

export default App;