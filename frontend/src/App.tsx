// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<div>Welcome to the Landing Page!</div>} />
        </Routes>
    );
};

export default App;
