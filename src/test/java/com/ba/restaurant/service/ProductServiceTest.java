package com.ba.restaurant.service;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
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


        productDTO.setDescription("şerbetli tatlı");
        productDTO.setPrice(5);
        productDTO.setProductName("baklava");
        productDTO.setId(1L);
        productDTO.setCategoryName("tatlı");
        productDTO.setCategoryId(1L);
        productDTOS.add(productDTO);


        categoryDTO.setCategoryId(1L);
        categoryDTO.setCategoryName("tatlı");

        categoryRepository.save(DTOConverter.categoryConverter(categoryDTO));
    }

    @Test
   public void shouldAddProduct() {

        Long id= 1L;
        Mockito.when(categoryRepository.findById(Mockito.any())).thenReturn(Optional.of(DTOConverter.categoryConverter(categoryDTO)));
        Mockito.when(productRepository.save(Mockito.any())).thenReturn(DTOConverter.productConverter(productDTO));
        ProductDTO res =productService.addProduct(productDTO,id);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId() , productDTO.getId());
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
    public void shouldDeleteProductId(){
        Long id =1L;
        String response=productService.deleteProduct(id);
        verify(productRepository, VerificationModeFactory.times(1)).deleteById(id);
    }

}