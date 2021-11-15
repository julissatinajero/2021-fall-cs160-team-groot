package com.cs160groot.FoodFinder.Security;

public class AuthenticationResponse {
	private final String jwt;
	private final String userID;
	
	public AuthenticationResponse(String jwt, String userID) {
		this.jwt = jwt;
		this.userID = userID;
	}
	
	public String getJwt() {
		return jwt;
	}
	
	public String getUserID() {
		return userID;
	}
}
