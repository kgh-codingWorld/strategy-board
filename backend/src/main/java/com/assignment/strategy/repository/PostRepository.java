package com.assignment.strategy.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.strategy.model.Post;

public interface PostRepository extends JpaRepository<Post, Long>{
	Page<Post> findAll(Pageable pageable);
	List<Post> findByIdLessThanOrderByIdDesc(Long lastId, Pageable pageable); // 무한스크롤 방식 커스텀 가능
}
