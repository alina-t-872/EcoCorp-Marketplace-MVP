package com.main.ecocorpbe.model.pojo;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class User {
    private int id;
    private String username;
    private String password;
    private String email;

    private String personType;
    private ArrayList<Order> orders;
    private ArrayList<Product> wishlist;

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;

        this.personType = "Individual";
        this.orders = new ArrayList<>();
        this.wishlist = new ArrayList<>();
    }
}
