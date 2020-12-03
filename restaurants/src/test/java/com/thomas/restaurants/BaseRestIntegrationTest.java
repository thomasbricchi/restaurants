package com.thomas.restaurants;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thomas.restaurants.repository.RestaurantRepository;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrint;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@SpringBootTest()
@AutoConfigureMockMvc(print = MockMvcPrint.NONE)
public abstract class BaseRestIntegrationTest {

    @Autowired
    protected ObjectMapper objectMapper;

    @Autowired
    protected MockMvc mvc;

    @Autowired
    protected RestaurantRepository restaurantRepository;

}
