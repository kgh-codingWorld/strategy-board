import React, { useEffect, useState, useRef } from 'react';
import { Container, CircularProgress, Typography, Grid } from '@mui/material';
import { getPostsScroll } from '../../api/posts';
import PostCard from '../PostCard';

const PostListScroll = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef();

  useEffect(() => {
    loadMore(null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasMore || loading) return;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        const lastId = posts[posts.length - 1]?.id;
        loadMore(lastId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posts, loading, hasMore]);

  const loadMore = async (lastId) => {
    setLoading(true);
    try {
      const { posts: newPosts, hasNext } = await getPostsScroll(lastId);
      const existingIds = new Set(posts.map(p => p.id));
      const uniquePosts = newPosts.filter(p => !existingIds.has(p.id));
      setPosts(prev => [...prev, ...uniquePosts]);
      setHasMore(hasNext);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

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
      {!hasMore && <Typography align="center" sx={{ my: 2, color: 'gray' }}>모든 게시글을 불러왔습니다.</Typography>}
    </Container>
  );
};

export default PostListScroll;
