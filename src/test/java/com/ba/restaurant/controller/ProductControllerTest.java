package com.ba.restaurant.controller;

import com.ba.restaurant.builder.ProductDTOBuilder;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.service.ProductService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class ProductControllerTest {

    @InjectMocks
    ProductController productController;

    @Mock
    ProductService productService;
    private ProductDTO productDTO = new ProductDTO();
    private List<ProductDTO> productDTOS = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        productDTO = new ProductDTOBuilder().id(1L).media(null).categoryListId(Collections.singletonList(2L)).productName("deneme")
                .description("desc").price(5L).build();
        productDTOS.add(productDTO);
    }

    @Test
    public void shouldAddProduct() {
        Long id = 1L;
        Mockito.when(productService.addProduct(Mockito.any())).thenReturn(productDTO);
        ProductDTO res = productController.addProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test
    public void shoulUpdateProduct() {
        Long id = 1L;
        Mockito.when(productService.updateProduct(Mockito.any())).thenReturn(productDTO);
        ProductDTO res = productController.updateProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test
    public void shouldGetProductById() {
        Long id = 1L;
        Mockito.when(productService.getProductById(id)).thenReturn(productDTO);
        ProductDTO res = productController.getProductById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test
    public void shouldListAllProduct() {
        List<ProductDTO> responses = productController.listAllProduct();
        Assert.assertNotNull(responses);
    }

    @Test
    public void shouldDeleteProductId() {
        Long id = 1L;
        Long response = productController.deleteProduct(id);
        Assert.assertNotNull(response);
    }
}