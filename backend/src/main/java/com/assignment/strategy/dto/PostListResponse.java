package com.assignment.strategy.dto;

import java.util.List;

public record PostListResponse(List<PostResponse> posts, boolean hasNext, int totalPages) {
}
