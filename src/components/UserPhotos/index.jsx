// src/components/UserPhotos/index.jsx
import React from 'react';
import { Typography, Card, CardMedia, CardContent, Link as MuiLink } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import models from '../../modelData/models';
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  const formatDate = (dateString) => new Date(dateString).toLocaleString();

  return (
    <div className="user-photos">
      <Typography variant="h5" gutterBottom>
        Photos of User: {userId}
      </Typography>
      {photos && photos.length > 0 ? (
        photos.map(photo => (
          <Card key={photo._id} style={{ marginBottom: '20px' }}>
            <CardMedia
              component="img"
              alt="User Photo"
              height="300"
              image={`/images/${photo.file_name}`}  /* Đảm bảo file ảnh có trong public/images */
              title="User Photo"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Uploaded on: {formatDate(photo.date_time)}
              </Typography>
              {photo.comments && photo.comments.length > 0 && (
                <>
                  <Typography variant="subtitle1">Comments:</Typography>
                  {photo.comments.map(comment => (
                    <div key={comment._id} style={{ marginBottom: '10px', paddingLeft: '10px' }}>
                      <Typography variant="body2">
                        <MuiLink component={Link} to={`/users/${comment.user._id}`}>
                          {comment.user.first_name} {comment.user.last_name}
                        </MuiLink>:
                      </Typography>
                      <Typography variant="body2">
                        {comment.comment}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {formatDate(comment.date_time)}
                      </Typography>
                    </div>
                  ))}
                </>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1">
          No photos available for this user.
        </Typography>
      )}
    </div>
  );
}

export default UserPhotos;
