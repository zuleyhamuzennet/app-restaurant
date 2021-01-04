package com.ba.restaurant.service;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.entity.*;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.mapper.CartMapper;
import com.ba.restaurant.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    ItemOrdersRepository itemOrdersRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    WaiterRepository waiterRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartMapper cartMapper;

    public List<CartDTO> listAllCarts() {
        List<Cart> carts = cartRepository.findAll();
        return cartMapper.toDTOs(carts);
    }

    @Transactional()
    public CartDTO add(CartDTO cartDTO) {
        Cart cart = cartMapper.toEntity(cartDTO);
        setCartWaiter(cartDTO, cart);
        setCartCustomer(cartDTO, cart);
        cartRepository.save(cart);
        List<ItemsOrder> itemsOrderList = new ArrayList<>();
        setOrderItemProduct(cartDTO, cart, itemsOrderList);
        itemOrdersRepository.saveAll(itemsOrderList);

        return cartMapper.toDTO(cart);
    }

    private void setOrderItemProduct(CartDTO cartDTO, Cart cart, List<ItemsOrder> itemsOrderList) {
        cartDTO.getOrderItemDTOList().forEach(orderItemDTO -> {

            Optional<Product> optionalProduct = productRepository.findById(orderItemDTO.getProductId());
            if (optionalProduct.isEmpty()) {
                throw new BusinessRuleException("Girilen ürün...");
            }
            ItemsOrder itemsOrder = new ItemsOrder();
            itemsOrder.setProduct(optionalProduct.get());
            itemsOrder.setCart(cart);
            itemsOrder.setPrice(orderItemDTO.getPrice());
            itemsOrder.setPiece(orderItemDTO.getPiece());
            itemsOrderList.add(itemsOrder);
        });
    }

    private void setCartCustomer(CartDTO cartDTO, Cart cart) {
        if (cartDTO.getCustomerId() != 0) {
            Optional<Customer> optionalCustomer = customerRepository.findById(cartDTO.getCustomerId());
            if (optionalCustomer.isPresent()) {
                Customer customer = optionalCustomer.get();
                cart.setCustomer(customer);
            }
        }
    }

    private void setCartWaiter(CartDTO cartDTO, Cart cart) {
        if (cartDTO.getWaiterId() != 0) {
            Optional<Waiter> optionalWaiter = waiterRepository.findById(cartDTO.getWaiterId());
            if (optionalWaiter.isPresent()) {
                Waiter waiter = optionalWaiter.get();
                cart.setWaiter(waiter);
            }
        }
    }
}