package com.ba.restaurant.service;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.repository.WaiterRepository;
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
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class WaiterServiceTest {

    @InjectMocks
    WaiterService waiterService;

    @Mock
    WaiterRepository waiterRepository;

    private Waiter waiter= new Waiter();
    private WaiterDTO waiterDTO= new WaiterDTO();
    private List<Waiter> waiters= new ArrayList<>();
    private List<WaiterDTO> waiterDTOS= new ArrayList<>();


    @Before
    public void setUp() throws Exception{
        waiter.setWaiterName("züleyha");
        waiter.setWaiterId(1L);
        waiters.add(waiter);

        waiterDTO.setWaiterName("züleyha");
        waiterDTO.setWaiterId(1L);
        waiterDTOS.add(waiterDTO);

    }
    @Test
    public void shouldAddNewWaiter(){
        Mockito.when(waiterRepository.save(waiter)).thenReturn(waiter);
        WaiterDTO waiterDTO1= waiterService.addWaiter(waiterDTO);

        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1,waiterDTO);
    }

    @Test
    public void shouldListAllWaiters(){
        Mockito.when(waiterRepository.findAll()).thenReturn(waiters);
        List<WaiterDTO> waiterDTOS1= waiterService.listAllWaiter();

        Assert.assertNotNull(waiterDTOS1);
        Assert.assertEquals(waiterDTOS1,waiterDTOS);
    }

    @Test
    public void shouldGetWaiterById(){
        Long id=1L;
        Mockito.when(waiterRepository.findById(id)).thenReturn(Optional.of(waiter));

        WaiterDTO waiterDTO1= waiterService.getWaiterById(id);

        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1.getWaiterId(),waiterDTO.getWaiterId());
    }

    @Test
    public void shoouldDeleteWaiterById(){
        Long id= 1L;
        String delete=waiterService.deleteWaiterById(id);
        Assert.assertEquals(delete,"silindi :"+id);
        //Mockito.verify(waiterRepository,Mockito.times(1));
    }

}