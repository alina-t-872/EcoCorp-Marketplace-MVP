package com.main.ecocorpbe.service;

import com.main.ecocorpbe.exceptions.BadRequestException;
import com.main.ecocorpbe.exceptions.CollisionException;
import com.main.ecocorpbe.exceptions.NotFoundException;
import com.main.ecocorpbe.model.pojo.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private List<Order> orderList;

    private final DatabaseService databaseService;

    private final NotFoundException notFoundException;

    private final CollisionException collisionException;

    private final BadRequestException badRequestException;

    public OrderService(DatabaseService databaseService, NotFoundException notFoundException,
                        CollisionException collisionException,
                        BadRequestException badRequestException) {
        this.databaseService = databaseService;
        this.orderList = databaseService.getOrderData();
        this.notFoundException = notFoundException;
        this.collisionException = collisionException;
        this.badRequestException = badRequestException;
    }

    public void addNewOrder(Order order) {
        if(order.getProducts().isEmpty()) {
            throw badRequestException;
        }

        int id = databaseService.addTo(order);
        order.setId(id);
        orderList.add(order);
    }

    public void modifyOrder(Order order) {

    }
}
