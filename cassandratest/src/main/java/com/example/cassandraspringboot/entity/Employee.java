package com.example.cassandraspringboot.entity;


import javax.persistence.Id;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.Table;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Table()
public class Employee {

    @Id
    @Column()
    private Integer emp_id;
    @NotNull
//    @Size(min = 3,message = "Name should contain more than 3 characters")
    @Column()
    private String emp_dept;
    @Email
    @NotNull
    @Column()
    private String emp_email;
    @Column()
    private long emp_no;
    @Column()
    private String emp_name;
    public Employee() {
    }

    public Employee(Integer emp_id, String emp_dept, String emp_email, long emp_no, String emp_name) {
        this.emp_id = emp_id;
        this.emp_dept = emp_dept;
        this.emp_email = emp_email;
        this.emp_no = emp_no;
        this.emp_name = emp_name;
    }

    public Integer getEmpId() {
        return emp_id;
    }

    public void setEmpId(Integer emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmpDept() {
        return emp_dept;
    }

    public void setEmpDept(String emp_dept) {
        this.emp_dept = emp_dept;
    }

    public String getEmpEmail() {
        return emp_email;
    }

    public void setEmpEmail(String emp_email) {
        this.emp_email = emp_email;
    }



    public long getEmpPhone() {
        return emp_no;
    }

    public void setEmpPhone(long emp_no) {
        this.emp_no = emp_no;
    }

    public String getEmpName() {
        return emp_name;
    }

    public void setEmpName(String emp_name) {
        this.emp_name = emp_name;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "emp_id=" + emp_id +
                ", emp_dept='" + emp_dept + '\'' +
                ", emp_email='" + emp_email + '\'' +
                ", emp_no='" + emp_no + '\'' +
                ", emp_name=" + emp_name +
                '}';
    }
}