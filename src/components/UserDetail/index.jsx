// src/components/UserDetail/index.jsx
import React from "react";
import { Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <div className="user-detail">
      {user ? (
        <>
          <Typography variant="h5" gutterBottom>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">Description: {user.description}</Typography>
          <Typography variant="body1">Occupation: {user.occupation}</Typography>
          <br />
          <Link to={`/photos/${user._id}`}>View Photos</Link>
        </>
      ) : (
        <Typography variant="body1">
          Không tìm thấy thông tin người dùng.
        </Typography>
      )}
    </div>
  );
}

export default UserDetail;
