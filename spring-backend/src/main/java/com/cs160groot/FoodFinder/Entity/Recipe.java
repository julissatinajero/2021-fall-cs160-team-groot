package com.cs160groot.FoodFinder.Entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "recipe")
public class Recipe {
	@Id
	private int recipeID;
	private String recipeName;
	private int authorID;
	private List<String> ingredients;
	private String directions;
	private List<String> menu;
	private List<String> restrictions;
	private int calorieCount;
	private int prepTime;
	
	public Recipe() {}
	
	public Recipe(int recipeID, String recipeName, int authorID, List<String> ingredients, String directions, List<String> menu, List<String> restrictions, int calorieCount, int prepTime) {
		this.recipeID = recipeID;
		this.recipeName = recipeName;
		this.authorID = authorID;
		this.ingredients = ingredients;
		this.directions = directions;
		this.menu = menu;
		this.restrictions = restrictions;
		this.calorieCount = calorieCount;
		this.prepTime = prepTime;
	}
	
	// getters
	
	public int getRecipeID() {
		return recipeID;
	}
	
	public String getRecipeName() {
		return recipeName;
	}
	
	public int getAuthorID() {
		return authorID;
	}
	
	public List<String> getIngredients() {
		return ingredients;
	}
	
	public String getDirections() {
		return directions;
	}
	
	public List<String> getMenu() {
		return menu;
	}
	
	public List<String> getRestrictions() {
		return restrictions;
	}
	
	
	
	public int getCalorieCount() {
		return calorieCount;
	}
	
	public int getPrepTime() {
		return prepTime;
	}
	
	// setters
	
	public void setRecipeID(int recipeID) {
		this.recipeID = recipeID;
	}
	
	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}
	
	public void setAuthorID(int authorID) {
		this.authorID = authorID;
	}
	
	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}
	
	public void setDirections(String directions) {
		this.directions = directions;
	}
	
	public void setMenu(List<String> menu) {
		this.menu = menu;
	}
	
	public void setRestrictions(List<String> restrictions) {
		this.restrictions = restrictions;
	}
	
	public void setCalorieCount(int calorieCount) {
		this.calorieCount = calorieCount;
	}
	
	public void setPrepTime(int prepTime) {
		this.prepTime = prepTime;
	}
	
	
	
}
