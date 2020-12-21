package com.ba.restaurant.converter;

import com.ba.restaurant.dto.*;
import com.ba.restaurant.entity.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DTOConverter {


    public static Product productConverter(ProductDTO productDTO){
        Product product =new Product();

        product.setId(productDTO.getId());
        product.setProductName(productDTO.getProductName());
        product.setPrice(productDTO.getPrice());
        product.setDescription(productDTO.getDescription());
        product.setCategories(productDTO.getCategories());
        product.setMedia(DTOConverter.mediaConverter(productDTO.getMedia()));



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
        category.setMedia(DTOConverter.mediaConverter(categoryDTO.getMedia()));

        return category;
    }
    public static Waiter waiterConverter(WaiterDTO waiterDTO){
        Waiter waiter= new Waiter();
        waiter.setId(waiterDTO.getId());
        waiter.setWaiterName(waiterDTO.getWaiterName());
        waiter.setWaiterMail(waiterDTO.getWaiterMail());
        waiter.setAddress(waiterDTO.getAddress());
        waiter.setPhone(waiterDTO.getPhone());
        //waiter.setImage(waiterDTO.getMedia());

        return waiter;
    }
    public static Media mediaConverter(MediaDTO mediaDTO){
        Media media= new Media();
        media.setMediaName(mediaDTO.getMediaName());
        media.setFileContent(mediaDTO.getFileContent());
        media.setId(mediaDTO.getMediaId());
        return media;
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
            cart.setWaiterId(cartDTO.get(i).getWaiterId());
            cartList.add(cart);
        }


        return cartList;
    }
    public static User userConverter(UserDTO userDTO){
        User user =new User();
        user.setPassword(userDTO.getPassword());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setEnabled(userDTO.getEnabled());
        user.setId(userDTO.getId());
        user.setRoles(userDTO.getRoles());

        return user;
    }
    public static Role roleConverter(RoleDTO roleDTO){
        Role role= new Role();
        role.setId(roleDTO.getId());
        role.setName(roleDTO.getName());
        return role;
    }

}
