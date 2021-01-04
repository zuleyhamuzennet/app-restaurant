package com.ba.restaurant.service;

import com.ba.restaurant.builder.CategoryDTOBuilder;
import com.ba.restaurant.builder.ProductDTOBuilder;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.exception.SystemException;
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
    private List<Product> products= new ArrayList<>();

    @Mock
    private ProductMapper productMapper;
    private Product product =new Product();

    @Mock
    private CategoryRepository categoryRepository;
    private CategoryDTO categoryDTO = new CategoryDTO();
    private Category category= new Category();
    private List<Category> categoryList = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        productDTO = new ProductDTOBuilder().id(1L).media(null).categoryListId(Collections.singletonList(1L))
                .productName("deneme").description("desc").price(5L).build();
        categoryDTO = new CategoryDTOBuilder().categoryId(1L).media(null)
                .catDescription("cate").categoryName("cate").build();
        productDTOS.add(productDTO);
        category.setCategoryName("dd");
        category.setCatDescription("dd");
        category.setId(1L);
        categoryList.add(category);

        product.setCategories(categoryList);
        product.setMedia(null);
        product.setPrice(1L);
        product.setDescription("dd");
        product.setProductName("ff");
        product.setId(1L);
        products.add(product);

    }

    @Test
    public void shouldAddProduct() {
        Mockito.when(categoryRepository.findById(Mockito.any())).thenReturn(Optional.of(category));
        Mockito.when(productRepository.save(product)).thenReturn(product);
        Mockito.when(productMapper.toEntity(productDTO)).thenReturn(product);
        ProductDTO res = productService.addProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res, productDTO);
    }

    @Test(expected = SystemException.class)
    public void shouldAddProductNot() {
        ProductDTO res = productService.addProduct(null);
    }

    @Test
    public void shouldGetProductById() {
        Long id = 1L;
        Mockito.when(productRepository.findById(id)).thenReturn(Optional.of(product));
        Mockito.when(productMapper.toDTO(product)).thenReturn(productDTO);
        ProductDTO res = productService.getProductById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test(expected = SystemException.class)
    public void shouldGetProductNot() {
       Mockito.when(productService.getProductById(null));
    }


    @Test
    public void shouldUpdateProduct() {
        Mockito.when(categoryRepository.findAllById(Mockito.any())).thenReturn(categoryList);
        Mockito.when(productRepository.saveAndFlush(product)).thenReturn(product);
        Mockito.when(productMapper.toEntity(productDTO)).thenReturn(product);
        ProductDTO res = productService.updateProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), productDTO.getId());
    }

    @Test(expected = SystemException.class)
    public void shouldUpdateProductNot() {
        ProductDTO res = productService.updateProduct(null);
    }

    @Test
    public void shouldListAllProduct() {
        Mockito.when(productRepository.findAll()).thenReturn(products);
        Mockito.when(productMapper.toDTOS(products)).thenReturn(productDTOS);
        List<ProductDTO> responses = productService.listAllProduct();
        Assert.assertNotNull(responses);
        Assert.assertEquals(responses, productDTOS);
    }

    @Test
    public void shouldDeleteProductId() {
        Long id = 1L;
        Mockito.when(productRepository.findById(id)).thenReturn(Optional.of(product));
        String res = productService.deleteProduct(id);
        Assert.assertEquals(null, res);
    }

}