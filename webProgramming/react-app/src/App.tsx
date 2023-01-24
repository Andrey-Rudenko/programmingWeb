import React, { useContext } from 'react';
import './styles/App.css';
import './styles/Auth.css';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import AuthPage from './pages/AuthPage';
import ProfileForm from './components/ProfileForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authorization from './components/Authorization';
import HistoryForm from './components/HisoryForm';

function App() {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="App">
            {
                <Router>
                    <Routes>
                        <Route path='/profile' element={<ProfileForm />} />
                        <Route path='/auth' element={<Authorization />} />
                        <Route path='/history/1' element={<HistoryForm /> } />
                    </Routes>
                </Router>
            }
        </div>
    );
}

export default App;
