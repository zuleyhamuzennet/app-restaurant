package com.ba.restaurant.converter;

import com.ba.restaurant.dto.*;
import com.ba.restaurant.entity.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class DTOConverter {


    public static Product productConverter(ProductDTO productDTO){
        Product product =new Product();

        product.setId(productDTO.getId());
        product.setProductName(productDTO.getProductName());
        product.setPrice(productDTO.getPrice());
        product.setDescription(productDTO.getDescription());

        product.getCategory().setCategoryName(productDTO.getCategoryName());
        product.getCategory().setCategoryId(productDTO.getCategoryId());


        return product;
    }

    public static TableCategory tableCategoryConverter(TableCategoryDTO tableCategoryDTO){
        TableCategory tableCategory= new TableCategory();

        tableCategory.setCount(tableCategoryDTO.getCount());
        tableCategory.setId(tableCategoryDTO.getId());
        tableCategory.setTableCategoryDesc(tableCategoryDTO.getTableCategoryDesc());
        tableCategory.setTableCategoryName(tableCategoryDTO.getTableCategoryName());

        return tableCategory;
    }

    public static Category categoryConverter(CategoryDTO categoryDTO){
        Category category= new Category();
        category.setCatDescription(categoryDTO.getCatDescription());
        category.setCategoryId(categoryDTO.getCategoryId());
        category.setCategoryName(categoryDTO.getCategoryName());

        return category;
    }
    public static Waiter waiterConverter(WaiterDTO waiterDTO){
        Waiter waiter= new Waiter();
        waiter.setWaiterId(waiterDTO.getWaiterId());
        waiter.setWaiterName(waiterDTO.getWaiterName());

        return waiter;
    }
    public static List<Cart> cartConverter(List<CartDTO> cartDTO){
        List<Cart> cartList= new ArrayList<>();
        for(int i= 0; i<cartDTO.size(); i++){
            Cart cart=new Cart();
            cart.setProductId(cartDTO.get(i).getProductId());
            cart.setId(cartDTO.get(i).getId());
            cart.setPiece(cartDTO.get(i).getPiece());
            cart.setPrice(cartDTO.get(i).getPrice());
            cart.setTableCartId(cartDTO.get(i).getTableCartId());
            cart.setTableCategoryId(cartDTO.get(i).getTableCategoryId());
            cart.setTotal(cartDTO.get(i).getTotal());
            cart.setProductName(cartDTO.get(i).getProductName());
            cart.setProductId(cartDTO.get(i).getProductId());
            cartList.add(cart);
        }


        return cartList;
    }

}
