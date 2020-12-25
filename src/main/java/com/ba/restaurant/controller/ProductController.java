package com.ba.restaurant.controller;

import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.dto.ProductSliceWrapperDTO;
import com.ba.restaurant.dto.ProductWrapperDTO;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.service.CategoryService;
import com.ba.restaurant.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public ProductDTO addProduct(@RequestBody ProductDTO productDTO) {
        productService.addProduct(productDTO);
        return productDTO;
    }

    @GetMapping("/search")
    public ProductWrapperDTO searchProduct(@RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "15") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productService.searchProducts(pageable);

    }

    @GetMapping("/searchC/{id}")
    public ProductSliceWrapperDTO loadMoreProduct(@PathVariable Long id,
                                                  @RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "10") int size) {
        return productService.clientSearchProduct(id, page, size);
    }

    @GetMapping("/list")
    public List<ProductDTO> listAllProduct() {
        return productService.listAllProduct();
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PutMapping("/update/")
    public ProductDTO updateProduct(@RequestBody ProductDTO productDTO) {
        productService.updateProduct(productDTO);
        return productDTO;
    }

    @DeleteMapping("/delete/{id}")
    public Long deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
        return id;
    }

}
