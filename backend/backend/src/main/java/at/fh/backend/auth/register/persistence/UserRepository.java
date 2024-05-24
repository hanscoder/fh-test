package at.fh.backend.auth.register.persistence;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserJpa, String> {
}
