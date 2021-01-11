package com.ba.restaurant.service;

import com.ba.restaurant.builder.WaiterDTOBuilder;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.exception.SystemException;
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

import static org.mockito.ArgumentMatchers.isNotNull;
import static org.mockito.ArgumentMatchers.nullable;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@RunWith(MockitoJUnitRunner.Silent.class)
public class WaiterServiceTest {

    @InjectMocks
    WaiterService waiterService;

    @Mock
    WaiterRepository waiterRepository;
    private WaiterDTO waiterDTO = new WaiterDTO();
    private List<WaiterDTO> waiterDTOS = new ArrayList<>();
    private List<Waiter> waiters= new ArrayList<>();
    private Waiter waiter= new Waiter();

    @Mock
    private WaiterMapper waiterMapper;

    @Before
    public void setUp() throws Exception {
        waiterDTO = new WaiterDTOBuilder().waiterId(1L).waiterMail("aa").waiterName("zuleyha").address("aa")
                .phone(2L).media(null).build();
        waiterDTOS.add(waiterDTO);
        waiter.setId(1L);
        waiter.setMedia(null);
        waiter.setPhone(5L);
        waiter.setAddress("kk");
        waiter.setWaiterName("ww");
        waiter.setWaiterMail("ss");
    }

    @Test
    public void shouldAddNewWaiter() {
        Mockito.when(waiterRepository.save(waiter)).thenReturn(waiter);
        Mockito.when(waiterMapper.toEntity(waiterDTO)).thenReturn(waiter);
        WaiterDTO res = waiterService.addWaiter(waiterDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), waiterDTO.getId());
    }

    @Test(expected = SystemException.class)
    public void NotAdd(){
        waiterService.addWaiter(null);
    }

    @Test(expected = SystemException.class)
    public void NotUpdate(){
        waiter.setId(null);
        waiterService.updateWaiter(null);
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
        Mockito.when(waiterRepository.findAll()).thenReturn(waiters);
        Mockito.when(waiterMapper.toDTOs(waiters)).thenReturn(waiterDTOS);
        List<WaiterDTO> res = waiterService.listAllWaiter();
        Assert.assertNotNull(res);
        Assert.assertEquals(res.get(0).getId(), waiterDTOS.get(0).getId());
    }

    @Test(expected = SystemException.class)
    public void NotGetId(){
        waiter.setId(null);
        waiterService.deleteWaiterById(waiter.getId());
    }
    @Test
    public void shouldGetWaiterById() {
        Mockito.when(waiterRepository.findById(1L)).thenReturn( Optional.of(waiter));
        Mockito.when(waiterMapper.toDTO(waiter)).thenReturn(waiterDTO);
        WaiterDTO waiterDTO1 = waiterService.getWaiterById(1L);
        Assert.assertNotNull(waiterDTO1);
        Assert.assertEquals(waiterDTO1.getId(), waiterDTO.getId());
    }

    @Test
    public void shouldDeleteWaiterById() {
        Long id = 1L;
        String delete = waiterService.deleteWaiterById(id);
        verify(waiterRepository, times(1)).deleteById(id);
    }

    @Test(expected = SystemException.class)
    public void NotDelete(){
        waiter.setId(null);
        waiterService.deleteWaiterById(waiter.getId());
    }
}