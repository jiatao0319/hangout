package hangout.services;

import hangout.models.Hangout;
import hangout.repositories.HangoutsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HangoutService {

    @Autowired
    HangoutsRepository hangoutsRepository;

    public void match() {
        hangoutsRepository.findAll().forEach(h -> {
            h.setMatched(false);
            hangoutsRepository.save(h);
        });

        double v = Math.random() * hangoutsRepository.count();
        Hangout hangout = hangoutsRepository.findAll().get((int) (v - 1));
        hangout.setMatched(true);
        hangoutsRepository.save(hangout);
    }
}
