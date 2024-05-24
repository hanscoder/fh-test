package at.fh.backend.auth.register;

import at.fh.backend.auth.register.rest.RegisterDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RegisterTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void shouldRegisterSuccessfully() throws Exception {
        HttpHeaders headers = new HttpHeaders();
        var body = new RegisterDto("hans.sowa@polygons.at", "gG1234%&");
        HttpEntity<RegisterDto> request = new HttpEntity<>(body, headers);
        ResponseEntity<String> actual = restTemplate.postForEntity("http://localhost:" + port + "/register",
                request, String.class);
        assertThat(
                actual.getStatusCode()).isEqualTo(HttpStatusCode.valueOf(200));

    }
}
