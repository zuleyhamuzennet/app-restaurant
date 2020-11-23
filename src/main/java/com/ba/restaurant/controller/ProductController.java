package com.ba.restaurant.controller;

import com.ba.restaurant.entity.Product;
import com.ba.restaurant.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;


    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product){

        productService.addProduct(product);
        return product;
    }
    @GetMapping("/list")
    public List<Product> listAllProduct(){
        return productService.listAllProduct();
    }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id){

        return productService.getProductById(id);
    }

    @PutMapping("/update/")
    public Product updateProduct(@RequestBody Product product){
        return productService.updateProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
    }


    @GetMapping("/category")
    public List<String> getByCategories(){
        return productService.getProductCategory();
    }

    @GetMapping("/category/list")
    public List<Product> getByCategoryId(@RequestParam String category){
        return productService.getProductByCategory(category);

    }

}
