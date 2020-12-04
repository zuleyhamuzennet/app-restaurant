package com.ba.restaurant.service;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;


    private Product product = new Product();
    private ProductDTO productDTO= new ProductDTO();
    private List<Product> products= new ArrayList<>();
    private List<ProductDTO> productDTOS= new ArrayList<>();

    @InjectMocks
    private CategoryService categoryService;

    @Mock
    private CategoryRepository categoryRepository;

    private Category category= new Category();
    private CategoryDTO categoryDTO= new CategoryDTO();





    @Before
    public void setUp() throws Exception{
        product.setDescription("şerbetli tatlı");
        product.setPrice(5);
        product.setProductName("baklava");
        product.setId(2L);
        products.add(product);

        productDTO.setDescription("şerbetli tatlı");
        productDTO.setPrice(5);
        productDTO.setProductName("baklava");
        productDTO.setId(2L);
        productDTOS.add(productDTO);


    }

    @Test
   public void shouldAddProduct() {

        Long id= 1L;

        Mockito.when(productRepository.save(product)).thenReturn(product);

        ProductDTO productDTO1 =productService.addProduct(productDTO,id);

        Assert.assertNotNull(productDTO1);
        Assert.assertEquals(productDTO1 , productDTO);
    }

    @Test
    public void shouldGetProductById(){
        Long id=1L;
        Mockito.when(productRepository.findById(id)).thenReturn(Optional.ofNullable(product));

        ProductDTO productDTO1= productService.getProductById(id);
        Assert.assertNotNull(productDTO1);
        //Assert.assertEquals(productDTO1.getId(),product1.get().getId());



    }

}