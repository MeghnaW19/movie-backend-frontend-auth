
package com.stackroute.moviecruiser.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.stackroute.moviecruiser.domain.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Service
public class JwtTokenGeneratorImplementation implements TokenGenerator {

	@Override
	public Map<String, String> generatorToken(User user) {
		String jwtToken = "";
		Map<String, String> map = new HashMap<String, String>();
		jwtToken = Jwts.builder().setSubject(user.getUserId()).setIssuedAt(new Date())
				   .signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		map.put("token", jwtToken);
		map.put("message", "Successfully loggedin");
		return map;
	}

}
