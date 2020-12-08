package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.entity.Cart;
import com.ba.restaurant.repository.CartRepository;
import com.ba.restaurant.repository.CategoryRepository;
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
public class CartServiceTest {

    @InjectMocks
    private CartService cartService;

    @Mock
    private CartRepository cartRepository;

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
    public void shouldAddNewCart1()
    {

        Mockito.when(cartRepository.saveAll(Mockito.any())).thenReturn(DTOConverter.cartConverter(cartDTOS));
        List<CartDTO> cartDTOS1= cartService.addCart(cartDTOS);

        Assert.assertNotNull(cartDTOS1);
        Assert.assertEquals(cartDTOS1.get(0).getId(),cartDTOS.get(0).getId());
    }

    @Test
    public void shouldListCart(){
        List<CartDTO> cartDTOList= cartService.listAllCarts();
        Assert.assertNotNull(cartDTOList);
    }


}