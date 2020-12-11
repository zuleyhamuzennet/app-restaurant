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
        productDTO.setCategories(product.getCategories());

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
    public static MediaDTO mediaConverterDTO(Media media){
        MediaDTO mediaDTO= new MediaDTO();
        mediaDTO.setFileContent(media.getFileContent());
        mediaDTO.setMediaId(media.getMediaId());
        mediaDTO.setMediaName(media.getMediaName());
        return mediaDTO;
    }


    public static CategoryDTO categoryConverterDTO(Category category){
        CategoryDTO categoryDTO= new CategoryDTO();
        categoryDTO.setCatDescription(category.getCatDescription());
        categoryDTO.setCategoryId(category.getCategoryId());
        categoryDTO.setCategoryName(category.getCategoryName());
        categoryDTO.setMedia(category.getMedia());

        return categoryDTO;
    }

    public static WaiterDTO waiterConverterDTO(Waiter waiter){
        WaiterDTO waiterDTO= new WaiterDTO();
        waiterDTO.setWaiterId(waiter.getWaiterId());
        waiterDTO.setWaiterName(waiter.getWaiterName());
        waiterDTO.setWaiterMail(waiter.getWaiterMail());
        waiterDTO.setMedia(waiter.getMedia());

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
        cartDTO.setWaiterId(cart.getWaiterId());

        return cartDTO;
    }
    public static UserDTO userConverterDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setEnabled(user.isEnabled());
        userDTO.setPassword(user.getPassword());
        userDTO.setRoles(user.getRoles());
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        return userDTO;

    }
    public static RoleDTO roleConverterDTO(Role role){
        RoleDTO roleDTO=new RoleDTO();
        roleDTO.setId(roleDTO.getId());
        roleDTO.setName(roleDTO.getName());
        roleDTO.setUsers(role.getUsers());
        return roleDTO;
    }
}
