package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.builder.CartDTOBuilder;
import com.ba.restaurant.exception.BusinessRuleException;
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

@RunWith(MockitoJUnitRunner.class)
public class CartControllerTest {

    @InjectMocks
    CartController cartController;

    @Mock
    CartService cartService;

    private CartDTO cartDTO = new CartDTO();
    private List<CartDTO> cartDTOS = new ArrayList<>();
    private Date date = new Date();

    @Before
    public void setUp() throws Exception {
        /*cartDTO = new CartDTOBuilder().tableCategoryId(1L).productName("deneme").productId(1L).waiterId(1L)
                .total(5L).price(4L).piece(1L).tableCartId(3L).id(1L).cartDate(date).build();
        cartDTOS.add(cartDTO);*/
    }

    @Test
    public void shouldAddCart() {
      /*  Mockito.when(cartService.addCart(Mockito.any())).thenReturn(cartDTOS);
        List<CartDTO> res = cartController.addCart(cartDTOS);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.get(0).getId(), cartDTOS.get(0).getId());
    */}

    @Test
    public void shouldListAllCart() {
        List<CartDTO> cartDTOList = cartController.listAllCarts();
        Assert.assertNotNull(cartDTOList);
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldAddCartNot(){
      /*  List<CartDTO> res=cartController.addCart(cartDTOS);
        Assert.assertNotNull(res);*/
    }
}