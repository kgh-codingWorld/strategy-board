import React from 'react';
import { Container, CircularProgress, Typography, Grid } from '@mui/material';
import usePostPaging from './usePostPaging';
import PostCard from '../PostCard';
import PaginationControls from './PaginationControls';

const PostListPaging = () => {
  const { posts, page, totalPages, loading, fetchPage } = usePostPaging();

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      {posts.length === 0 && !loading ? (
        <Typography>게시글이 없습니다.</Typography>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
      {loading && <CircularProgress sx={{ display: 'block', mx: 'auto', my: 2 }} />}
      <PaginationControls page={page} totalPages={totalPages} onPageChange={fetchPage} />
    </Container>
  );
};

export default PostListPaging;