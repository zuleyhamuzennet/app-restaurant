package com.ba.restaurant.dto;

import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductWrapperDTO {
    List<ProductDTO> listProductDTO;
    private Long totalcount;

}
