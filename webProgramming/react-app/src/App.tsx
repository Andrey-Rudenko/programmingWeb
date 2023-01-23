import React, { useContext } from 'react';
import './styles/App.css';
import './styles/Auth.css';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import AuthPage from './pages/AuthPage';
import ProfileForm from './components/ProfileForm';

function App() {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="App">
            {
                // !isAuthenticated && <AuthPage/>
                <ProfileForm/>
            }
        </div>
    );
}

export default App;
