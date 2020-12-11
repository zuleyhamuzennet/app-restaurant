package com.ba.restaurant.controller;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.service.ProductService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.internal.verification.VerificationModeFactory;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class ProductControllerTest {

    @InjectMocks
    ProductController productController;

    @Mock
    ProductService productService;
    private ProductDTO productDTO= new ProductDTO();
    private List<ProductDTO> productDTOS= new ArrayList<>();

    @Before
    public void setUp() throws Exception{


        productDTO.setDescription("şerbetli tatlı");
        productDTO.setPrice(5);
        productDTO.setProductName("baklava");
        productDTO.setId(1L);
        //productDTO.setCategoryName("tatlı");
        //productDTO.setCategoryId(1L);
        productDTOS.add(productDTO);

    }

    @Test
    public void shouldAddProduct() {

        Long id= 1L;
     //   Mockito.when(productService.addProduct(productDTO,id)).thenReturn(productDTO);
       // ProductDTO res =productController.addProduct(productDTO,id);
      //  Assert.assertNotNull(res);
      //  Assert.assertEquals(res.getId() , productDTO.getId());
    }
    @Test
    public void shoulUpdateProduct() {

        Long id= 1L;
        Mockito.when(productService.updateProduct(productDTO,id)).thenReturn(productDTO);
        ProductDTO res =productController.updateProduct(productDTO,id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId() , productDTO.getId());
    }

    @Test
    public void shouldGetProductById(){
        Long id=1L;
        Mockito.when(productService.getProductById(id)).thenReturn(productDTO);
        ProductDTO res=productController.getProductById(id);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(),productDTO.getId());

    }
    @Test
    public void shouldListAllProduct(){
        List<ProductDTO> responses= productController.listAllProduct();
        Assert.assertNotNull(responses);
    }
    @Test
    public void shouldDeleteProductId(){
        Long id =1L;
      //  Long response=productController.deleteProduct(id);
        //Assert.assertNotNull(response);
    }


}