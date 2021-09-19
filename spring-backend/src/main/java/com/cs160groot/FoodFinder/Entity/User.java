package com.cs160groot.FoodFinder.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
	@Id
	private String _id;
	private String password;
	
	public User() {}
	
	public User(String _id, String password) {
		this._id = _id;
		this.password = password;
	}
	
	// getter methods
	
	public String getId() {
		return _id;
	}
	
	public String getPassword() {
		return password;
	}
	
	// setter methods
	
	public void setId(String _id) {
		this._id = _id;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}
