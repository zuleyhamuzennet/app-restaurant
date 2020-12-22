package com.ba.restaurant.service;

import static org.mockito.Mockito.verify;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.builder.CategoryDTOBuilder;
import com.ba.restaurant.builder.ProductDTOBuilder;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.mapper.CategoryMapper;
import com.ba.restaurant.mapper.ProductMapper;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;
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
import java.util.Optional;


@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;
    private ProductDTO productDTO = new ProductDTO();
    private List<ProductDTO> productDTOS = new ArrayList<>();

    @Mock
    private CategoryRepository categoryRepository;
    private CategoryDTO categoryDTO = new CategoryDTO();
    private List<Category> categoryList = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        productDTO = new ProductDTOBuilder().id(1L).media(null).categoryListId(Collections.singletonList(1L)).productName("deneme")
                .description("desc").price(5L).build();
        categoryDTO = new CategoryDTOBuilder().categoryId(1L).media(null).catDescription("cate").categoryName("cate").build();
        productDTOS.add(productDTO);
        categoryRepository.save(CategoryMapper.INSTANCE.toEntity(categoryDTO));

    }

    @Test
    public void shouldAddProduct() {

        Mockito.when(categoryRepository.findById(Mockito.any())).thenReturn(Optional.of(CategoryMapper.INSTANCE.toEntity(categoryDTO)));
        Mockito.when(productRepository.save(Mockito.any())).thenReturn(ProductMapper.INSTANCE.toEntity(productDTO));

        ProductDTO res = productService.addProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test
    public void shouldGetProductById() {
        Long id = 1L;

        Mockito.when(productRepository.findById(id)).thenReturn(Optional.of(ProductMapper.INSTANCE.toEntity(productDTO)));
        ProductDTO res = productService.getProductById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());

    }

    @Test
    public void shouldUpdateProduct() {
        Mockito.when(categoryRepository.findAllById(Mockito.any())).thenReturn(categoryList);
        Mockito.when(productRepository.saveAndFlush(Mockito.any())).thenReturn(ProductMapper.INSTANCE.toEntity(productDTO));
        ProductDTO res = productService.updateProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test
    public void shouldListAllProduct() {
        Mockito.when(productRepository.findAll()).thenReturn(ProductMapper.INSTANCE.toEntities(productDTOS));
        List<ProductDTO> responses = productService.listAllProduct();
        Assert.assertNotNull(responses);
        // Assert.assertEquals(responses,productService.listAllProduct().size());
    }

    @Test
    public void shouldDeleteProductId() {
        Long id = 1L;
        Mockito.when(productRepository.findById(Mockito.any())).thenReturn(Optional.of(ProductMapper.INSTANCE.toEntity(productDTO)));
        ProductDTO res = productService.getProductById(id);
        Assert.assertNotNull(res);

    }

}