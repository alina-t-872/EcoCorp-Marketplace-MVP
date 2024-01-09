package com.main.ecocorpbe.model.dto;

import com.main.ecocorpbe.model.pojo.Order;
import com.main.ecocorpbe.model.pojo.User;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "products")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProductID")
    int id;

    @Column(name = "title")
    @Nonnull
    String title;

    @Column(name = "description")
    String description;

    @Column(name = "owner")
    @Nonnull
    String owner;

    @Column(name = "img")
    @Nonnull
    String img;

    @Column(name = "price")
    @Nonnull
    int price;

    @Column(name = "discount")
    @Nonnull
    int discount;

    @ManyToMany(mappedBy = "wishlist")
    private List<UserEntity> users;

    @ManyToMany(mappedBy = "products")
    private List<OrderEntity> orders;

    public ProductEntity(int id, @Nonnull String title, String description, @Nonnull String owner,
                         @Nonnull String img, int price, int discount, List<UserEntity> users,
                         List<OrderEntity> orders) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.img = img;
        this.price = price;
        this.discount = discount;
        this.users = users;
        this.orders = orders;
    }

    public ProductEntity(int id, @Nonnull String title, @Nonnull String owner, @Nonnull String img,
                         int price, int discount, List<UserEntity> users, List<OrderEntity> orders) {
        this.id = id;
        this.title = title;
        this.owner = owner;
        this.img = img;
        this.price = price;
        this.discount = discount;
        this.users = users;
        this.orders = orders;
    }

    public ProductEntity(@Nonnull String title, String description, @Nonnull String owner,
                         @Nonnull String img, int price, int discount, List<UserEntity> users,
                         List<OrderEntity> orders) {
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.img = img;
        this.price = price;
        this.discount = discount;
        this.users = users;
        this.orders = orders;
    }

    public ProductEntity(@Nonnull String title, @Nonnull String owner, @Nonnull String img,
                         int price, int discount, List<UserEntity> users, List<OrderEntity> orders) {
        this.title = title;
        this.owner = owner;
        this.img = img;
        this.price = price;
        this.discount = discount;
        this.users = users;
        this.orders = orders;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ProductEntity that)) {
            return false;
        }

        if (getId() != that.getId()) {
            return false;
        }
        if (getPrice() != that.getPrice()) {
            return false;
        }
        if (getDiscount() != that.getDiscount()) {
            return false;
        }
        if (!getTitle().equals(that.getTitle())) {
            return false;
        }
        if (getDescription() != null ? !getDescription().equals(that.getDescription()) :
            that.getDescription() != null) {
            return false;
        }
        if (!getOwner().equals(that.getOwner())) {
            return false;
        }
        return getImg().equals(that.getImg());
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + getTitle().hashCode();
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + getOwner().hashCode();
        result = 31 * result + getImg().hashCode();
        result = 31 * result + getPrice();
        result = 31 * result + getDiscount();
        return result;
    }
}
