package com.assignment.strategy.strategy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.assignment.strategy.dto.LoadRequestParams;
import com.assignment.strategy.repository.PostRepository;

@Component("paging")
public class PagingStrategy implements LoadStrategy{
	
	@Autowired
	private PostRepository postRepository;

	@Override
    public Object load(LoadRequestParams params) {
        return postRepository.findAll(params.toPageable());
    }
}
