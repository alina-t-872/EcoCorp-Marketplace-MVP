package com.main.ecocorpbe.mapper;

import com.main.ecocorpbe.model.dto.OrderEntity;
import com.main.ecocorpbe.model.dto.ProductEntity;
import com.main.ecocorpbe.model.dto.UserEntity;
import com.main.ecocorpbe.model.pojo.Order;
import com.main.ecocorpbe.model.pojo.Product;
import com.main.ecocorpbe.model.pojo.User;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.factory.Mappers;

@Mapper(
    componentModel = MappingConstants.ComponentModel.SPRING,
    injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
public interface ObjectMapper {
    ObjectMapper instance = Mappers.getMapper(ObjectMapper.class);

    Order EntityToInstance(OrderEntity entity);

    Product EntityToInstance(ProductEntity entity);

    User EntityToInstance(UserEntity entity);


    OrderEntity InstanceToEntity(Order instance);

    ProductEntity InstanceToEntity(Product instance);

    UserEntity InstanceToEntity(User instance);
}
