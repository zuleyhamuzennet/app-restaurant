package com.ba.restaurant.controller;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.service.CategoryService;
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
    @Autowired
    CategoryService categoryService;

    @PostMapping("/add")
    public ProductDTO addProduct(@RequestBody ProductDTO productDTO){

        productService.addProduct(productDTO);
        return productDTO;
    }

    @GetMapping("/list")
    public List<ProductDTO> listAllProduct(){
        return productService.listAllProduct();
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable Long id){

        return productService.getProductById(id);
    }

    @PutMapping("/update/")
    public ProductDTO updateProduct(@RequestBody ProductDTO productDTO){
        productService.updateProduct(productDTO);
        return productDTO;

    }

    @DeleteMapping("/delete/{id}")
    public Long deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
        return id;
    }

}
