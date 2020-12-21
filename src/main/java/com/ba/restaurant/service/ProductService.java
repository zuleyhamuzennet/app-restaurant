package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    CategoryService categoryService;


    public ProductDTO addProduct(ProductDTO productDTO) {

        Product product = DTOConverter.productConverter(productDTO);
       /* List<Category> categoryList = categoryRepository.findAllById(productDTO.getCategoryListId());
        product.setCategories(categoryList);*/

        for (int i = 0; i < productDTO.getCategoryListId().size(); i++) {
            Optional<Category> category = categoryRepository.findById(productDTO.getCategoryListId().get(i));
            category.get().getProducts().add(product);
        }
        productRepository.save(product);
        return productDTO;
    }

    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id).get();
        ProductDTO productDTO = EntityConverter.productConverterDTO(product);
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO) {

        Product product = DTOConverter.productConverter(productDTO);
        List<Category> categoryList = categoryRepository.findAllById(productDTO.getCategoryListId());
        product.setCategories(categoryList);
       /* for (int i = 0; i < productDTO.getCategoryListId().size(); i++) {
            Optional<Category> category = categoryRepository.findById(productDTO.getCategoryListId().get(i));
            category.get().getProducts().add(product);
        }*/
        productRepository.saveAndFlush(product);
        return productDTO;

    }

    public List<ProductDTO> listAllProduct() {
        List<ProductDTO> productDTOS = new ArrayList<>();
        List<Product> products = productRepository.findAll();
        products.forEach(product -> productDTOS.add(EntityConverter.productConverterDTO(product)));
        return productDTOS;
    }

    public String deleteProduct(long id) {
        Optional<Product> product = productRepository.findById(id);
        product.get().getCategories().forEach(category -> category.getProducts().remove(product.get()));

        productRepository.deleteById(id);
        return null;
    }


}
