package com.silicon.management.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.silicon.management.model.Student;
import com.silicon.management.repository.StudentRepository;
import com.silicon.management.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public void addStudent(Student student) {
        //validation
        //write some logic to save student data in database

        studentRepository.save(student);

    }

    @Override
    public List<Student> fetchStudent() {
        List<Student> student = studentRepository.findAll();
        return student;
    }

    @Override
    public void updateStudent(Student student) {
        Optional<Student> optionalStudent = studentRepository.findById(student.getId());

        if (optionalStudent.isPresent()) {
            studentRepository.save(student);

        } else {
            throw new RuntimeException("Data not found");
        }
    }
    @Override
    public void deleteStudent(Long id) {

        boolean idExist = studentRepository.existsById(id);
        if (idExist) {
            studentRepository.deleteById(id);

        } else {
            throw new RuntimeException("No id found");
        }
    }

}
