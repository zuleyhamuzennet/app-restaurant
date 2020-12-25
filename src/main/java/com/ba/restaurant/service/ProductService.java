package com.ba.restaurant.service;

import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.dto.ProductSliceWrapperDTO;
import com.ba.restaurant.dto.ProductWrapperDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.mapper.ProductMapper;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    public ProductDTO addProduct(ProductDTO productDTO) {
        Product product = ProductMapper.INSTANCE.toEntity(productDTO);
        for (int i = 0; i < productDTO.getCategoryListId().size(); i++) {
            Optional<Category> category = categoryRepository.findById(productDTO.getCategoryListId().get(i));
            category.get().getProducts().add(product);
        }
        productRepository.save(product);
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO) {
        Product product = ProductMapper.INSTANCE.toEntity(productDTO);
        List<Category> categoryList = categoryRepository.findAllById(productDTO.getCategoryListId());
        product.setCategories(categoryList);
        productRepository.saveAndFlush(product);
        return productDTO;

    }

    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id).get();
        ProductDTO productDTO = ProductMapper.INSTANCE.toDTO(product);
        return productDTO;
    }

    public ProductWrapperDTO searchProducts(Pageable pageable) {
        Page<Product> productPage = productRepository.findAll(pageable);
        List<ProductDTO> productDTOS = new ArrayList<>();
        productPage.getContent().forEach(product -> {
            ProductDTO productDTO = ProductMapper.INSTANCE.toDTO(product);
            productDTOS.add(productDTO);
        });
        ProductWrapperDTO productWrapperDTO = new ProductWrapperDTO();
        productWrapperDTO.setListProductDTO(productDTOS);
        productWrapperDTO.setTotalcount(productPage.getTotalElements());

        return productWrapperDTO;
    }

    public ProductSliceWrapperDTO clientSearchProduct(Long id, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Slice<Product> productSlice = productRepository.findProductsByCategoriesId(id, pageable);
        List<Product> products = productSlice.toList();
        List<ProductDTO> productDTOS = ProductMapper.INSTANCE.toDTOS(products);
        ProductSliceWrapperDTO productSliceWrapperDTO = new ProductSliceWrapperDTO();
        productSliceWrapperDTO.setListProductDTO(productDTOS);
        productSliceWrapperDTO.setHasNext(productSlice.hasNext());
        return productSliceWrapperDTO;
    }


    public List<ProductDTO> listAllProduct() {
        List<ProductDTO> productDTOS = new ArrayList<>();
        List<Product> products = productRepository.findAll();
        products.forEach(product -> productDTOS.add(ProductMapper.INSTANCE.toDTO(product)));
        return productDTOS;
    }

    public String deleteProduct(Long id) {
        Optional<Product> product = productRepository.findById(id);
        product.get().getCategories().forEach(category -> category.getProducts().remove(product.get()));
        productRepository.deleteById(id);
        return null;
    }


}
