package com.ba.restaurant.service;

import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;


    public void  addProduct(Set<Product> product){
        productRepository.saveAll(product);
    }

    public Product getProductById( Long id){
        Product product= productRepository.findById(id).get();
        return product;
    }
    public Product updateProduct(Product product){
        productRepository.saveAndFlush(product);
        return product;
    }
    public List<Product> listAllProduct(){
        List<Product> allProducts= new ArrayList<>();
        productRepository.findAll().forEach(product-> allProducts.add(product));
        return allProducts;
    }

    public void deleteProduct(long id)
    {
        productRepository.deleteById(id);
    }



}
