package com.thomas.restaurants.web;

import com.thomas.restaurants.BaseRestIntegrationTest;
import com.thomas.restaurants.dto.RestaurantDTO;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class RestaurantControllerGetAllTest extends BaseRestIntegrationTest {


    @Test
    public void shouldRetrieveAllRestaurants() throws Exception {


        final MvcResult mvcResult = this.mvc
            .perform(get("/api/restaurants")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().is2xxSuccessful())
            .andReturn();

        final List<RestaurantDTO> restaurantDTOS = Arrays.asList(this.objectMapper.readValue(mvcResult.getResponse().getContentAsString(), RestaurantDTO[].class));

        assertThat(restaurantDTOS).hasSize(3);

        assertRestaurant(restaurantDTOS, 1L, "La Pasta", "Niederdorfstrasse 80, 8001 ZÃ¼rich, Schweiz", "Italian");
        assertRestaurant(restaurantDTOS, 2L, "HeugÃ¼mper", "Waaggasse 4, 8001 ZÃ¼rich, Schweiz", "Fusion");
        assertRestaurant(restaurantDTOS, 3L, "Mesa", "Weinbergstrasse 75, 8006 ZÃ¼rich, Schweiz", "European");


    }

    private void assertRestaurant(List<RestaurantDTO> restaurantDTOS, long id, String name, String address, String cuisineType) {
        final RestaurantDTO restaurantDTO = restaurantDTOS.stream().filter(restaurant -> restaurant.getId() == id).findFirst().get();
        assertThat(restaurantDTO.getName()).isEqualTo(name);
        assertThat(restaurantDTO.getAddress()).isEqualTo(address);
        assertThat(restaurantDTO.getCuisineType()).isEqualTo(cuisineType);
        assertThat(restaurantDTO.getOpenDetails()).isNull();
    }
}
