package com.cs160groot.FoodFinder.Entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "recipe")
public class Recipe {
	
	@Id
	@Indexed(unique=true)
	private int recipe_id;
	
	private String recipe_name;
	private int author_id;
	private List<String> ingredients;
	private String directions;
	private List<String> menu;
	private List<String> restrictions;
	private int calorie_count;
	private int prep_time;
	
	
	
}
