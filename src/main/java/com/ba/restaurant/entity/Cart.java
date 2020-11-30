package com.ba.restaurant.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    @Column
    private Date cartDate= new Timestamp(System.currentTimeMillis());

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTableCartId() {
        return tableCartId;
    }

    public void setTableCartId(long tableCartId) {
        this.tableCartId = tableCartId;
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

    public Date getCartDate() {
        return cartDate;
    }

    public void setCartDate(Date cartDate) {
        this.cartDate = cartDate;
    }

    public Cart() {

    }

}
