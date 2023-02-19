package project.voricnothig.springboot.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.voricnothig.springboot.exception.NijePronadenoException;
import project.voricnothig.springboot.modul.Zaposlenik;
import project.voricnothig.springboot.repository.TeglicaZaposlenika;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/zaposlenici")
public class MenaderZaposlenika {

    @Autowired
    private TeglicaZaposlenika teglicaZaposlenika;

    @GetMapping
    public List<Zaposlenik> dohvatiSveZaposlenike(){
        return teglicaZaposlenika.findAll();
    }

    //kreirajZaposlenika rest api
    @PostMapping
    public Zaposlenik kreirajZaposlenika(@RequestBody Zaposlenik zaposlenik){
        return teglicaZaposlenika.save(zaposlenik);
    }

    //dohvati zaposlenika po id-u Rest api
    @GetMapping("{id}")
    public ResponseEntity<Zaposlenik> dohvatiZaposlenikaPoId(@PathVariable long id){
        Zaposlenik zaposlenik = teglicaZaposlenika.findById(id)
                .orElseThrow(() -> new NijePronadenoException("Zaposlenik ne postoji sa tim id-om" + id));
        return ResponseEntity.ok(zaposlenik);

    }    }

