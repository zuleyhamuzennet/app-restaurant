package com.ba.restaurant.converter;

import com.ba.restaurant.dto.*;
import com.ba.restaurant.entity.*;


public class EntityConverter {


    public static ProductDTO productConverterDTO(Product product){
        ProductDTO productDTO= new ProductDTO();
        productDTO.setDescription(product.getDescription());
        productDTO.setPrice(product.getPrice());
        productDTO.setProductName(product.getProductName());
        productDTO.setId(product.getId());

        productDTO.setCategoryName(product.getCategory().getCategoryName());
        productDTO.setCategoryId(product.getCategory().getCategoryId());



        return productDTO;
    }

    public static TableCategoryDTO tableCategoryConverterDTO(TableCategory tableCategory){
        TableCategoryDTO tableCategoryDTO= new TableCategoryDTO();
        tableCategoryDTO.setCount(tableCategory.getCount());
        tableCategoryDTO.setId(tableCategory.getId());
        tableCategoryDTO.setTableCategoryDesc(tableCategory.getTableCategoryDesc());
        tableCategoryDTO.setTableCategoryName(tableCategory.getTableCategoryName());

        return tableCategoryDTO;
    }


    public static CategoryDTO categoryConverterDTO(Category category){
        CategoryDTO categoryDTO= new CategoryDTO();
        categoryDTO.setCatDescription(category.getCatDescription());
        categoryDTO.setCategoryId(category.getCategoryId());
        categoryDTO.setCategoryName(category.getCategoryName());

        return categoryDTO;
    }

    public static WaiterDTO waiterConverterDTO(Waiter waiter){
        WaiterDTO waiterDTO= new WaiterDTO();
        waiterDTO.setWaiterId(waiter.getWaiterId());
        waiterDTO.setWaiterName(waiter.getWaiterName());

        return waiterDTO;
    }

    public static CartDTO cartConverterDTO(Cart cart){
        CartDTO cartDTO= new CartDTO();
        cartDTO.setId(cart.getId());
        cartDTO.setPiece(cart.getPiece());
        cartDTO.setPrice(cart.getPrice());
        cartDTO.setProductId(cart.getProductId());
        cartDTO.setProductName(cart.getProductName());
        cartDTO.setTableCartId(cart.getTableCartId());
        cartDTO.setTableCategoryId(cart.getTableCategoryId());
        cartDTO.setTotal(cart.getTotal());

        return cartDTO;
    }
}
