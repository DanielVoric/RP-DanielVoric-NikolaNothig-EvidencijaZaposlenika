package project.voricnothig.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.voricnothig.springboot.modul.Zaposlenik;


public interface TeglicaZaposlenika extends JpaRepository<Zaposlenik, Long> {
    //all crud database methods
}

