package com.thomas.restaurants.web;

import com.thomas.restaurants.BaseRestIntegrationTest;
import com.thomas.restaurants.domain.TypeEnum;
import com.thomas.restaurants.dto.OpenDetailsDTO;
import com.thomas.restaurants.dto.RestaurantDTO;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;

import java.time.DayOfWeek;
import java.util.LinkedHashMap;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class RestaurantControllerGetOneTest extends BaseRestIntegrationTest {


    @Test
    public void shouldRetrieveAllRestaurants() throws Exception {
        final MvcResult mvcResult = this.mvc
            .perform(get("/api/restaurants/1")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().is2xxSuccessful())
            .andReturn();

        final RestaurantDTO restaurantDTO = this.objectMapper.readValue(mvcResult.getResponse().getContentAsString(), RestaurantDTO.class);
        assertThat(restaurantDTO.getName()).isEqualTo("La Pasta");
        assertThat(restaurantDTO.getAddress()).isEqualTo("Niederdorfstrasse 80, 8001 ZÃ¼rich, Schweiz");
        assertThat(restaurantDTO.getCuisineType()).isEqualTo("Italian");

        final LinkedHashMap<DayOfWeek, List<OpenDetailsDTO>> openDetails = restaurantDTO.getOpenDetails();
        assertThat(openDetails).hasSize(7);
        {
            final List<OpenDetailsDTO> openDetailsDTOS = openDetails.get(DayOfWeek.MONDAY);
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(0);
                assertThat(openDetailsDTO.getStart()).isEqualTo("11:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("14:00");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(1);
                assertThat(openDetailsDTO.getStart()).isEqualTo("17:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("22:00");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
        }

        {
            final List<OpenDetailsDTO> openDetailsDTOS = openDetails.get(DayOfWeek.FRIDAY);
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(0);
                assertThat(openDetailsDTO.getStart()).isEqualTo("11:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("14:00");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(1);
                assertThat(openDetailsDTO.getStart()).isEqualTo("17:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("23:00");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
        }
        assertThat(openDetails.get(DayOfWeek.SUNDAY)).isEmpty();


    }

}
