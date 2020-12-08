package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.service.CartService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(MockitoJUnitRunner.class)
public class CartControllerTest {

    @InjectMocks
    CartController cartController;

    @Mock
    CartService cartService;

    private CartDTO cartDTO= new CartDTO();
    private List<CartDTO> cartDTOS= new ArrayList<>();
    private Date date=  new Date();


    @Before
    public void setUp() throws Exception{

        cartDTO.setProductId(2L);
        cartDTO.setCartDate(date);
        cartDTO.setProductName("elma");
        cartDTO.setTotal(5L);
        cartDTO.setPrice(2L);
        cartDTO.setPiece(2L);
        cartDTO.setTotal(8L);
        cartDTO.setTableCategoryId(1L);
        cartDTOS.add(cartDTO);

    }


    @Test
    public void shouldAddCart(){
        Mockito.when(cartService.addCart(Mockito.any())).thenReturn(cartDTOS);
        List<CartDTO> res= cartController.addCart(cartDTOS);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.get(0).getId(),cartDTOS.get(0).getId());
    }
    @Test
    public void shouldListAllCart(){
        List<CartDTO> cartDTOList= cartController.listAllCarts();
        Assert.assertNotNull(cartDTOList);
    }


}