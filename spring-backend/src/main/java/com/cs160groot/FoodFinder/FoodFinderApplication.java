package com.cs160groot.FoodFinder;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.cs160groot.FoodFinder.Repository.AppUserRepository;

@SpringBootApplication
public class FoodFinderApplication {
	public static void main(String[] args) {
		SpringApplication.run(FoodFinderApplication.class, args);
	}
}
