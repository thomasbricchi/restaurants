package com.thomas.restaurants.dto;

import com.thomas.restaurants.domain.TypeEnum;
import lombok.Data;

@Data
public class OpenDetailsDTO {

    String start;
    String end;
    TypeEnum type;
}
