package com.ba.restaurant.dtoBuilder;

import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.dto.ProductDTO;

public class ProductDTOBuilder extends DTOBuilder {
    private Long id;
    private String productName;
    private String description;
    private double price;
    private String categoryName;
    private Long categoryId;

    public ProductDTOBuilder id(Long id){
        this.setId(id);
        return this;
    }
    public ProductDTOBuilder productName(String productName){
        this.productName=productName;
        return this;
    }
    public ProductDTOBuilder categoryName(String categoryName){
        this.categoryName=categoryName;
        return this;
    }
    public ProductDTOBuilder categoryId(Long categoryId){
        this.categoryId=categoryId;
        return this;
    }
    public ProductDTOBuilder description(String description){
        this.description=description;
        return this;
    }
    public ProductDTOBuilder price(Long price){
        this.price=price;
        return this;
    }

    @Override
    public ProductDTO build(){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(getId());
        productDTO.setDescription(this.description);
        productDTO.setProductName(this.productName);
        productDTO.setCategoryId(this.categoryId);
        productDTO.setPrice(this.price);
        return productDTO;

    }
}
