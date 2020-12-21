package com.ba.restaurant.service;
import static org.mockito.Mockito.verify;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.builder.CategoryDTOBuilder;
import com.ba.restaurant.builder.ProductDTOBuilder;
import com.ba.restaurant.entity.Category;
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
    private ProductDTO productDTO= new ProductDTO();
    private List<ProductDTO> productDTOS= new ArrayList<>();

    @Mock
    private CategoryRepository categoryRepository;
    private CategoryDTO categoryDTO= new CategoryDTO();
    private List<Category> categoryList= new ArrayList<>();

    @Before
    public void setUp() throws Exception{

        List<Long> categoryListId= new ArrayList<>();
        categoryListId.add(1L);

        productDTO= new ProductDTOBuilder().id(1L).media(null).categoryListId(Collections.singletonList(2L)).productName("deneme")
                .description("desc").categories(categoryList).price(5L).build();

        categoryDTO = new CategoryDTOBuilder().categoryId(1L).media(null).catDescription("cate").categoryName("cate").build();

        productDTOS.add(productDTO);
        categoryRepository.save(DTOConverter.categoryConverter(categoryDTO));

    }

    @Test
   public void shouldAddProduct() {

        int index = 5;

      /*  Mockito.when(productRepository.findById(Mockito.any())).thenReturn(productDTO.getCategoryListId().forEach(2L););
        Mockito.when(categoryRepository.findById(Mockito.any())).thenReturn(Optional.of(productDTO.getCategoryListId().size(1L)));
        ProductDTO res =productService.addProduct(productDTO);
         Assert.assertNotNull(res);
        Assert.assertEquals(res.getId() , productDTO.getId());*/
    }

    @Test
    public void shouldGetProductById(){
        Long id=1L;
        Mockito.when(productRepository.findById(id)).thenReturn(Optional.of(DTOConverter.productConverter(productDTO)));
        ProductDTO productDTO1= productService.getProductById(id);

        Assert.assertNotNull(productDTO1);
        Assert.assertEquals(productDTO1.getId(),productDTO.getId());

    }
    @Test
    public void shouldUpdateProduct(){
        Long id=1L;
        Mockito.when(categoryRepository.findAllById(Mockito.any())).thenReturn(categoryList);
        Mockito.when(productRepository.saveAndFlush(Mockito.any())).thenReturn(DTOConverter.productConverter(productDTO));
        ProductDTO res=productService.updateProduct(productDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(),productDTO.getId());
    }

    @Test
    public void shouldListAllProduct(){
        List<ProductDTO> responses= productService.listAllProduct();
        Assert.assertNotNull(responses);
    }

    @Test
    public void shouldDeleteProductId() {
        Long id = 1L;
        Mockito.when(productRepository.findById(Mockito.any())).thenReturn(Optional.of(DTOConverter.productConverter(productDTO)));
        ProductDTO res = productService.getProductById(id);
        Assert.assertNotNull(res);

    }

}