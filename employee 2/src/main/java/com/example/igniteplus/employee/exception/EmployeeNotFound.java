package com.example.igniteplus.employee.exception;

public class EmployeeNotFound extends Throwable {

    private static final long serialVersionUID = 1L;
    public EmployeeNotFound(String message){ super(message);}
}
