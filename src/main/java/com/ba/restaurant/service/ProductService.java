package com.ba.restaurant.service;
import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    CategoryService categoryService;


    public ProductDTO  addProduct(ProductDTO productDTO, Long id){

        Product product=DTOConverter.productConverter(productDTO);
        Optional<Category> category=categoryRepository.findById(id);
        product.setCategory(category.get());
        productRepository.save(product);
        return productDTO;
    }


    public ProductDTO getProductById( Long id){
        Product product= productRepository.findById(id).get();
        ProductDTO productDTO=EntityConverter.productConverterDTO(product);
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO, Long id){
        Product product=DTOConverter.productConverter(productDTO);
        Optional<Category> category=categoryRepository.findById(id);
        product.setCategory(category.get());
        productRepository.saveAndFlush(product);
        return productDTO;

    }

    public List<ProductDTO> listAllProduct(){
        List<ProductDTO> productDTOS= new ArrayList<>();
        List<Product> products= productRepository.findAll();
        products.forEach(product -> productDTOS.add(EntityConverter.productConverterDTO(product)));
        return productDTOS;
    }

    public String deleteProduct(long id)
    {
        productRepository.deleteById(id);

        return "product silindi :"+id;
    }


}
