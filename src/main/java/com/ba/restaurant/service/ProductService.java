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

        Optional<Category> category=categoryRepository.findById(id);
        Product product=DTOConverter.productConverter(productDTO);
        product.setCategory(category.get());
        category.get().getProducts().add(product);
        productRepository.save(product);
        return productDTO;

    }

    public ProductDTO getProductById( Long id){
        Product product= productRepository.findById(id).get();
        ProductDTO productDTO=EntityConverter.productConverterDTO(product);
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO, Long id){
        Optional<Category> category=categoryRepository.findById(id);
        Product product=DTOConverter.productConverter(productDTO);
        product.setCategory(category.get());
        category.get().getProducts().add(product);
        productRepository.save(product);
        return productDTO;

    }

    public List<ProductDTO> listAllProduct(){
        List<ProductDTO> productDTOS= new ArrayList<>();
        List<Product> products= productRepository.findAll();
        products.forEach(product -> productDTOS.add(EntityConverter.productConverterDTO(product)));
        return productDTOS;
    }

    public void deleteProduct(long id)
    {
        productRepository.deleteById(id);
    }


}
