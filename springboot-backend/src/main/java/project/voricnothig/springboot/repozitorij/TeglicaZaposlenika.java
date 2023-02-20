package project.voricnothig.springboot.repozitorij;

import org.springframework.data.jpa.repository.JpaRepository;
import project.voricnothig.springboot.modul.Zaposlenik;


public interface TeglicaZaposlenika extends JpaRepository<Zaposlenik, Long> {
    //teglica postoji
}

