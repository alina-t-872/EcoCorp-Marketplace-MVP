package com.main.ecocorpbe.model.pojo;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public class Order {
    private int id;
    private HashMap<Product, Integer> products;
    private int subtotal;
    private int shipping;
    private int total;
    private LocalDate date;
    private boolean isFinished;

    public Order() {
        this.products = new HashMap<>();
        subtotal = 0;
        shipping = 0;
        total = 0;
        date = null;
        isFinished = false;
    }

    public Order(HashMap<Product, Integer> products, int subtotal, int shipping, int total) {
        this.products = products;
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.total = total;
        this.date = null;
        this.isFinished = false;
    }

    public Order(HashMap<Product, Integer> products, int subtotal, int shipping, int total,
                 LocalDate date, boolean isFinished) {
        this.products = products;
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.total = total;
        this.date = date;
        this.isFinished = isFinished;
    }

    public Order(int id, HashMap<Product, Integer> products, int subtotal, int shipping, int total,
                 LocalDate date, boolean isFinished) {
        this.id = id;
        this.products = products;
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.total = total;
        this.date = date;
        this.isFinished = isFinished;
    }

    public void addItem(Product product, int quantity) {
        if(this.products.containsKey(product)) {
            products.put(product, quantity + products.get(product));
        }

        else products.put(product, quantity);
    }

    public void addItems(HashMap<Product, Integer> newProducts) {
        for(Map.Entry<Product, Integer> entry: newProducts.entrySet()) {
            addItem(entry.getKey(), entry.getValue());
        }
    }


}
