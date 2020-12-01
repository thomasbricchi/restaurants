package com.thomas.businesslist.web;

import com.thomas.businesslist.dto.RestaurantDTO;
import com.thomas.businesslist.services.RestaurantsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

    private final RestaurantsService restaurantsService;

    public RestaurantController(RestaurantsService restaurantsService) {
        this.restaurantsService = restaurantsService;
    }


    @GetMapping("")
    public ResponseEntity<List<RestaurantDTO>> getAllRestaurants() {
        log.info("---START getAllRestaurants---");
        List<RestaurantDTO> restaurants = restaurantsService.findAll();
        log.info("---END getAllRestaurants---");
        return ResponseEntity.ok().body(restaurants);
    }


//    @GetMapping("/{id}")
//    public ResponseEntity<RestaurantDTO> getRestaurant(@PathVariable Long id) {
//        log.info("---START getRestaurant---");
//        Optional<RestaurantDTO> restaurant = attachmentsService.getContent(id);
//        log.info("---END getRestaurant---");
//
//        return ResponseEntity.of()
//    }

}
