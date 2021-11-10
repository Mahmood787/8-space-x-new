import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Auths from './pages/Auth';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/Profile';
import Profile from './pages/Profile';

function App() {
  const [uiState, setUiState] = useState<string | null>(null)
  useEffect(()=> {
    setUiState('loading')
      checkUser()
    setUiState('signedIn')
    },[])

    async function checkUser() {
      console.log('checking user...')
      try {
        setUiState('loading')
        await Auth.currentAuthenticatedUser()
        setUiState('signedIn')
      } catch(err) {
        setUiState('signIn')
      }
    }
    if(uiState !== "signedIn"){
      return (
        <Auths />
      )
    } 

  return (
    <Router>
      <Layout >
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
