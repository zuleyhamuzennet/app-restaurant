package com.ba.restaurant.controller;

import com.ba.restaurant.entity.ApplicationPropertiesInfo;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/properties")
public class InfoController {



    @Value("${"+ ApplicationPropertiesInfo.serverPort +"}")
    private String serverPort;

    @Value("${"+ApplicationPropertiesInfo.h2ConsoleEnable+"}")
    private String h2ConsoleEnabled;

    @Value("${"+ApplicationPropertiesInfo.dataSourceUrl+"}")
    private String dataSourceUrl;

    @Value("${"+ApplicationPropertiesInfo.jpaShowSql+"}")
    private String jpaShowSql;

    @Value("${"+ApplicationPropertiesInfo.jpaHibernateFormatSql+"}")
    private String jpaHibernateFormatSql;

    @Value("${"+ApplicationPropertiesInfo.logLevelHibernateType+"}")
    private String logLevelHibernateType;

    @Value("${"+ApplicationPropertiesInfo.SPRING_PROFILE_ACTIVE+"}")
    private String springProfiles;




    @GetMapping("/info")
    public String getInfo(){

        JSONArray jsonArray= new JSONArray();
        JSONObject jsonObject= new JSONObject();
        jsonObject.put("key",ApplicationPropertiesInfo.serverPort);
        jsonObject.put("value",serverPort);
        jsonArray.add(jsonObject);

        JSONObject jsonObject1= new JSONObject();
        jsonObject1.put("key",ApplicationPropertiesInfo.jpaShowSql);
        jsonObject1.put("value",jpaShowSql);
        jsonArray.add(jsonObject1);

        JSONObject jsonObject2= new JSONObject();
        jsonObject2.put("key",ApplicationPropertiesInfo.jpaHibernateFormatSql);
        jsonObject2.put("value",jpaHibernateFormatSql);
        jsonArray.add(jsonObject2);

        JSONObject jsonObject3= new JSONObject();
        jsonObject3.put("key",ApplicationPropertiesInfo.logLevelHibernateType);
        jsonObject3.put("value",logLevelHibernateType);
        jsonArray.add(jsonObject3);

        JSONObject jsonObject4= new JSONObject();
        jsonObject4.put("key",ApplicationPropertiesInfo.dataSourceUrl);
        jsonObject4.put("value",dataSourceUrl);
        jsonArray.add(jsonObject4);

        JSONObject jsonObject5= new JSONObject();
        jsonObject5.put("key",ApplicationPropertiesInfo.SPRING_PROFILE_ACTIVE);
        jsonObject5.put("value",springProfiles);
        jsonArray.add(jsonObject5);

        return jsonArray.toJSONString();
    }

}
