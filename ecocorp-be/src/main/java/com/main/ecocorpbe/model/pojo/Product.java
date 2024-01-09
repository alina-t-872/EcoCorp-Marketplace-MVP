package com.main.ecocorpbe.model.pojo;

import com.main.ecocorpbe.model.dto.ProductEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
public class Product {
    private int id;
    private String title;
    private String description;
    private String owner;
    private int price;
    private int discount;
    private String img;
    private ArrayList<User> users;
    private ArrayList<Order> orders;

    public Product(String title, String description, String owner, int price, int discount,
                   String img) {
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.price = price;
        this.discount = discount;
        this.img = img;
        this.users = new ArrayList<>();
        this.orders = new ArrayList<>();
    }

    public Product(int id, String title, String description, String owner, int price, int discount,
                   String img) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.price = price;
        this.discount = discount;
        this.img = img;
        this.users = new ArrayList<>();
        this.orders = new ArrayList<>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Product product)) {
            return false;
        }

        if (getId() != product.getId()) {
            return false;
        }
        if (getPrice() != product.getPrice()) {
            return false;
        }
        if (getDiscount() != product.getDiscount()) {
            return false;
        }
        if (getTitle() != null ? !getTitle().equals(product.getTitle()) :
            product.getTitle() != null) {
            return false;
        }
        if (getDescription() != null ? !getDescription().equals(product.getDescription()) :
            product.getDescription() != null) {
            return false;
        }
        if (getOwner() != null ? !getOwner().equals(product.getOwner()) :
            product.getOwner() != null) {
            return false;
        }
        return getImg() != null ? getImg().equals(product.getImg()) : product.getImg() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getTitle() != null ? getTitle().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + (getOwner() != null ? getOwner().hashCode() : 0);
        result = 31 * result + getPrice();
        result = 31 * result + getDiscount();
        result = 31 * result + (getImg() != null ? getImg().hashCode() : 0);
        return result;
    }
}


