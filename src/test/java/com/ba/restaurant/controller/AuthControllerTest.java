package com.ba.restaurant.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class AuthControllerTest {
    @InjectMocks
    private AuthController authController;
    String locale = "tr";

    @Test
    public void shouldLogin() {
      //  String res = authController.login(locale);
    }
}