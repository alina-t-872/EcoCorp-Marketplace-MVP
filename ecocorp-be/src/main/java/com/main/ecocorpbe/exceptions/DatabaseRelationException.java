package com.main.ecocorpbe.exceptions;

import org.springframework.stereotype.Component;

@Component
public class DatabaseRelationException extends RuntimeException{
    public DatabaseRelationException() {
        super("[ERROR]: Wrong id for secondary key");
    }
}
