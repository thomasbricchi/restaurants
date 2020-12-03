package com.thomas.restaurants.dto;

import lombok.Data;

import java.time.DayOfWeek;
import java.util.LinkedHashMap;
import java.util.List;

@Data
public class RestaurantDTO {

    long id;

    String name;

    String address;

    String cuisineType;

    LinkedHashMap<DayOfWeek, List<OpenDetailsDTO>> openDetails;
}
