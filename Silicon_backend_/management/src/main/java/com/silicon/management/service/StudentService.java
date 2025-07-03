package com.silicon.management.service;

import java.util.List;

import com.silicon.management.model.Student;

public interface StudentService {

    public void addStudent(Student student);

    public List<Student> fetchStudent();

    public void updateStudent(Student student);

    public void deleteStudent(Long id);
}
