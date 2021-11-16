package com.cs160groot.FoodFinder.Controller;

import java.util.Arrays;
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

import com.cs160groot.FoodFinder.Entity.AppUser;
import com.cs160groot.FoodFinder.Entity.Preferences;
import com.cs160groot.FoodFinder.Repository.AppUserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class AppUserController {
	@Autowired
	private AppUserRepository appUserRepository;
	
	public AppUserController(AppUserRepository appUserRepository) {		
		this.appUserRepository = appUserRepository;
		Preferences pref1 = new Preferences(Arrays.asList("lettuce","tomato"), null, Arrays.asList("soy-free"));
		Preferences pref2 = new Preferences();
		Preferences pref3 = new Preferences(null, Arrays.asList("vegan"), null);
		AppUser user1 = new AppUser(100, "John", "Doe", "johndoe@gmail.com", "John123", "John456", 
				Arrays.asList(0,2,5,9), Arrays.asList(3,1), pref1);
		AppUser user2 = new AppUser(200, "Jane", "Jam", "janejam@gmail.com", "JaneJane", "1234321", 
				Arrays.asList(6,4), Arrays.asList(2,3), pref2);
		AppUser user3 = new AppUser(300, "Ben", "Brian", "benbrain1@gmail.com", "BrianBen", "123123", 
				Arrays.asList(1,3), Arrays.asList(5,9), pref3);
		appUserRepository.save(user1);
		appUserRepository.save(user2);
		appUserRepository.save(user3);
	}

	@GetMapping("/{userID}")
	public AppUser getAppUser(@PathVariable String userID) throws Exception {
		int id;
		try {
			id = Integer.parseInt(userID); 
		} catch (Exception e) {
			throw new Exception("Error: Invalid ID '" + userID + "'");
		}
		
		return appUserRepository.findById(id)
				.orElseThrow(() -> new Exception("Error: Cannot find user '" + id + "'"));
	}
	
	@PostMapping
	public AppUser postAppUser(@RequestBody AppUser appUser) throws Exception {
		int id = appUser.getUserID();
		Optional<AppUser> user = appUserRepository.findById(id);
		
		if(user.isPresent()) {
			throw new Exception("Error: User ID '" + id + "' already exists");
		}
		
		return appUserRepository.save(appUser);
	}
	
	@GetMapping("/{userID}/preferences")
	public Preferences getPreferences(@PathVariable String userID) throws Exception {
		int id;
		try {
			id = Integer.parseInt(userID); 
		} catch (Exception e) {
			throw new Exception("Error: Invalid ID '" + userID + "'");
		}
		AppUser user = appUserRepository.findById(id)
				.orElseThrow(() -> new Exception("Error: Cannot find user '" + id + "'"));;
		return user.getPreferences();
	}
	
	@GetMapping("/{userID}/favorites")
	public List<Integer> getFavorites(@PathVariable String userID) throws Exception{
		int id;
		try {
			id = Integer.parseInt(userID); 
		} catch (Exception e) {
			throw new Exception("Error: Invalid ID '" + userID + "'");
		}
		AppUser user = appUserRepository.findById(id)
				.orElseThrow(() -> new Exception("Error: Cannot find user '" + id + "'"));;
		return user.getFavorited();
	}
	
	@GetMapping("/{userID}/uploads")
	public List<Integer> getUploads(@PathVariable String userID) throws Exception{
		int id;
		try {
			id = Integer.parseInt(userID); 
		} catch (Exception e) {
			throw new Exception("Error: Invalid ID '" + userID + "'");
		}
		AppUser user = appUserRepository.findById(id)
				.orElseThrow(() -> new Exception("Error: Cannot find user '" + id + "'"));;
		return user.getUploaded();
	}
	
}
