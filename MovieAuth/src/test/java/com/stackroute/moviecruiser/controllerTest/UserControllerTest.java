/**
 *
 */
package com.stackroute.moviecruiser.controllerTest;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.moviecruiser.controller.UserController;
import com.stackroute.moviecruiser.exception.UserAlreadyExistException;
import com.stackroute.moviecruiser.domain.User;
import com.stackroute.moviecruiser.service.TokenGenerator;
import com.stackroute.moviecruiser.service.UserService;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

	@Autowired
	private transient MockMvc mockMvc;

	@MockBean
	private transient UserService userService;

	@MockBean
	private TokenGenerator TokenGenerator;

	private transient User user;

	@Before
	public void setupMock() {
		MockitoAnnotations.initMocks(this);
		this.user = new User("FirstName", "1234", "FullName", "LastName", new Date());
	}

	/**
	 * @param user2
	 * @return
	 */
	private String jsonToString(final Object obj1) throws JsonProcessingException {
		String result;
		try {
			final ObjectMapper mapper = new ObjectMapper();
			final String message = mapper.writeValueAsString(obj1);
			result = message;
		} catch (JsonProcessingException e) {
			result = "Json processing error";
		}

		return result;
	}

	@Test
	public void testRegisterUser() throws Exception, UserAlreadyExistException {
		when(userService.saveUser(user)).thenReturn(true);
		mockMvc.perform(post("/user/register").contentType(MediaType.APPLICATION_JSON)
			   .accept(MediaType.APPLICATION_JSON)
			   .content(jsonToString(user)))
			   .andExpect(status().isCreated())
			   .andDo(print());

		verify(userService, times(1)).saveUser(Mockito.any(User.class));
		verifyNoMoreInteractions(userService);
	}

	@Test
	public void testLoginUser() throws Exception, UserAlreadyExistException {

		String userId = "FirstName";
		String password = "1234";

		when(userService.saveUser(user)).thenReturn(true);
		when(userService.findByUserIdAndPassword(userId, password)).thenReturn(user);
		mockMvc.perform(post("/user/login").contentType(MediaType.APPLICATION_JSON)
			   .content(jsonToString(user)))
			   .andExpect(status().isOk());

		verify(userService, times(1)).findByUserIdAndPassword(user.getUserId(), user.getPassword());
		verifyNoMoreInteractions(userService);
	}

}
