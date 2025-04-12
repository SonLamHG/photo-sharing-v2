// src/components/TopBar/index.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './styles.css';  // Style cho TopBar nếu cần

function TopBar() {
  const location = useLocation();

  // Xác định ngữ cảnh hiển thị dựa trên URL hiện tại
  let contextText = '';
  if (location.pathname.startsWith('/users/')) {
    const parts = location.pathname.split('/');
    if (parts.length >= 3) {
      contextText = `User Details: ${parts[2]}`;
    }
  } else if (location.pathname.startsWith('/photos/')) {
    const parts = location.pathname.split('/');
    if (parts.length >= 3) {
      contextText = `Photos of User: ${parts[2]}`;
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          HOANG SON LAM B22DCCN477 {/* Thay "Your Name" thành tên của bạn */}
        </Typography>
        <Typography variant="h6" component="div">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
