package com.cs160groot.FoodFinder.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cs160groot.FoodFinder.Entity.Recipe;

public interface RecipeRepository extends MongoRepository<Recipe, Integer> {
	
	List<Optional<Recipe>> findByIngredientsIn(List<String> ingredients);
	List<Optional<Recipe>> findByMenuIn(List<String> menu);
	List<Optional<Recipe>> findByRestrictionsIn(List<String> restrictions);
	List<Optional<Recipe>> findByNameIn(List<String> name);

}
