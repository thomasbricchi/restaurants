package com.thomas.restaurants.dto;

import lombok.Data;

import java.time.DayOfWeek;
import java.util.List;
import java.util.Map;

@Data
public class RestaurantDTO {

    long id;

    String name;

    String address;

    String cuisineType;

    Map<DayOfWeek, List<OpenDetailsDTO>> openDetails;
}
