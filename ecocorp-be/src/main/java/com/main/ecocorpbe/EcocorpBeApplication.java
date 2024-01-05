package com.main.ecocorpbe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EcocorpBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcocorpBeApplication.class, args);
	}

	@GetMapping("/ping")
	public String ping() {
		return "ping";
	}

}
