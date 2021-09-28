package com.cs160groot.FoodFinder;

import com.cs160groot.FoodFinder.Repository.*;
import com.cs160groot.FoodFinder.Entity.*;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodFinderApplication implements CommandLineRunner{
	
	@Autowired
	private RecipeRepository repository;
	public static void main(String[] args) {
		SpringApplication.run(FoodFinderApplication.class, args);
	}

	@Override
  	public void run(String... args) throws Exception {

		repository.deleteAll();

		// save a couple of recipes
		ArrayList<String> ingredients = new ArrayList<String>();
		ingredients.add("egg");
		ingredients.add("milk");
		ingredients.add("flour");
		ArrayList<String> instructions = new ArrayList<String>();
		ingredients.add("mix");
		ingredients.add("cook");
		ingredients.add("decorate");

		repository.save(new Recipe("White Cake", "Anonymous", "10/26/00", ingredients, instructions));
		repository.save(new Recipe("Brown Cake", "Anonymous", "10/26/00", ingredients, instructions));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Recipe rec : repository.findAll()) {
			System.out.println(rec);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Customer found with findByTitle('White Cake'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByTitle("White Cake"));

		System.out.println("Customers found with findByAuthor('Anonymous'):");
		System.out.println("--------------------------------");
		for (Recipe rec : repository.findByAuthor("Anonymous")) {
			System.out.println(rec);
		}

  	}
}
