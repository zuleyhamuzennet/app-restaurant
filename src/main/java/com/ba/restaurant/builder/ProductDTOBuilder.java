package com.ba.restaurant.builder;
import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import java.util.List;

public class ProductDTOBuilder extends DTOBuilder {

    private String productName;
    private String description;
    private double price;
    private MediaDTO media;
    private List<Long> categoryListId;
    private List<Category> categories;

    public ProductDTOBuilder id(Long id){
        this.setId(id);
        return this;
    }

    public ProductDTOBuilder media(MediaDTO media){
        this.media=media;
        return this;
    }

    public ProductDTOBuilder productName(String productName){
        this.productName=productName;
        return this;
    }

    public ProductDTOBuilder categoryListId(List<Long> categoryListId){
        this.categoryListId=categoryListId;
        return this;
    }

    public ProductDTOBuilder categories(List<Category> categories){
        this.categories=categories;
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
        productDTO.setMedia(this.media);
        productDTO.setCategoryListId(this.categoryListId);
        productDTO.setCategories(this.categories);
        productDTO.setPrice(this.price);
        return productDTO;
    }
}
