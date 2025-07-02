package com.assignment.strategy.dto;

import java.time.LocalDateTime;

import com.assignment.strategy.model.Post;

public record PostResponse(Long id, String title, String content, String author, LocalDateTime createdAt) {
	public static PostResponse from(Post post) {
		return new PostResponse(
				post.getId(), post.getTitle(), post.getContent(), post.getAuthor(), post.getCreatedAt());
	}
}
