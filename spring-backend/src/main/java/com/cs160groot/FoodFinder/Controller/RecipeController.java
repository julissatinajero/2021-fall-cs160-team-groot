package com.cs160groot.FoodFinder.Controller;

import java.util.List;
import java.util.ArrayList;

import com.cs160groot.FoodFinder.Entity.Recipe;
import com.cs160groot.FoodFinder.Repository.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
		this.recipeRepository = recipeRepository;	
	}

    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipes(@RequestParam(required = false) String title) {
        try {
            List<Recipe> recipes = new ArrayList<Recipe>();
        
            if (title == null)
              recipeRepository.findAll().forEach(recipes::add);
            else
              recipeRepository.findByTitleContaining(title).forEach(recipes::add);
        
            if (recipes.isEmpty()) {
              return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(recipes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable("id") String id) {
        return null;
    }

    @PostMapping
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
        try {
            Recipe _recipe = recipeRepository.save(new Recipe(recipe.getTitle(), recipe.getAuthor(),
            recipe.getDate(), recipe.getIngredients(), recipe.getInstructions()));
            return new ResponseEntity<>(_recipe, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable("id") String id, @RequestBody Recipe Recipe) {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteRecipe(@PathVariable("id") String id) {
        return null;
    }

    @DeleteMapping
    public ResponseEntity<HttpStatus> deleteAllrecipes() {
        return null;
    }
    
}
