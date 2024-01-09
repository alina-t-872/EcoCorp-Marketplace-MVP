package com.main.ecocorpbe.model.dto;

import jakarta.annotation.Nonnull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.dialect.function.ListaggFunction;

import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "orders")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    int id;

    @Column(name = "username", unique = true)
    @Nonnull
    String username;

    @Column(name = "password")
    @Nonnull
    String password;

    @Column(name = "email", unique = true)
    @Nonnull
    String email;

    @Column(name = "personType")
    @Nonnull
    String personType;

    @OneToMany(
        fetch = FetchType.EAGER,
        cascade = CascadeType.REMOVE,
        orphanRemoval = true,
        mappedBy = "userId"
    )
    List<OrderEntity> orders;

    @ManyToMany
    @JoinTable(
        name = "UserProductWishlist",
        joinColumns = @JoinColumn(name = "UserID"),
        inverseJoinColumns = @JoinColumn(name = "ProductID")
    )
    List<ProductEntity> wishlist;

    public UserEntity(int id, @Nonnull String username, @Nonnull String password,
                      @Nonnull String email,
                      @Nonnull String personType, List<OrderEntity> orders,
                      List<ProductEntity> wishlist) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.personType = personType;
        this.orders = orders;
        this.wishlist = wishlist;
    }

    public UserEntity(@Nonnull String username, @Nonnull String password, @Nonnull String email,
                      @Nonnull String personType, List<OrderEntity> orders,
                      List<ProductEntity> wishlist) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.personType = personType;
        this.orders = orders;
        this.wishlist = wishlist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserEntity that)) {
            return false;
        }

        if (getId() != that.getId()) {
            return false;
        }
        if (!getUsername().equals(that.getUsername())) {
            return false;
        }
        if (!getPassword().equals(that.getPassword())) {
            return false;
        }
        return getEmail().equals(that.getEmail());
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + getUsername().hashCode();
        result = 31 * result + getPassword().hashCode();
        result = 31 * result + getEmail().hashCode();
        return result;
    }
}
