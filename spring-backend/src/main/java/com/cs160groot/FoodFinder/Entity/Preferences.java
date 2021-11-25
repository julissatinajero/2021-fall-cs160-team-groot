package com.cs160groot.FoodFinder.Entity;

import java.util.List;

public class Preferences {
	private List<String> ingredients;
	private List<String> diet;
	private List<String> restrictions;

	public Preferences() {
		ingredients = new ArrayList<>();
		diet = new ArrayList<>();
		restrictions = new ArrayList<>();
	}
	
	public Preferences(List<String> ingredients, List<String> diet, List<String> restrictions) {
		this.ingredients = ingredients;
		this.diet = diet;
		this.restrictions = restrictions;
	}
	

	public Preferences(ArrayList<String> diet) {
		this.ingredients = new ArrayList<>();
		this.diet = diet;
		this.restrictions = new ArrayList<>();
	}
	
	public List<String> getIngredients() {
		return ingredients;
	}
	
	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}
	
	public List<String> getDiet() {
		return diet;
	}
	
	public void setDiet(List<String> diet) {
		this.diet = diet;
	}
	
	public List<String> getRestrictions() {
		return restrictions;
	}
	
	public void setRestrictions(List<String> restrictions) {
		this.restrictions = restrictions;
	}

}
