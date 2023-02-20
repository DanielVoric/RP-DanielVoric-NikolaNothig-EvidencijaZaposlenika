package project.voricnothig.springboot.controller;


import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    }
    //azuzirajZaposlenika rest api
    @PutMapping("{id}")
    public ResponseEntity<Zaposlenik> azurirajZaposlenika(@PathVariable long id,@RequestBody Zaposlenik podaciZaposlenika){
        Zaposlenik azurirajZaposlenika = teglicaZaposlenika.findById(id)
                .orElseThrow(() -> new NijePronadenoException("Zaposlenik ne postoji s tim id-om"+id));
        azurirajZaposlenika.setIme(podaciZaposlenika.getIme());
        azurirajZaposlenika.setPrezime(podaciZaposlenika.getPrezime());
        azurirajZaposlenika.setEmailid(podaciZaposlenika.getEmailid());
        azurirajZaposlenika.setPlaca(podaciZaposlenika.getPlaca());
        azurirajZaposlenika.setOib(podaciZaposlenika.getOib());




        teglicaZaposlenika.save(azurirajZaposlenika);
        return ResponseEntity.ok(azurirajZaposlenika);
}

    //izbrisiZaposlenika rest api
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> izbrisiZaposlenika(@PathVariable long id){

        Zaposlenik zaposlenik = teglicaZaposlenika.findById(id)
                .orElseThrow(() -> new NijePronadenoException("Zaposlenik s tim id-om ne postoji" + id));

        teglicaZaposlenika.delete(zaposlenik);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

