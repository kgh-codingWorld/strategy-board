package com.assignment.strategy.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@Getter
@Setter
public class LoadRequestParams {

    @NotBlank(message = "필수값")
    private String strategy;

    @Min(value = 0, message = "0 이상")
    private Integer page;

    @Min(value = 1, message = "1 이상")
    private Integer size;

    private Long lastId;

    public Pageable toPageable() {
        int p = page != null ? page : 0;
        int s = size != null ? size : 9;
        return PageRequest.of(p, s, Sort.by("id").descending());
    }

    public boolean isPagingStrategy() {
        return "paging".equalsIgnoreCase(strategy);
    }

    public boolean isScrollStrategy() {
        return "scroll".equalsIgnoreCase(strategy);
    }
}
