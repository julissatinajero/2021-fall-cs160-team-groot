package com.cs160groot.FoodFinder.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.cs160groot.FoodFinder.Entity.User;

public interface UserRepository extends MongoRepository<User, String> {} 
