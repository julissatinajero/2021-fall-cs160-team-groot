package com.cs160groot.FoodFinder.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cs160groot.FoodFinder.Entity.Recipe;

public interface RecipeRepository extends MongoRepository<Recipe, Integer> {
	
	

}
