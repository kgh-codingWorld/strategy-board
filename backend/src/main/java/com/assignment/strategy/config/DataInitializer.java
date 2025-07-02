package com.assignment.strategy.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.assignment.strategy.model.Post;
import com.assignment.strategy.repository.PostRepository;

@Component
public class DataInitializer implements CommandLineRunner{
	
	@Autowired
	private PostRepository postRepository;

	@Override
	public void run(String... args) throws Exception {
		for (int i = 1; i <= 50; i++) {
			Post post = new Post("제목 " + i, "내용 " + i, "작성자 " + i);
			postRepository.save(post);
		}
		
	}
}
