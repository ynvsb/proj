package com.user1.airnetmanagementsystem.controller;

//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user1.airnetmanagementsystem.model.RestUser;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class Controller {
	
	Map<String,RestUser> allUsers = new HashMap<>();
	
	@GetMapping
	public Collection<RestUser> getMethod(){
		return allUsers.values();
	}
	
	@PostMapping
	public String postMethod(@RequestBody RestUser userdetails){
		RestUser addValue = new RestUser();
		addValue.setName(userdetails.getName());
		addValue.setEmail(userdetails.getEmail());
		addValue.setPhonenumber(userdetails.getPhonenumber());
		addValue.setPassword(userdetails.getPassword());
		allUsers.put(userdetails.getName(),addValue );
		return "user added";
	}
	
	/*@PutMapping
	public String putMethod() {
		return "putMethod";
	}
	
	@SuppressWarnings("unlikely-arg-type")
	@DeleteMapping(path="/{name}")
	public String DeleteMethod(@PathVariable String name,@RequestBody RestUser userdetails) {
		if(allUsers.containsValue("userdetails.getName()" == "name")){
			allUsers.remove(userdetails.getName());
			return "User deleted successfully";
		}
		else
			return "User name not found";
	}*/
}
