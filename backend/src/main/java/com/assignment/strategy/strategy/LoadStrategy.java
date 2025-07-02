package com.assignment.strategy.strategy;

import com.assignment.strategy.dto.LoadRequestParams;

public interface LoadStrategy {
	Object load(LoadRequestParams params);
}
