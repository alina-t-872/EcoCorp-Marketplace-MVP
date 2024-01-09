package com.main.ecocorpbe.service;

import com.main.ecocorpbe.mapper.ObjectMapper;
import com.main.ecocorpbe.model.dto.OrderEntity;
import com.main.ecocorpbe.model.dto.ProductEntity;
import com.main.ecocorpbe.model.dto.UserEntity;
import com.main.ecocorpbe.model.pojo.Order;
import com.main.ecocorpbe.model.pojo.Product;
import com.main.ecocorpbe.model.pojo.User;
import com.main.ecocorpbe.repository.OrderRepository;
import com.main.ecocorpbe.repository.ProductRepository;
import com.main.ecocorpbe.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class DatabaseService {
    private final UserRepository userRepository;

    private final ProductRepository productRepository;

    private final OrderRepository orderRepository;

    public DatabaseService(UserRepository userRepository, ProductRepository productRepository,
                           OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    /************************** Exists element **************************/

    public boolean checkUserExists(int id) {
        return userRepository.existsById(id);
    }

    public boolean checkProductExists(int id) {
        return productRepository.existsById(id);
    }

    public boolean checkOrderExists(int id) {
        return orderRepository.existsById(id);
    }


    /************************** Create element **************************/

    public int addTo(User user){
        UserEntity userEntity = ObjectMapper.instance.InstanceToEntity(user);
        userRepository.save(userEntity);
        return userEntity.getId();
    }

    public int addTo(Product product) {
        ProductEntity productEntity = ObjectMapper.instance.InstanceToEntity(product);
        productRepository.save(productEntity);
        return productEntity.getId();
    }

    public int addTo(Order order) {
        OrderEntity orderEntity = ObjectMapper.instance.InstanceToEntity(order);
        orderRepository.save(orderEntity);
        return orderEntity.getId();
    }

    /************************** Get Lists **************************/

    public List<User> getUserData() {
        List<UserEntity> userEntities = userRepository.findAll();

        if(userEntities.isEmpty()) {
            return new ArrayList<>();
        }

        return userEntities.stream().map(ObjectMapper.instance::EntityToInstance)
            .collect(Collectors.toList());
    }

    public List<Product> getProductData() {
        List<ProductEntity> productEntities = productRepository.findAll();

        if(productEntities.isEmpty()) {
            return new ArrayList<>();
        }

        return productEntities.stream().map(ObjectMapper.instance::EntityToInstance)
            .collect(Collectors.toList());
    }

    public List<Order> getOrderData() {
        List<OrderEntity> orderEntities = orderRepository.findAll();

        if(orderEntities.isEmpty()) {
            return new ArrayList<>();
        }

        return orderEntities.stream().map(ObjectMapper.instance::EntityToInstance)
            .collect(Collectors.toList());
    }

    /************************** Modify element **************************/

    public UserEntity getModifiableUser(int id) {
        return userRepository.getReferenceById(id);
    }

    public ProductEntity getModifiableProduct(int id) {
       return productRepository.getReferenceById(id);
    }

    public OrderEntity getModifiableOrder(int id) {
        return orderRepository.getReferenceById(id);
    }

    /************************** Delete element **************************/

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }
}
