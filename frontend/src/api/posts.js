import axios from 'axios';

// 공통 axios 인스턴스
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// 페이징 방식 요청
export const getPostsPaging = async (page, size = 9) => {
    const response = await api.get('/api/posts', {
        params: {
            strategy: 'paging',
            page,
            size,
        },
    });
    console.log(response.data)
    return {
        posts: response.data.posts,
        hasNext: response.data.hasNext,
        totalPages: response.data.totalPages
    };
};

// 무한스크롤 방식 요청
export const getPostsScroll = async (lastId, size = 9) => {
    const response = await api.get('/api/posts', {
        params: {
            strategy: 'scroll',
            lastId,
            size,
        },
    });
    return {
        posts: response.data.posts,
        hasNext: response.data.hasNext,
    };
};
