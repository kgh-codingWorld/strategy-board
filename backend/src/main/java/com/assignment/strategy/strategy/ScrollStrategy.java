package com.assignment.strategy.strategy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.assignment.strategy.dto.LoadRequestParams;
import com.assignment.strategy.model.Post;
import com.assignment.strategy.repository.PostRepository;

@Component("scroll")
public class ScrollStrategy implements LoadStrategy{
	
	@Autowired
	private PostRepository postRepository;
	
	@Override
    public List<Post> load(LoadRequestParams params) {
        Long lastId = params.getLastId() != null ? params.getLastId() : Long.MAX_VALUE;
        return postRepository.findByIdLessThanOrderByIdDesc(lastId, params.toPageable());
    }
}
