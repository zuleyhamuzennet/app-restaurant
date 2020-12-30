package com.ba.restaurant.controller;

import com.ba.restaurant.builder.ProductDTOBuilder;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.service.ProductService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.*;

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
        Mockito.when(productService.addProduct(Mockito.any())).thenReturn(productDTO);
        ProductDTO res = productController.addProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test
    public void shoulUpdateProduct() {
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
        List<ProductDTO> res= productService.listAllProduct();
        Assert.assertNotNull(res);
    }

    @Test
    public void ShouldLoadMore(){
        Pageable pageable= PageRequest.of(0,8);
        Slice<ProductDTO> slice=new SliceImpl<ProductDTO>(productDTOS);
        Assert.assertNotNull(slice);
    }

    @Test
    public void shouldSearchPage(){
        Pageable pageable = PageRequest.of(0, 8);
        Page<ProductDTO> page=new PageImpl<ProductDTO>(productDTOS);
        Mockito.when(productService.searchProducts(pageable)).thenReturn(page);
        Assert.assertNotNull(page);
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldDeleteProductIdNot(){
        productController.deleteProduct(null);
    }

    @Test
    public void shouldDeleteProductId() {
        Long id = 1L;
        Long response = productController.deleteProduct(id);
        Assert.assertNull(response);
    }
}