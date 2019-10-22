package com.stackroute.moviecruiser.service;

import com.stackroute.moviecruiser.exception.UserAlreadyExistException;
import com.stackroute.moviecruiser.exception.UserNotFoundException;
import com.stackroute.moviecruiser.domain.User;

public interface UserService {
	/**
	 * Desc: To store the user in database
	 *
	 * @param movie - object need to be stored
	 * @return false - failure true - success
	 * @throws UserAlreadyExistsException
	 */
	boolean saveUser(User user) throws UserAlreadyExistException;

	/**
	 * Desc: To get the user from database for given userId and password
	 *
	 * @param userId - User id
	 * @param password - Password
	 * @return false - failure true - success
	 * @throws UserNotFoundException
	 */
	User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;
}
