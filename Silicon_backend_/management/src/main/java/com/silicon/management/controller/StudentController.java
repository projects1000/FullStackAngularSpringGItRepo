package com.silicon.management.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silicon.management.model.Student;

@RestController
@RequestMapping("/students")
public class StudentController {
	
	@PostMapping("/addStudent")
	public String addStudent(@RequestBody Student student)
	{
		return "Added successfully";
	}

}
