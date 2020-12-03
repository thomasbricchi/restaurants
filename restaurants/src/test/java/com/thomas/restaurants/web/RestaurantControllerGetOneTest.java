package com.thomas.restaurants.web;

import com.thomas.restaurants.BaseRestIntegrationTest;
import com.thomas.restaurants.domain.TypeEnum;
import com.thomas.restaurants.dto.OpenDetailsDTO;
import com.thomas.restaurants.dto.RestaurantDTO;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;

import java.time.DayOfWeek;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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
        assertThat(restaurantDTO.getName()).isEqualTo("viale paoli 24");
        assertThat(restaurantDTO.getAddress()).isEqualTo("REST");
        assertThat(restaurantDTO.getCuisineType()).isEqualTo("CINESE");

        final Map<DayOfWeek, List<OpenDetailsDTO>> openDetails = restaurantDTO.getOpenDetails();
        assertThat(openDetails).hasSize(7);
        {
            final List<OpenDetailsDTO> openDetailsDTOS = openDetails.get(DayOfWeek.MONDAY);
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(0);
                assertThat(openDetailsDTO.getStart()).isEqualTo("11:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("14:30");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(1);
                assertThat(openDetailsDTO.getStart()).isEqualTo("18:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("23:00");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
        }

        {
            final List<OpenDetailsDTO> openDetailsDTOS = openDetails.get(DayOfWeek.FRIDAY);
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(0);
                assertThat(openDetailsDTO.getStart()).isEqualTo("11:30");
                assertThat(openDetailsDTO.getEnd()).isEqualTo("14:30");
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.OPEN);
            }
            {
                final OpenDetailsDTO openDetailsDTO = openDetailsDTOS.get(1);
                assertThat(openDetailsDTO.getStart()).isEmpty();
                assertThat(openDetailsDTO.getEnd()).isEmpty();
                assertThat(openDetailsDTO.getType()).isEqualTo(TypeEnum.CLOSE);
            }
        }

    }

}
