package com.main.ecocorpbe.service;

import com.main.ecocorpbe.exceptions.BadRequestException;
import com.main.ecocorpbe.exceptions.CollisionException;
import com.main.ecocorpbe.exceptions.NotFoundException;
import com.main.ecocorpbe.mapper.ObjectMapper;
import com.main.ecocorpbe.model.dto.UserEntity;
import com.main.ecocorpbe.model.pojo.Product;
import com.main.ecocorpbe.model.pojo.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private List<User> userList;

    private final DatabaseService databaseService;

    private final NotFoundException notFoundException;

    private final CollisionException collisionException;

    private final BadRequestException badRequestException;

    public UserService(DatabaseService databaseService, NotFoundException notFoundException,
                        CollisionException collisionException,
                        BadRequestException badRequestException) {
        this.databaseService = databaseService;
        this.notFoundException = notFoundException;
        this.collisionException = collisionException;
        this.badRequestException = badRequestException;
    }

    public int addNewUser(User user) {
        if(
            user.getUsername() == null || user.getUsername().isBlank() ||
                user.getPassword() == null || user.getPassword().isBlank() ||
                user.getEmail() == null || user.getEmail().isBlank()
        ) {
            throw badRequestException;
        }

        if(userCollisionCheck(user)) {
            throw collisionException;
        }

        int id = databaseService.addTo(user);
        user.setId(id);
        userList.add(user);

        return id;
    }

    public void modifyUsername(int id, String email) {
        if(id <= 0) {
            throw badRequestException;
        }

        if(!databaseService.checkUserExists(id)) {
            throw notFoundException;
        }

        UserEntity userEntity = databaseService.getModifiableUser(id);
        userEntity.setEmail(email);
    }

    public void modifyEmail(int id, String email) {
        if(id <= 0 || email == null || email.isBlank()) {
            throw badRequestException;
        }

        if(!databaseService.checkUserExists(id)) {
            throw notFoundException;
        }

        UserEntity userEntity = databaseService.getModifiableUser(id);
        userEntity.setEmail(email);
    }

    public void modifyPassword(int id, String password) {
        if(id <= 0 || password == null || password.isBlank()) {
            throw badRequestException;
        }

        if(!databaseService.checkUserExists(id)) {
            throw notFoundException;
        }

        UserEntity userEntity = databaseService.getModifiableUser(id);
        userEntity.setPassword(password);
    }

    public void modifyWishlist(int id, List<Product> wishlist) {
        if(id <= 0 || wishlist == null || wishlist.isEmpty()) {
            throw badRequestException;
        }

        if(!databaseService.checkUserExists(id)) {
            throw notFoundException;
        }

        UserEntity userEntity = databaseService.getModifiableUser(id);
        userEntity.setWishlist(wishlist.stream().map(ObjectMapper.instance::InstanceToEntity)
            .collect(Collectors.toList()));
    }

    public void deleteUser(int id) {
        if(id <= 0) {
            throw badRequestException;
        }

        if(!databaseService.checkUserExists(id)) {
            throw notFoundException;
        }

        databaseService.deleteUser(id);
        userList = databaseService.getUserData();
    }

    public boolean userUsernameCollisionCheck(String username) {
        return userList.stream().anyMatch(userItem -> userItem.getUsername().equals(username));
    }

    public boolean userEmailCollisionCheck(String email) {
        return userList.stream().anyMatch(userItem -> userItem.getEmail().equals(email));
    }

    public boolean userCollisionCheck(User user) {
        return userUsernameCollisionCheck(user.getUsername())
            || userEmailCollisionCheck(user.getEmail());
    }
}
