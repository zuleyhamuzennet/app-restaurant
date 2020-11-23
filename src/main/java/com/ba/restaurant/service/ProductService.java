package com.ba.restaurant.service;

import com.ba.restaurant.entity.Product;
import com.ba.restaurant.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;


    public Product addProduct(Product product){
        return productRepository.save(product);
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
        List<Product> allProducts= new ArrayList<Product>();
        productRepository.findAll().forEach(product-> allProducts.add(product));
        return allProducts;
    }

    public void deleteProduct(long id)
    {
        productRepository.deleteById(id);
    }

    public List<String> getProductCategory(){
        return productRepository.findAllCategory();
    }

    public List<Product>  getProductByCategory(String category){
        return productRepository.getCategoryProduct(category);
    }
}
