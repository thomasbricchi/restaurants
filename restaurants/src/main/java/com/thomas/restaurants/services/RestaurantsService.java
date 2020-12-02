package com.thomas.restaurants.services;

import com.thomas.restaurants.domain.Day;
import com.thomas.restaurants.domain.OpenDetails;
import com.thomas.restaurants.domain.Restaurant;
import com.thomas.restaurants.dto.OpenDetailsDTO;
import com.thomas.restaurants.dto.RestaurantDTO;
import com.thomas.restaurants.repository.RestaurantRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RestaurantsService {

    private final RestaurantRepository restaurantRepository;

    public RestaurantsService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<RestaurantDTO> findAll() {
        return this.restaurantRepository.findAll().stream().map(this::toSimplyDto).collect(Collectors.toList());
    }

    private RestaurantDTO toSimplyDto(Restaurant restaurant) {
        final RestaurantDTO restaurantDTO = new RestaurantDTO();
        restaurantDTO.setId(restaurant.getId());
        restaurantDTO.setName(restaurant.getName());
        restaurantDTO.setAddress(restaurant.getAddress());
        restaurantDTO.setCuisineType(restaurant.getCuisineType());
        return restaurantDTO;
    }


    public Optional<RestaurantDTO> getOne(Long id) {
        return restaurantRepository.findById(id).map(this::toDetailsDto);
    }

    private RestaurantDTO toDetailsDto(Restaurant restaurant) {
        final RestaurantDTO restaurantDTO = toSimplyDto(restaurant);
        restaurantDTO.setOpenDetails(
            restaurant.getDays().stream().collect(
                Collectors.toMap(Day::getDayOfWeek,
                    day -> day.getOpenDetails().stream().map(this::toDto).collect(Collectors.toList())
                )
            )
        );

        return restaurantDTO;
    }

    private OpenDetailsDTO toDto(OpenDetails openDetail) {
        final OpenDetailsDTO openDetailsDTO = new OpenDetailsDTO();
        openDetailsDTO.setStart(openDetail.getStart());
        openDetailsDTO.setEnd(openDetail.getEnd());
        openDetailsDTO.setType(openDetail.getType());

        return openDetailsDTO;
    }
}
