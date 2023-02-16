package project.voricnothig.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NijePronadenoException extends RuntimeException {

    public NijePronadenoException(String poruka) {
        super(poruka);
    }
}
