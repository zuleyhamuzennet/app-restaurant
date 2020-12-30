package com.ba.restaurant.controller;

import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.CategoryService;
import com.ba.restaurant.service.ProductService;
import com.ba.restaurant.exception.BusinessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public ProductDTO addProduct(@Valid @RequestBody ProductDTO productDTO) {
        productService.addProduct(productDTO);
        return productDTO;
    }

    @GetMapping("/search")
    public Page<ProductDTO> searchProduct(@RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "15") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productService.searchProducts(pageable);
    }

    @GetMapping("/searchC/{id}")
    public Slice<ProductDTO> loadMoreProduct(@PathVariable Long id,
                                             @RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size) {
        if (id == null) {
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        return productService.clientSearchProduct(id, page, size);
    }

    @GetMapping("/list")
    public List<ProductDTO> listAllProduct() {
        return productService.listAllProduct();
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable Long id) {
        if (id == null) {
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return productService.getProductById(id);
    }

    @PutMapping("/update/")
    public ProductDTO updateProduct(@Valid @RequestBody ProductDTO productDTO) {
        productService.updateProduct(productDTO);
        return productDTO;
    }

    @DeleteMapping("/delete/{id}")
    public Long deleteProduct(@PathVariable Long id) {
        if (id == null) {
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        productService.deleteProduct(id);
        return null;
    }

}
