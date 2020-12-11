package com.ba.restaurant.service;
import static org.mockito.Mockito.verify;
import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.dtoBuilder.ProductDTOBuilder;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;
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

    @Before
    public void setUp() throws Exception{

        productDTO= new ProductDTOBuilder().id(1L).productName("deneme").description("desc").price(5L).categoryId(1L).categoryName("tatlı").build();
        productDTOS.add(productDTO);

        categoryRepository.save(DTOConverter.categoryConverter(categoryDTO));
    }

    @Test
   public void shouldAddProduct() {

        Mockito.when(categoryRepository.findById(Mockito.any())).thenReturn(Optional.of(DTOConverter.categoryConverter(categoryDTO)));
        Mockito.when(productRepository.save(Mockito.any())).thenReturn(DTOConverter.productConverter(productDTO));
        ProductDTO res =productService.addProduct(productDTO);
         Assert.assertNotNull(res);
        //Assert.assertEquals(res , productDTO);
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
        Mockito.when(categoryRepository.findById(Mockito.any())).thenReturn(Optional.of(DTOConverter.categoryConverter(categoryDTO)));
        Mockito.when(productRepository.saveAndFlush(Mockito.any())).thenReturn(DTOConverter.productConverter(productDTO));
        ProductDTO res=productService.updateProduct(productDTO,id);
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
        Mockito.when(productRepository.existsById(Mockito.any())).thenReturn(Boolean.FALSE);
       // Boolean response = productService.deleteProduct(id);

    }

}