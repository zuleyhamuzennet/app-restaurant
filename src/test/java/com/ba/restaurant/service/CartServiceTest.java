package com.ba.restaurant.service;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.builder.CartDTOBuilder;
import com.ba.restaurant.dto.OrderItemDTO;
import com.ba.restaurant.entity.*;
import com.ba.restaurant.mapper.CartMapper;
import com.ba.restaurant.repository.*;
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
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class CartServiceTest {

    @InjectMocks
    private CartService cartService;

    @Mock
    private CartRepository cartRepository;
    private CartDTO cartDTO = new CartDTO();
    private List<CartDTO> cartDTOS = new ArrayList<>();
    private Date date = new Date();
    private Cart cart = new Cart();
    private List<Cart> carts = new ArrayList<>();

    @Mock
    private WaiterRepository waiterRepository;
    private Waiter waiter = new Waiter();

    @Mock
    private CustomerRepository customerRepository;
    private Customer customer = new Customer();

    @Mock
    private CartMapper cartMapper;

    @Mock
    private ProductRepository productRepository;
    private Product product = new Product();

    @Mock
    private ItemOrdersRepository itemOrdersRepository;
    private OrderItemDTO orderItemDTO = new OrderItemDTO();
    private ItemsOrder itemsOrder = new ItemsOrder();
    private List<OrderItemDTO> orderItemDTOList = new ArrayList<>();
    private List<ItemsOrder> itemsOrders = new ArrayList<>();


    @Before
    public void setUp() throws Exception {
        itemsOrder.setPiece(1L);
        itemsOrder.setPrice(1L);
        itemsOrder.setProduct(product);
        itemsOrder.setId(1L);
        itemsOrder.setCart(cart);
        itemsOrders.add(itemsOrder);

        orderItemDTO.setId(1L);
        orderItemDTO.setProductId(1L);
        orderItemDTO.setPrice(5L);
        orderItemDTO.setPiece(2L);
        orderItemDTO.setCart(cart);
        orderItemDTOList.add(orderItemDTO);

        cart.setCustomer(customer);
        cart.setWaiter(waiter);
        cart.setId(1L);
        cart.setTotal(1L);
        cart.setCvc(2L);
        cart.setPaymentType("kredi");
        carts.add(cart);

        waiter.setWaiterMail("ff");
        waiter.setWaiterName("ss");
        waiter.setAddress("dd");
        waiter.setId(1L);
        waiter.setPhone(55L);
        waiter.setMedia(null);

        customer.setMedia(null);
        customer.setId(1L);
        customer.setPhone(55L);
        customer.setAddress("dd");
        customer.setName("dd");

        product.setId(1L);
        product.setProductName("dd");
        product.setDescription("ee");
        product.setPrice(5L);
        product.setCategories(null);

        cartDTO = new CartDTOBuilder().id(1l).customerId(1L).total(2L).waiterId(1L).orderItemDTOList(orderItemDTOList).paymentType("kredi").cartDate(date).build();
        cartDTOS.add(cartDTO);


    }

    @Test
    public void shouldAddNewCart1() {
        Mockito.when(cartMapper.toEntity(cartDTO)).thenReturn(cart);
        Mockito.when(waiterRepository.findById(cartDTO.getWaiterId())).thenReturn(Optional.of(waiter));
        Mockito.when(customerRepository.findById(cartDTO.getCustomerId())).thenReturn(Optional.of(customer));
        Mockito.when(cartRepository.save(cart)).thenReturn(cart);
        Mockito.when(productRepository.findById(orderItemDTO.getProductId())).thenReturn(Optional.of(product));
        Mockito.when(itemOrdersRepository.saveAll(Mockito.any())).thenReturn(itemsOrders);
        Mockito.when(cartMapper.toDTO(cart)).thenReturn(cartDTO);
        CartDTO res = cartService.add(cartDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), cartDTO.getId());
    }

    @Test
    public void shouldListCart() {
        Mockito.when(cartRepository.findAll()).thenReturn(carts);
        Mockito.when(cartMapper.toDTOs(carts)).thenReturn(cartDTOS);
        List<CartDTO> cartDTOList = cartService.listAllCarts();
        Assert.assertNotNull(cartDTOList);
        Assert.assertEquals(cartDTOList.get(0).getId(), cartDTOS.get(0).getId());
    }

}