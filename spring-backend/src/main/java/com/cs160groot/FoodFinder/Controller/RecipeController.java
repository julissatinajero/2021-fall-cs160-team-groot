package com.cs160groot.FoodFinder.Controller;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cs160groot.FoodFinder.Entity.AppUser;
import com.cs160groot.FoodFinder.Entity.Recipe;
import com.cs160groot.FoodFinder.Repository.AppUserRepository;
import com.cs160groot.FoodFinder.Repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipe")
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	
	private AppUserRepository appUserRepository;
	
	private MongoTemplate mongoTemplate;
	
	
	public RecipeController(RecipeRepository recipeRepository, AppUserRepository appUserRepository, MongoTemplate mongoTemplate)
	{
		this.recipeRepository = recipeRepository;
		this.appUserRepository = appUserRepository;
		this.mongoTemplate = mongoTemplate;
	}
	
	// API to create a recipe and save to database
	@PostMapping
	public Recipe createRecipe(@RequestBody Recipe recipe)
	{
		return recipeRepository.save(recipe);
	}
	
	// API to retrieve all recipes in the database
	@GetMapping
	public List<Recipe> getRecipes()
	{
		return recipeRepository.findAll();
	}
	
	/* API to find a recipe by providing a specific recipeID
	 * Example: localhost:8080/api/recipe/1
	 */
	@GetMapping("/{recipeID}")
	public Optional<Recipe> getRecipeById(@PathVariable int recipeID)
	{
		return recipeRepository.findById(recipeID);
	}
	
	
	
	/* API to retrieve a list of recipes by providing one or more recipeIDs
	 * Example: localhost:8080/api/recipe/ids?id=1,2,3
	 */
	@GetMapping("/ids")
	public List<Optional<Recipe>> getRecipesByIds(@RequestParam List<String> id)
	{
		List<Optional<Recipe>> ret = new ArrayList<>();
		for (int i = 0;i<id.size();i++)
		{
			ret.add(recipeRepository.findById(Integer.parseInt(id.get(i))));
		}
		return ret;
			
	}
	
	
	/* API to retrieve a list of recipes by providing one ore more ingredients. Recipes that contain at least one of the ingredients are returned
	 * Example: localhost:8080/api/recipe/ingredients?ingredient=lettuce,carrots
	 */
	@GetMapping("/ingredients")
	public List<Optional<Recipe>> getRecipesByIngredients(@RequestParam List<String> ingredient)
	{
		
		return recipeRepository.findByIngredientsIn(ingredient);
			
	}
	
	/* API to retrieve a list of recipes by providing one or more menus (type of diet). Recipes that belong to at least one of the menus are returned
	 * Example: localhost:8080/api/recipe/menu?menu=vegetarian,vegan
	 */
	@GetMapping("/menu")
	public List<Optional<Recipe>> getRecipesByMenus(@RequestParam List<String> menu)
	{
		
		return recipeRepository.findByMenuIn(menu);
			
	}
	
	
	/* API to retrieve a list of recipes that have the exact restrictions passed in
	 * Example: localhost:8080/api/recipe/restrictions?restriction=soy-free,gluten-free
	 */
	@GetMapping("/restrictions")
	public List<Recipe> getRecipesByRestrictions(@RequestParam List<String> restriction)
	{
		
		Query query = new Query();
		query.addCriteria(Criteria.where("restrictions").is(restriction));
		List<Recipe> result = mongoTemplate.find(query, Recipe.class);
		return result;
	}
	
	/* API to let a user favorite a recipe and have the recipe added to their list of favorites
	 * Example: localhost:8080/api/recipe/favorite/userID=1/recipeID=4
	 */
	@PutMapping("/favorite/userID={userID}/recipeID={recipeID}")
	public AppUser favoriteRecipe(@PathVariable int userID, @PathVariable int recipeID) throws Exception
	{
		AppUser user = appUserRepository.findById(userID)
				.orElseThrow(()-> new Exception("User with id: "+userID+" not found."));
		ArrayList<Integer> favorites = new ArrayList<>();
		favorites = user.getUploaded();
		favorites.add(recipeID);
		user.setFavorited(favorites);
		return appUserRepository.save(user);
	}
	
	
	
	
	
	
	
}
