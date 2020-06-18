package com.example.igniteplus.employee.dao;


import com.example.igniteplus.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;


@Component
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
}