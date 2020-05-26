package com.example.igniteplus.employee.service;

import com.example.igniteplus.employee.exception.EmployeeNotFound;
import com.example.igniteplus.employee.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService<EmployeeRepo> {

    @Autowired
    private com.example.igniteplus.employee.dao.EmployeeRepo employeeRepo;

    //CreateEmployee
    public Employee createEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    //getAllEmployees
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();

    }

    //getEmployeeById
    public Optional<Employee> getEmployeeById(Integer id) throws EmployeeNotFound {
        Optional<Employee> employee=employeeRepo.findById((int) Math.toIntExact(id));

        if(!employee.isPresent())
            throw new EmployeeNotFound("employee not found");
        return employee;
    }

    //deleteEmployeeById
    public void deleteEmployeeById(Integer id) {

        Optional<Employee> employee=employeeRepo.findById((int) Math.toIntExact(id));
        if(!employee.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"employee not found in repo,enter correct details");
        }

        employeeRepo.deleteById((int) Math.toIntExact(id));

    }


    public Employee updateEmployeeById(Integer id, String newName) throws EmployeeNotFound {

        if(!employeeRepo.findById((int) Math.toIntExact(id)).isPresent()) {
            throw new EmployeeNotFound("employee not found");
        }
        Employee employee=employeeRepo.getOne((int) Math.toIntExact(id));
        employee.setName(newName);
        return employeeRepo.save(employee);

    }




}