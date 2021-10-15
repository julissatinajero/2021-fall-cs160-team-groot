package com.cs160groot.FoodFinder.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs160groot.FoodFinder.Entity.AppUser;
import com.cs160groot.FoodFinder.Repository.AppUserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class AppUserController {
	@Autowired
	private AppUserRepository appUserRepository;
	
	public AppUserController(AppUserRepository appUserRepository) {
		this.appUserRepository = appUserRepository;
	}

	@GetMapping("/{userID}")
	public Optional<AppUser> getAppUser(@PathVariable int userID) {
		return appUserRepository.findById(userID);
	}
	
	@PostMapping
	public AppUser postAppUser(@RequestBody AppUser appUser) {
		return appUserRepository.save(appUser);
	}
	
}
