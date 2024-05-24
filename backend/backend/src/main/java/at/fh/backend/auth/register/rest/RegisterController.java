package at.fh.backend.auth.register.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @PostMapping("register")
    void register(@RequestBody RegisterDto registerDto) {
        System.out.println(registerDto);
    }
}
