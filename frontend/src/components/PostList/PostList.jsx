// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import PostCard from '../PostCard';
// import { getPostsPaging, getPostsScroll } from '../../api/posts';
// import { Container, Typography, CircularProgress, Button, Box, Grid } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const PostList = ({ strategy }) => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(0);
//   const [totalPages, setTotalPages ] = useState(0);

//   const containerRef = useRef();

//   const fetchPaging = useCallback(async (pageNumber) => {
//       setLoading(true);
//       try {
//         const { posts, hasNext, totalPages: newTotalPages } = await getPostsPaging(pageNumber);
//         setPosts(posts);
//         setHasMore(hasNext);
//         setTotalPages(() => newTotalPages);
//         setPage(pageNumber);
//       } catch (err) {
//         console.error(err);
//       }
//       setLoading(false);
//   }, []);

//   // 초기 로딩 or strategy 변경 시
//   useEffect(() => {
//     setPosts([]);
//     setHasMore(true);
//     setPage(0);
//     if (strategy === 'paging') {
//       fetchPaging(0);
//     } else {
//       fetchScroll(null); // 초기 lastId 없음
//     }
//   }, [strategy, fetchPaging]);

//   // 스크롤 이벤트
//   useEffect(() => {
//     if (strategy !== 'scroll') return;

//     const handleScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const scrollTop = document.documentElement.scrollTop;
//       const clientHeight = window.innerHeight;

//       if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
//         const lastId = posts[posts.length - 1]?.id;
//         fetchScroll(lastId);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [posts, loading, hasMore, strategy]);


  

//   const fetchScroll = async (lastId) => {
//     setLoading(true);
//     try {
//       const { posts: newPosts, hasNext } = await getPostsScroll(lastId);

//       if (!newPosts || newPosts.length === 0) {
//         setHasMore(false);
//       } else {
//         setPosts(prev => {
//           const existingIds = new Set(prev.map(p => p.id));
//           const newUniquePosts = newPosts.filter(p => !existingIds.has(p.id));
//           return [...prev, ...newUniquePosts];
//         });
//         setHasMore(hasNext);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const renderPagination = () => {
//     const pageSize = 5;
//     const currentGroup = Math.floor(page / pageSize);
//     const startPage = currentGroup * pageSize;
//     const endPage = Math.min(startPage + pageSize, totalPages);

//     const pageNumbers = [];
//     for (let i = startPage; i < endPage; i++) {
//       pageNumbers.push(i);
//     }

//     console.log('currentPage:', page, 'totalPages:', totalPages);

    
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', margin: '35px 0' }}>
//         {currentGroup > 0 && (
//           <Button
//             onClick={() => fetchPaging(startPage - 1)}
//             sx={{ mx: 0.5, color:'black' }}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </Button>
//         )}

//         {pageNumbers.map((i) => (
//           <Button
//             key={i}
//             variant={i === page ? 'contained' : 'outlined'}
//             onClick={() => fetchPaging(i)}
//             sx={{ 
//               mx: 0.5, 
//               color:page === i ? 'white' : 'black', 
//               backgroundColor:page === i? 'black' : 'transparent', 
//               borderColor: 'black', 
//               '&:hover': { backgroundColor: 'black', color: 'white'} }}
//           >
//             {i + 1}
//           </Button>
//         ))}

//         {endPage < totalPages && (
//           <Button
//             onClick={() => fetchPaging(endPage)}
//             sx={{ mx: 0.5, color: 'black', minWidth: '0'}}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </Button>
//         )}
//       </div>
//     );
// };
//   return (
//     <Box sx={{ backgroundColor: 'transparent', marginLeft: 10, minHeight: '100vh', py: 4, justifyContent: 'flex-start' }}>
//       <Container maxWidth="md" sx={{ mt: 2, mr:'auto', ml: 'auto'}} ref={containerRef}>
//         {posts.length === 0 && !loading ? (
//           <Typography>게시글이 없습니다.</Typography>
//         ) : (
//           //posts.map(post => <PostCard key={post.id} post={post} />)
//           <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'flex-start' }}>
//             {posts.map(post => (
//               <Grid item xs={12} sm={6} md={4} key={post.id}>
//                 <PostCard post={post} />
//               </Grid>
//             ))}
//           </Grid>
//         )}
//         {loading && <CircularProgress sx={{ display: 'block', mx: 'auto', my: 2 }} />}
//         {!hasMore && strategy === 'scroll' && (
//           <Typography align="center" sx={{ my: 2, color: 'gray' }}>모든 게시글을 불러왔습니다.</Typography>
//         )}
//         {strategy === 'paging' && renderPagination()}
//       </Container>
//     </Box>
//   );
// };

// export default PostList;
import React from 'react';
import PostListPaging from './PostListPaging';
import PostListScroll from './PostListScroll';

const PostList = ({ strategy }) => {
  return strategy === 'scroll' ? <PostListScroll /> : <PostListPaging />;
};

export default PostList;