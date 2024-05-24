package at.fh.backend.auth.register.domain;

import at.fh.backend.auth.register.rest.RegisterDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class RegisterServiceTest {

    @Autowired RegisterService service;

    @Test
    public void registerANewUser() {
        var user = new RegisterDto("hans.sowa@polygons.at", "gG1234$%");
        var result = service.register(user);
        assertThat(result).isEqualTo(new User("hans.sowa@polygons.at"));
    }
}
