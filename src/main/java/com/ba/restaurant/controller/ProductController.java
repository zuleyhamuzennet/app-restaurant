package com.ba.restaurant.controller;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.service.CategoryService;
import com.ba.restaurant.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;
    @Autowired
    CategoryService categoryService;


    @PostMapping("/add")
    public void addProduct(@RequestBody Product product, @RequestParam Long id){

        Set<Product> products= new HashSet<>();
        products.add(product);
        Category opCategory= categoryService.getCategorytById(id).get();
        opCategory.getProducts().add(product);
        productService.addProduct(products);


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
    public Product updateProduct(@RequestBody Product product, @RequestParam Long id){
        Optional<Category> optionalCategory = categoryService.getCategorytById(id);
        optionalCategory.get().getProducts().add(productService.updateProduct(product));
        categoryService.updateCategory(optionalCategory.get());
        return product;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
    }

}
