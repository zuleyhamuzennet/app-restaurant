package com.ba.restaurant.service;

import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.SystemException;
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

    @Autowired
    ProductMapper productMapper;

    public ProductDTO addProduct(ProductDTO productDTO) {
        if (productDTO == null) {
            throw new SystemException(BusinessMessages.canNotBeAdded);
        }
        Product product = productMapper.toEntity(productDTO);
        for (int i = 0; i < productDTO.getCategoryListId().size(); i++) {
            Optional<Category> category = categoryRepository.findById(productDTO.getCategoryListId().get(i));
            category.get().getProducts().add(product);
        }
        productRepository.save(product);
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO) {
        if (productDTO == null || productDTO.getId() == null) {
            throw new SystemException(BusinessMessages.canNotBeUpdated);
        }
        Product product = productMapper.toEntity(productDTO);
        List<Category> categoryList = categoryRepository.findAllById(productDTO.getCategoryListId());
        product.setCategories(categoryList);
        productRepository.saveAndFlush(product);
        return productDTO;
    }

    public ProductDTO getProductById(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        Product product = productRepository.findById(id).get();
        return productMapper.toDTO(product);
    }

    public Page<ProductDTO> searchProducts(Pageable pageable) {
        if (pageable.isUnpaged()) {
            throw new SystemException(BusinessMessages.listCanNotFound);
        }
        Page<ProductDTO> productPage = productRepository.findAll(pageable).map(productMapper::toDTO);
        return productPage;
    }

    public Slice<ProductDTO> clientSearchProduct(Long id, int page, int size) {
        if (id == null) {
            throw new SystemException(BusinessMessages.listCanNotFound);
        }
        Pageable pageable = PageRequest.of(page, size);
        Slice<ProductDTO> productSlice = productRepository.findProductsByCategoriesId(id, pageable).map(productMapper::toDTO);
        return productSlice;
    }

    public List<ProductDTO> listAllProduct() {
        List<Product> products = productRepository.findAll();
        return productMapper.toDTOS(products);
    }

    public String deleteProduct(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        Optional<Product> product = productRepository.findById(id);
        product.get().getCategories().forEach(category -> category.getProducts().remove(product.get()));
        productRepository.deleteById(id);
        return null;
    }
}
