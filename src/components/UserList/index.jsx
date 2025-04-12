// src/components/UserList/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import models from '../../modelData/models';
import './styles.css';  // Nếu cần style riêng cho UserList

function UserList() {
  const userList = models.userListModel();

  return (
    <List>
      {userList.map((user) => (
        <ListItem 
          button 
          key={user._id} 
          component={Link} 
          to={`/users/${user._id}`}
        >
          <ListItemText primary={`${user.first_name} ${user.last_name}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
