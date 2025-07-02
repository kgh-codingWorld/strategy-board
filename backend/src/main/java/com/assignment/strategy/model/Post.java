package com.assignment.strategy.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Getter
public class Post {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank // 요청 시 title/content/author가 비어있으면 validation 에러 발생
	private String title;
	
	@NotBlank
	private String content;
	
	@NotBlank
	private String author;
	
	@CreatedDate // 생성 시간 자동 셋팅처럼 보이지만 실제로는 @EntityListeners가 없어서 작동 안 함, 대신 생성자에서 수동 처리중
	private LocalDateTime createdAt;

	public Post(String title, String content, String author) {
		this.title = title;
		this.content = content;
		this.author = author;
		this.createdAt = LocalDateTime.now();
	}
}
