package com.cs160groot.FoodFinder.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.cs160groot.FoodFinder.Entity.AppUser;

public interface AppUserRepository extends MongoRepository<AppUser, Integer>{


}
