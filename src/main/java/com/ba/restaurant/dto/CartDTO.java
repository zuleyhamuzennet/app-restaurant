package com.ba.restaurant.dto;

import java.util.Date;

public class CartDTO {
    private  long id;
    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private long waiterId;

    public long getWaiterId() {
        return waiterId;
    }

    public void setWaiterId(long waiterId) {
        this.waiterId = waiterId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getPiece() {
        return piece;
    }

    public void setPiece(long piece) {
        this.piece = piece;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public long getTableCartId() {
        return tableCartId;
    }

    public void setTableCartId(long tableCartId) {
        this.tableCartId = tableCartId;
    }

    public long getTableCategoryId() {
        return tableCategoryId;
    }

    public void setTableCategoryId(long tableCategoryId) {
        this.tableCategoryId = tableCategoryId;
    }

    public void setCartDate(Date date) {
    }
}
