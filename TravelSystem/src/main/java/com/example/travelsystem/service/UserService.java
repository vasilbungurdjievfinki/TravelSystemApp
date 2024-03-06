package com.example.travelsystem.service;

import com.example.travelsystem.model.Role;
import com.example.travelsystem.model.User;

import java.util.List;

public interface UserService {

    User create(String username, String password, Role role);

}