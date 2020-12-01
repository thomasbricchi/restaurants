package com.thomas.businesslist.dto;

import com.thomas.businesslist.domain.Day;

import java.util.List;
import java.util.Map;

public class RestaurantDTO {

    long id;

    String name;

    String where;

    Map<Day, List<OpenDetailsDTO>> days;
}
