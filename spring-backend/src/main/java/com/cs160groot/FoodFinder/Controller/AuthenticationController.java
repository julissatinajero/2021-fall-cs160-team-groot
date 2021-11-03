package com.cs160groot.FoodFinder.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs160groot.FoodFinder.Entity.AppUser;
import com.cs160groot.FoodFinder.Repository.AppUserRepository;
import com.cs160groot.FoodFinder.Security.AuthenticationRequest;
import com.cs160groot.FoodFinder.Security.AuthenticationResponse;
import com.cs160groot.FoodFinder.Security.JWTUtil;
import com.cs160groot.FoodFinder.Security.UserDetailsImpl;
import com.cs160groot.FoodFinder.Security.UserDetailsServiceImpl;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
	@Autowired
	private final AppUserRepository appUserRepository;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	private final JWTUtil jwtUtil;
	
	
	
	public AuthenticationController(AppUserRepository appUserRepository) {
		this.appUserRepository = appUserRepository;
		jwtUtil = new JWTUtil();
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody AppUser appUser) {
		if (appUserRepository.findByEmail(appUser.getEmail()).isPresent()) {
			return ResponseEntity.badRequest().body("Error: Email is already used.");
		} else {
			appUser.setPassword(passwordEncoder().encode(appUser.getPassword()));
			System.out.println(passwordEncoder().encode(appUser.getPassword()));
			appUserRepository.save(appUser);
			return ResponseEntity.ok("User registered successfully.");
		}
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), passwordEncoder().encode(authenticationRequest.getPassword())));
		} catch(BadCredentialsException e) {
			System.out.println(passwordEncoder().encode(authenticationRequest.getPassword()));
			throw new Exception("Incorrect username or password", e);
		}
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String jwt = jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}	
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}