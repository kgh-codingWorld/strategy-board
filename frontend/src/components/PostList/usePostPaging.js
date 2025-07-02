import { useState, useCallback, useEffect } from 'react';
import { getPostsPaging } from '../../api/posts';

const usePostPaging = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPage = useCallback(async (pageNum) => {
    setLoading(true);
    try {
      const { posts, totalPages, hasNext } = await getPostsPaging(pageNum);
      setPosts(posts);
      setTotalPages(totalPages);
      setPage(pageNum);
      setHasMore(hasNext);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPage(0);
  }, [fetchPage]);

  return { posts, page, totalPages, loading, fetchPage, hasMore };
};

export default usePostPaging;