package com.thomas.businesslist.services;

import com.thomas.businesslist.dto.RestaurantDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantsService {


    public List<RestaurantDTO> findAll() {
        return List.of();
    }
}
