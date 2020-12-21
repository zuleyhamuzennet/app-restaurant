package com.ba.restaurant.builder;

import com.ba.restaurant.dto.CartDTO;

import java.util.Date;

public class CartDTOBuilder extends DTOBuilder {

    private  long id;
    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private long waiterId;
    private Date cartDate;

    public CartDTOBuilder cartDate(Date cartDate){
        this.cartDate=cartDate;
        return this;

    }


    public CartDTOBuilder id(Long id){
        this.setId(id);
        return this;
    }
    public CartDTOBuilder productId(Long productId){
        this.productId=productId;
        return this;
    }
    public CartDTOBuilder piece(Long piece){
        this.piece=piece;
        return this;
    }
    public CartDTOBuilder price(Long price){
        this.price=price;
        return this;
    }
    public CartDTOBuilder total(Long total){
        this.total=total;
        return this;
    }
    public CartDTOBuilder productName(String productName){
        this.productName=productName;
        return this;
    }
    public CartDTOBuilder tableCartId(Long tableCartId){
        this.tableCartId=tableCartId;
        return this;
    }
    public CartDTOBuilder tableCategoryId(Long tableCategoryId){
        this.tableCategoryId=tableCategoryId;
        return this;
    }
    public CartDTOBuilder waiterId(Long waiterId){
        this.waiterId=waiterId;
        return this;
    }

    @Override
    public CartDTO build(){
        CartDTO cartDTO = new CartDTO();
     cartDTO.setId(getId());
     cartDTO.setWaiterId(this.waiterId);
     cartDTO.setProductId(this.productId);
     cartDTO.setPiece(this.piece);
     cartDTO.setPrice(this.price);
     cartDTO.setTableCartId(this.tableCartId);
     cartDTO.setTableCategoryId(this.tableCategoryId);
     cartDTO.setTotal(this.total);

        return cartDTO;

    }
}
