package at.fh.backend.auth.register.domain;

import at.fh.backend.auth.register.persistence.UserJpa;
import at.fh.backend.auth.register.persistence.UserRepository;
import at.fh.backend.auth.register.rest.RegisterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public User register(RegisterDto register) {
        var user = new UserJpa();
        user.setEmail(register.email());
        user.setPassword(passwordEncoder.encode(register.password()));

        UserJpa save = userRepository.save(user);
        return new User(save.getEmail());
    }
}
