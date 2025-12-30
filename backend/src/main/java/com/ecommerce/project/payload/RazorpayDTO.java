package com.ecommerce.project.payload;

import com.ecommerce.project.model.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RazorpayDTO {
    private String amount;
    private String paymentMethod;
    private String email;
    private String name;
    private Address address;
    private String description;
    private Map<String, String> metadata;
}
