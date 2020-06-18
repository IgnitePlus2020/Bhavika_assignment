package com.example.cassandraspringboot.service;

import com.example.cassandraspringboot.entity.Employee;
import com.example.cassandraspringboot.exceptions.EmployeeNotFoundException;
import com.example.cassandraspringboot.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }


    public Employee createEmployee(Employee emp) {

        return employeeRepo.save(emp);
    }


    public List<Employee> getAllEmployee() {

        return employeeRepo.findAll();
    }

    public Employee getEmployeeById(int id) {
        Optional<Employee> optionalEmployee = employeeRepo.findById(id);
        if (!optionalEmployee.isPresent())
            throw new EmployeeNotFoundException("Employee with ID not found!");
        return employeeRepo.findById(id).get();
    }


    public Employee updateEmployeeById(int id, Employee emp) {
        Optional<Employee> optionalEmployee = employeeRepo.findById(id);
        if (!optionalEmployee.isPresent())
            throw new EmployeeNotFoundException("Employee not found");
        emp.setEmpId(id);
        return employeeRepo.save(emp);
    }

    public void deleteEmployeeById(int id) {
        Optional<Employee> optionalUser = employeeRepo.findById(id);
        if (!optionalUser.isPresent())
            throw new EmployeeNotFoundException("Employee Not Found");
        employeeRepo.deleteById(id);
    }
}

