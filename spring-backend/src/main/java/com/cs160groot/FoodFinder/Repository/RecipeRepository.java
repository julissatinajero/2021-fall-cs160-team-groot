package com.cs160groot.FoodFinder.Repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.cs160groot.FoodFinder.Entity.Recipe;

public interface RecipeRepository extends MongoRepository<Recipe, String> {
    public Recipe findByTitle(String title);
    public List<Recipe> findByTitleContaining(String title);
    public ArrayList<Recipe> findByAuthor(String author);
}
