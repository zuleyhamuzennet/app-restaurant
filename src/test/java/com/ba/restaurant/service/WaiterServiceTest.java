package com.ba.restaurant.service;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.dtoBuilder.WaiterDTOBuilder;
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

@RunWith(MockitoJUnitRunner.Silent.class)
public class WaiterServiceTest {

    @InjectMocks
    WaiterService waiterService;

    @Mock
    WaiterRepository waiterRepository;

    private WaiterDTO waiterDTO= new WaiterDTO();
    private List<WaiterDTO> waiterDTOS= new ArrayList<>();


    @Before
    public void setUp() throws Exception{

        waiterDTO= new WaiterDTOBuilder().waiterId(1L).waiterName("zuleyha").build();
        waiterDTOS.add(waiterDTO);

    }
    @Test
    public void shouldAddNewWaiter(){
        Mockito.when(waiterRepository.save(Mockito.any())).thenReturn(DTOConverter.waiterConverter(waiterDTO));
        WaiterDTO waiterDTO1= waiterService.addWaiter(waiterDTO);

        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1,waiterDTO);
    }
    @Test
    public void shouldUpdateWaiter(){

        Mockito.when(waiterRepository.saveAndFlush(Mockito.any())).thenReturn(DTOConverter.waiterConverter(waiterDTO));
        WaiterDTO waiterDTO1= waiterService.addWaiter(waiterDTO);

        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1.getWaiterId(),waiterDTO.getWaiterId());
    }

    @Test
    public void shouldListAllWaiters(){

        List<WaiterDTO> waiterDTOS1= waiterService.listAllWaiter();
        Assert.assertNotNull(waiterDTOS1);

    }

    @Test
    public void shouldGetWaiterById(){
        Long id=1L;
        Mockito.when(waiterRepository.findById(id)).thenReturn(Optional.of(DTOConverter.waiterConverter(waiterDTO)));
        WaiterDTO waiterDTO1= waiterService.getWaiterById(id);
        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1.getWaiterId(),waiterDTO.getWaiterId());
    }

    @Test
    public void shoouldDeleteWaiterById(){
        Long id= 1L;
        String delete=waiterService.deleteWaiterById(id);
        verify(waiterRepository,times(1)).deleteById(id);
    }

}