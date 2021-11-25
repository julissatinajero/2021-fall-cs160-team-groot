package com.cs160groot.FoodFinder.Security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JWTUtil {
	private final String SECRET_KEY = "ai1CK8uoSQVI8gSoxTjvkfp0FFw3wE5+dAvWyASWufQX4Ve2XnivIcu0HFVoPBV4TPxTnQ2wzKTFr0jeRJ7jIBcH68eUhWVe5aMo8zQRvEGvjYUa/hQPZIm7wnP7dAELg8Pxy7grewrbh9Il02JRw1aG47cTuNiEwSordYA9HT8HwXRxW9p1iQZRmgUfGY93VOfsN76ces9W8HyU3qA//XhE9uUgMqOj3ZdgeZzuvd83ihJvZIk/CXHor/XoUAvrFV9g4X8n/IGuaiRdjVB0AZaUd9giwOc7UPvHrVIbn3452dNv2F3BGrZkzDfF/GCDHIzg8pVQ/RNUNCge2fkpW";
	private final int TWELVE_HOURS = 43200000;
	
	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}
	
	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	public Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
	}
	
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, userDetails.getUsername());
	}
	
	public boolean validateToken(String token, UserDetails userDetails) {
		String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()) && ! isTokenExpired(token));
	}
	
	private String createToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + TWELVE_HOURS))
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
	}
	
	private boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
}
