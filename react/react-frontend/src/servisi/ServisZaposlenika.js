import axios from 'axios'

const ZAPOSLENIK_REST_API_URL = 'http://localhost:8080/api/v1/zaposlenici';

class ServisZaposlenika {

    dohvatiSveZaposlenike() {
        return axios.get(ZAPOSLENIK_REST_API_URL);
    }

    dodajZaposlenika(zaposlenik){
        return axios.post(ZAPOSLENIK_REST_API_URL, zaposlenik);
    }
    dohvatiZaposlenikaPoId(zaposlenikId){
        return axios.get(ZAPOSLENIK_REST_API_URL + '/'+ zaposlenikId);
    }
    azurirajZaposlenika(zaposlenikId, zaposlenik){
        return axios.put(ZAPOSLENIK_REST_API_URL + '/' + zaposlenikId, zaposlenik);
    }
    izrisiZaposlenika(zaposlenikId){
        return axios.delete(ZAPOSLENIK_REST_API_URL + '/' + zaposlenikId);
    }

}

export default new ServisZaposlenika();