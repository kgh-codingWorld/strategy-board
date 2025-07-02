import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

const PostCard = ({ post }) => {
  return (
    <Card sx={{ minWidth: 273, minHeight: 180, marginBottom: 2, mb: 2, borderRadius: 2, transition: '0.2s', '&:hover': { boxShadow: 5 } }}>
      <CardContent sx={{ paddingTop: 5}}>
        <Typography variant="h6" fontWeight={600} gutterBottom>{post.title}</Typography>
        <Typography variant="body1">
          {post.content}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {post.author} · {formatDate(post.createdAt)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
