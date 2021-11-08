package com.cs160groot.FoodFinder.Security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cs160groot.FoodFinder.Entity.AppUser;
import com.cs160groot.FoodFinder.Repository.AppUserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private AppUserRepository appUserRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<AppUser> appUser = appUserRepository.findByUsername(username);
		appUser.orElseThrow(() -> new UsernameNotFoundException("Username not found."));
		return appUser.map(UserDetailsImpl::new).get();
	}
}
