package com.assignment.strategy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.strategy.dto.LoadRequestParams;
import com.assignment.strategy.service.PostService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@Validated
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@GetMapping("/posts")
    public ResponseEntity<?> getPosts(@Valid @ModelAttribute LoadRequestParams params) {
        return ResponseEntity.ok(postService.getPosts(params));
    }

}
