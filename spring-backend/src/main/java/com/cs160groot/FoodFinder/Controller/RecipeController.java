package com.cs160groot.FoodFinder.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs160groot.FoodFinder.Entity.Recipe;
import com.cs160groot.FoodFinder.Repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipe")
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	
	public RecipeController(RecipeRepository recipeRepository)
	{
		this.recipeRepository = recipeRepository;
	}
	
	@PostMapping
	public Recipe createRecipe(@RequestBody Recipe recipe)
	{
		return recipeRepository.save(recipe);
	}
	
	@GetMapping
	public List<Recipe> getRecipes()
	{
		return recipeRepository.findAll();
	}
	
	@GetMapping("/{recipeID}")
	public Optional<Recipe> getRecipeById(@PathVariable int recipeID)
	{
		return recipeRepository.findById(recipeID);
	}
	
	
	
	
	
}
