package com.main.ecocorpbe.exceptions;

import org.springframework.stereotype.Component;

@Component
public class BadRequestException extends RuntimeException{
    public BadRequestException() {
        super("[ERROR] Bad Request");
    }
}
