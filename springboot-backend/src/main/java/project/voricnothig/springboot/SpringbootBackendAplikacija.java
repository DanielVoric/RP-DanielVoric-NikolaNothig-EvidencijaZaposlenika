package project.voricnothig.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import project.voricnothig.springboot.repozitorij.TeglicaZaposlenika;

@SpringBootApplication
public class SpringbootBackendAplikacija implements CommandLineRunner {

// cd C:\Program Files\MySQL\MySQL Server 8.0\bin - DANE
// cd C:\Program Files\MySQL\MySQL Server 8.0\bin - NOLE
// mysql -u rpuser -p
// 1234
// Za pokretanje servera u konzoli

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendAplikacija.class, args);
    }

    @Autowired
    private TeglicaZaposlenika teglicaZaposlenika;

    @Override
    public void run(String... args) throws Exception {
//        Zaposlenik zaposlenik1 = new Zaposlenik();
//        zaposlenik1.setIme("Nikola");
//        zaposlenik1.setPrezime("Nothig");
//        zaposlenik1.setEmailid("nikolanothig@gmail.com");
//        teglicaZaposlenika.save(zaposlenik1);
//
//        Zaposlenik zaposlenik2 = new Zaposlenik();
//        zaposlenik2.setIme("Daniel");
//        zaposlenik2.setPrezime("Voric");
//        zaposlenik2.setEmailid("danielvoric@gmail.com");
//        teglicaZaposlenika.save(zaposlenik2);
    }
}
