
package com.stackroute.moviecruiser.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.stackroute.moviecruiser.exception.UserAlreadyExistException;
import com.stackroute.moviecruiser.exception.UserNotFoundException;
import com.stackroute.moviecruiser.domain.User;
import com.stackroute.moviecruiser.service.TokenGenerator;
import com.stackroute.moviecruiser.service.UserService;

@CrossOrigin
@RestController
@EnableWebMvc
@RequestMapping(path = "/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private TokenGenerator TokenGenerator;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	/**
	 * 
	 * @param movie
	 * @return
	 * @throws UserAlreadyExistException
	 */
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody final User user) {
		ResponseEntity<?> entity = null;

		try {
			userService.saveUser(user);
			entity = new ResponseEntity<String>("{ \"msg\" : \"Registered Successfully\"}", HttpStatus.CREATED);
		} catch (Exception | UserAlreadyExistException e) {
			entity = new ResponseEntity<String>("{ \"message\":\" "+ e.getMessage() +"\"}", HttpStatus.CONFLICT);
		}
		return entity;
	}

	@PostMapping(path = "/login")
	public ResponseEntity<?> loginUser(@RequestBody final User userInfo) {
		ResponseEntity<?> entity = null;

		try {
			String userName = userInfo.getUserId();
			String password = userInfo.getPassword();

			if (userName == null || password == null) {
				throw new Exception("User name or password empty");
			}

			User user = userService.findByUserIdAndPassword(userName, password);
			if (null == user) {
				throw new UserNotFoundException("Invalid Login Information");
			}

			Map<String, String> map = TokenGenerator.generatorToken(user);
			return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
		} catch (Exception e) {
			entity = new ResponseEntity<String>("{ \"message\":\" "+ e.getMessage() +"\"}", HttpStatus.UNAUTHORIZED);
		}
		return entity;
	}
}
