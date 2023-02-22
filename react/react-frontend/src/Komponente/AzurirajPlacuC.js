import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ServisZaposlenika from '../servisi/ServisZaposlenika'
import pozadina from '../komponente/slike/pozadina.jpg'

const AzurirajPlacuC = () => {
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [oib, setOib] = useState('')
    const [emailid, setEmailid] = useState('')
    const [pozicija, setPozicija] = useState('')
    const [placa, setPlaca] = useState('')
    const [status, setStatus] = useState('')
    const [postotak, setPostotak] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const azurirajZaposlenika = (e) => {
        e.preventDefault();

        const newPlaca = placa * (1 + postotak / 100)
        const zaposlenik = { ime, prezime, oib, emailid, pozicija, placa: newPlaca, status }
        ServisZaposlenika.azurirajZaposlenika(id, zaposlenik).then((response) => {
            navigate('/zaposlenici')
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {

        ServisZaposlenika.dohvatiZaposlenikaPoId(id).then((response) => {
            setIme(response.data.ime)
            setPrezime(response.data.prezime)
            setOib(response.data.oib)
            setEmailid(response.data.emailid)
            setPozicija(response.data.pozicija)
            setPlaca(response.data.placa)
            setStatus(response.data.status)

        }).catch(error => {
            console.log(error)
        })

    }, [])

    const naslov = () => {
        return <h2 className='text-center'> Ažuriraj plaću</h2>
    }

    return (
        <body style={{ 
            backgroundImage: `url(${pozadina})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            height: '100vh'}}>
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {naslov()}
                        <form>
                            <div className="form-group mb-2">
                                    <label className="form-label">Plaća:</label>
                                    <div>{placa + " EUR"}</div>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Povećaj ili umanji za (%):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={postotak}
                                    onChange={(e) => setPostotak((e.target.value))}
                                />
                            </div>
                            <button className="btn btn-success mb-2" onClick={azurirajZaposlenika}>Podnesi</button>
                            <Link to="/zaposlenici" className="btn btn-danger mb-2 ms-2">Odustani</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export default AzurirajPlacuC
