package com.ba.restaurant.controller;

import com.ba.restaurant.entity.ApplicationPropertiesInfo;
import com.ba.restaurant.service.CategoryService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
public class InfoControllerTest {

    @InjectMocks
    private InfoController infoController;

    @Before
    public void setUp() throws Exception{


        JSONArray jsonArray= new JSONArray();
        JSONObject jsonObject= new JSONObject();
        jsonObject.put("jpaShowSql","jpaShowSql");
        jsonArray.add(jsonObject);
        jsonArray.toJSONString();

    }

    @Test
    public void shouldGetInfo(){

        String res= infoController.getInfo();
        Assert.assertNotNull(res);

    }

}