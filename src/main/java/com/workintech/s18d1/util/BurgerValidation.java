package com.workintech.s18d1.util;

import com.workintech.s18d1.exceptions.BurgerException;
import org.springframework.http.HttpStatus;

public class BurgerValidation {

    public static void checkId(Long id) {
        if (id == null || id <= 0) {
            throw new BurgerException("Id must be greater than 0: " + id, HttpStatus.BAD_REQUEST);
        }
    }

    public static void checkBurger(String name, Integer price) {
        if (name == null || name.isEmpty() || price == null || price <= 0) {
            throw new BurgerException("Burger name and price must be valid!", HttpStatus.BAD_REQUEST);
        }
    }
}