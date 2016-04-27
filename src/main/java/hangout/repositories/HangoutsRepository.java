package hangout.repositories;

import hangout.models.Hangout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HangoutsRepository extends JpaRepository<Hangout, Long> {
}
