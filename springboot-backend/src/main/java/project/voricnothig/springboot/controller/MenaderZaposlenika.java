package project.voricnothig.springboot.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.voricnothig.springboot.modul.Zaposlenik;
import project.voricnothig.springboot.repository.TeglicaZaposlenika;

import java.util.List;

@RestController
@RequestMapping("/api/v1/zaposlenici")
public class MenaderZaposlenika {

    @Autowired
    private TeglicaZaposlenika teglicaZaposlenika;

    @GetMapping
    public List<Zaposlenik> dohvatiSveZaposlenike(){
        return teglicaZaposlenika.findAll();
    }
}
