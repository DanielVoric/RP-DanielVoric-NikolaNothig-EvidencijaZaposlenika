import axios from 'axios'

const ZAPOSLENIK_REST_API_URL = 'http://localhost:8080/api/v1/zaposlenici';

class ServisZaposlenika {

    dohvatiSveZaposlenike() {
        return axios.get(ZAPOSLENIK_REST_API_URL)
    }
}

export default new ServisZaposlenika();
