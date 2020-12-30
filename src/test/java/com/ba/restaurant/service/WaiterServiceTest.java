package com.ba.restaurant.service;

import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.builder.WaiterDTOBuilder;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.mapper.WaiterMapper;
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
    private WaiterDTO waiterDTO = new WaiterDTO();
    private List<WaiterDTO> waiterDTOS = new ArrayList<>();
    Waiter waiter= new Waiter();

    @Before
    public void setUp() throws Exception {
        waiterDTO = new WaiterDTOBuilder().waiterId(1L).waiterMail("aa").waiterName("zuleyha").address("aa")
                .phone(2L).media(null).build();
        waiterDTOS.add(waiterDTO);
        waiter=WaiterMapper.INSTANCE.toEntity(waiterDTO);
    }

    @Test
    public void shouldAddNewWaiter() {
        Mockito.when(waiterRepository.save(Mockito.any())).thenReturn(waiter);
        WaiterDTO res = waiterService.addWaiter(waiterDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), waiterDTO.getId());
    }

    @Test
    public void shouldUpdateWaiter() {
        Mockito.when(waiterRepository.saveAndFlush(Mockito.any())).thenReturn(WaiterMapper.INSTANCE.toEntity(waiterDTO));
        WaiterDTO waiterDTO1 = waiterService.updateWaiter(waiterDTO);
        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1.getId(), waiterDTO.getId());
    }

    @Test
    public void shouldListAllWaiters() {
        Mockito.when(waiterRepository.findAll()).thenReturn(WaiterMapper.INSTANCE.toEntities(waiterDTOS));
        List<WaiterDTO> waiterDTOS1 = waiterService.listAllWaiter();
        Assert.assertNotNull(waiterDTOS1);
    }

    @Test
    public void shouldGetWaiterById() {
        Long id = 1L;
        Mockito.when(waiterRepository.findById(id)).thenReturn( Optional.of(waiter));
        WaiterDTO waiterDTO1 = waiterService.getWaiterById(id);
        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1.getId(), waiterDTO.getId());
    }

    @Test
    public void shoouldDeleteWaiterById() {
        Long id = 1L;
        String delete = waiterService.deleteWaiterById(id);
        verify(waiterRepository, times(1)).deleteById(id);
    }
}