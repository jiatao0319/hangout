package hangout.controllers;

import hangout.models.Hangout;
import hangout.repositories.HangoutsRepository;
import hangout.services.HangoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hangouts")
public class HangoutsController {

    @Autowired
    HangoutsRepository hangoutsRepository;

    @Autowired
    HangoutService hangoutService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Hangout> all() {
        return hangoutsRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Hangout create(@RequestBody Hangout hangout) {
        hangoutsRepository.save(hangout);
        hangoutService.match();
        return hangoutsRepository.findOne(hangout.getId());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Hangout> show(@PathVariable Long id) {
        Hangout hangout = hangoutsRepository.findOne(id);
        if (hangout != null) {
            return new ResponseEntity<>(hangout, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
