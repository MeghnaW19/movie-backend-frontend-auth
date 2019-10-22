/**
 *
 */
package com.stackroute.moviecruiser.service;

import java.util.Map;

import com.stackroute.moviecruiser.domain.User;

/**
 * @author ubuntu
 *
 */
public interface TokenGenerator {

	Map<String, String> generatorToken(User user);
}
