// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserPhotos from './components/UserPhotos';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="content-container">
        <div className="sidebar">
          <UserList />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/photos/:userId" element={<UserPhotos />} />
            <Route path="/users" element={<div>Chọn một người dùng từ danh sách bên trái</div>} />
            <Route path="*" element={<Navigate to="/users" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
