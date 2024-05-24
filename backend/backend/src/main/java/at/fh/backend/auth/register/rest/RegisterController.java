package at.fh.backend.auth.register.rest;

import at.fh.backend.auth.register.domain.RegisterService;
import at.fh.backend.auth.register.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RegisterController {

    private final RegisterService registerService;

    @PostMapping("register")
    User register(@RequestBody RegisterDto registerDto) {
        return registerService.register(registerDto);
    }
}
