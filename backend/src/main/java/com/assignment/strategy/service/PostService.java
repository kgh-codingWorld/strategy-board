package com.assignment.strategy.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.assignment.strategy.dto.LoadRequestParams;
import com.assignment.strategy.dto.PostListResponse;
import com.assignment.strategy.dto.PostResponse;
import com.assignment.strategy.model.Post;
import com.assignment.strategy.strategy.LoadStrategy;
import com.assignment.strategy.strategy.PagingStrategy;
import com.assignment.strategy.strategy.ScrollStrategy;


@Service
public class PostService {
	
	@Autowired
	private Map<String, LoadStrategy> strategies;
	
	public Object getPosts(LoadRequestParams params) {
        LoadStrategy strategy = strategies.get(params.getStrategy());
        if (strategy == null) throw new IllegalArgumentException("Invalid Strategy");
        
        if(strategy instanceof PagingStrategy paging) {
            @SuppressWarnings("unchecked")
            Page<Post> page = (Page<Post>) paging.load(params);
            List<PostResponse> responses = page.getContent().stream().map(PostResponse::from).toList();
            return new PostListResponse(responses, page.hasNext(), page.getTotalPages());
        } else if (strategy instanceof ScrollStrategy scroll) {
            List<Post> list = (List<Post>) scroll.load(params);
            boolean hasNext = list.size() >= params.getSize(); // size보다 작으면 끝
            List<PostResponse> responses = list.stream().map(PostResponse::from).toList();
            return new PostListResponse(responses, hasNext, -1);
        } else {
            throw new IllegalStateException("Unexpected Result from strategy");
        }
    }
}
