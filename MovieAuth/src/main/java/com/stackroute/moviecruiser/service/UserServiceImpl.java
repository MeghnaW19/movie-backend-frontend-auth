package com.stackroute.moviecruiser.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.moviecruiser.exception.UserAlreadyExistException;
import com.stackroute.moviecruiser.exception.UserNotFoundException;
import com.stackroute.moviecruiser.domain.User;
import com.stackroute.moviecruiser.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {

	private final transient UserRepository userRepository;


	/**
	 * Initializing the repository
	 *
	 * @param userRepository
	 */
	@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}


	/**
	 *
	 * @param user - object need to be stored
	 * @return false - failure true - success
	 * @throws UserAlreadyExistsException
	 */
	@Override
	public boolean saveUser(User user) throws UserAlreadyExistException {
		final Optional<User> optional = userRepository.findById(user.getUserId());
		if(optional.isPresent()) {
			throw new UserAlreadyExistException("saveUser[User already exist]");
		}
		userRepository.save(user);
		return true;
	}


	/**
	 * Desc: To get the user from database for given userId and password
	 *
	 * @param userId - user id
	 * @param password - password
	 * @return false - failure true - success
	 * @throws UserNotFoundException
	 */
	@Override
	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException {
	    final User user = userRepository.findByUserIdAndPassword(userId, password);
		if(null == user) {
			throw new UserNotFoundException("getMovieById[Movie does not exist]");
		}

		return user;
	}

}
