package hangout.controllers;

import hangout.models.Idea;
import hangout.repositories.IdeasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ideas")
public class IdeasController {

    @Autowired
    IdeasRepository ideasRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Idea> all() {
        return ideasRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Idea create(@RequestBody Idea idea) {
        return ideasRepository.save(idea);
    }
}
