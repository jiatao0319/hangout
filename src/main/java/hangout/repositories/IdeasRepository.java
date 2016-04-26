package hangout.repositories;

import hangout.models.Idea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdeasRepository extends JpaRepository<Idea, Long> {
}
