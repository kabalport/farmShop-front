import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FindPage from './pages/FindPage';
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Main>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/find" element={<FindPage />} />
                        // App.tsx
                        <Route path="/prices" element={<SearchPage />} />
                        // App.tsx
                        <Route path="/" element={<HomePage />} />

                    </Routes>
                </Main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
