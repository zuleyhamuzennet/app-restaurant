package com.ba.restaurant.controller;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.service.WaiterService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;
import static org.mockito.Mockito.verify;


@RunWith(MockitoJUnitRunner.class)
public class WaiterControllerTest {

    @InjectMocks
    WaiterController waiterController;

    @Mock
    WaiterService waiterService;

    private WaiterDTO waiterDTO= new WaiterDTO();
    private List<WaiterDTO> waiterDTOS= new ArrayList<>();


    @Before
    public void setUp() throws Exception{

        waiterDTO.setWaiterName("züleyha");
        waiterDTO.setWaiterId(1L);
        waiterDTOS.add(waiterDTO);

    }
    @Test
    public void shouldAddNewWaiter(){
        Mockito.when(waiterService.addWaiter(Mockito.any())).thenReturn(waiterDTO);
        WaiterDTO res= waiterController.addWaiter(waiterDTO);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getWaiterId(),waiterDTO.getWaiterId());
    }
    @Test
    public void shouldUpdateWaiter(){

        Mockito.when(waiterService.updateWaiter(Mockito.any())).thenReturn(waiterDTO);
        WaiterDTO res= waiterController.updateWaiter(waiterDTO);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getWaiterId(),waiterDTO.getWaiterId());
    }

    @Test
    public void shouldListAllWaiters(){

        List<WaiterDTO> waiterDTOS1=waiterController.listAllWaiter();
        Assert.assertNotNull(waiterDTOS1);

    }

    @Test
    public void shouldGetWaiterById(){
        Long id=1L;
        Mockito.when(waiterService.getWaiterById(id)).thenReturn(waiterDTO);
        WaiterDTO res= waiterController.getWaiterByID(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getWaiterId(),waiterDTO.getWaiterId());
    }

    @Test
    public void shoouldDeleteWaiterById(){
        Long id= 1L;
        verify(waiterService).deleteWaiterById(id);
    }


}