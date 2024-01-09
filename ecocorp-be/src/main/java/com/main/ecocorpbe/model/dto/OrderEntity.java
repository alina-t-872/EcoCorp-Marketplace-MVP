package com.main.ecocorpbe.model.dto;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="OrderID")
    int id;

    @Column(name="userId")
    int userId;

    @Column(name="subtotal")
    @Nonnull
    int subtotal;

    @Column(name="shipping")
    @Nonnull
    int shipping;

    @Column(name="total")
    @Nonnull
    int total;

    @Column(name="purchase_date")
    LocalDate date;

    @Column(name = "isFinished")
    boolean isFinished;

    @ManyToMany
    @JoinTable(
        name = "OrderProduct",
        joinColumns = @JoinColumn(name = "OrderID"),
        inverseJoinColumns = @JoinColumn(name = "ProductID")
    )
    HashMap<ProductEntity, Integer> products;

    public OrderEntity(int id, ArrayList<ProductEntity> products, int subtotal, int shipping, int total) {
        this.id = id;
        this.products = products;
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.total = total;
    }

    public OrderEntity(ArrayList<ProductEntity> products, int subtotal, int shipping, int total) {
        this.products = products;
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.total = total;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof OrderEntity that)) {
            return false;
        }

        if (getId() != that.getId()) {
            return false;
        }
        if (getSubtotal() != that.getSubtotal()) {
            return false;
        }
        if (getShipping() != that.getShipping()) {
            return false;
        }
        if (getTotal() != that.getTotal()) {
            return false;
        }
        if (isFinished() != that.isFinished()) {
            return false;
        }
        if (getDate() != null ? !getDate().equals(that.getDate()) : that.getDate() != null) {
            return false;
        }
        return getProducts().equals(that.getProducts());
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + getSubtotal();
        result = 31 * result + getShipping();
        result = 31 * result + getTotal();
        result = 31 * result + (getDate() != null ? getDate().hashCode() : 0);
        result = 31 * result + (isFinished() ? 1 : 0);
        result = 31 * result + getProducts().hashCode();
        return result;
    }
}
