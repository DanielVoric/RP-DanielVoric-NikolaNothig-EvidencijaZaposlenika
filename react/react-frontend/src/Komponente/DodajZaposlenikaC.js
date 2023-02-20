import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ServisZaposlenika from '../servisi/ServisZaposlenika'

const DodajZaposlenikaC = () => {
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [oib, setOib] = useState('')
    const [emailid, setEmailid] = useState('')
    const [pozicija, setPozicija] = useState('')
    const [placa, setPlaca] = useState('')
    const [status, setStatus] = useState('')


    const navigate = useNavigate();
    const { id } = useParams();


    const spremiIliUrediZaposlenika = (e) => {
        e.preventDefault();

        const zaposlenik = { ime, prezime, oib, emailid, pozicija, placa, status }

        if (id) {

            ServisZaposlenika.azurirajZaposlenika(id, zaposlenik).then((response) => {
                navigate('/zaposlenici')
            }).catch(error => {
                console.log(error);
            })

        } else {
            ServisZaposlenika.dodajZaposlenika(zaposlenik).then((response) => {
                console.log(response.data)
                navigate('/zaposlenici')
            }).catch(error => {
                console.log(error)
            })
        }


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
        if (id) {
            return <h2 className='text-center'> Ažuriraj Zaposlenika</h2>
        } else {
            return <h2 className='text-center'> Dodaj Zaposlenika</h2>
        }
    }

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            naslov()
                        }
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label"> Ime :</label>
                                <input
                                    type="text"
                                    placeholder="Unesi ime zaposlenika"
                                    name="Ime"
                                    className="form-control"
                                    value={ime}
                                    onChange={(e) => setIme(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label"> Prezime :</label>
                                <input
                                    type="text"
                                    placeholder="Unesi prezime zaposlenika"
                                    name="Prezime"
                                    className="form-control"
                                    value={prezime}
                                    onChange={(e) => setPrezime(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label"> OIB :</label>
                                <input
                                    type="number"
                                    placeholder="Unesi OIB zaposlenika"
                                    name="oib"
                                    className="form-control"
                                    value={oib}
                                    onChange={(e) => setOib(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label"> Email :</label>
                                <input
                                    type="text"
                                    placeholder="Unesi email zaposlenika"
                                    name="email"
                                    className="form-control"
                                    value={emailid}
                                    onChange={(e) => setEmailid(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label"> Pozicija :</label>
                                <input
                                    type="text"
                                    placeholder="Unesi poziciju zaposlenika"
                                    name="pozicija"
                                    className="form-control"
                                    value={pozicija}
                                    onChange={(e) => setPozicija(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label"> Placa :</label>
                                <input
                                    type="number"
                                    placeholder="Unesi placu zaposlenika"
                                    name="placa"
                                    className="form-control"
                                    value={placa}
                                    onChange={(e) => setPlaca(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label"> Status :</label>
                                <input
                                    type="text"
                                    placeholder="Unesi status zaposlenika"
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className="btn btn-success mb-2" onClick={(e) => spremiIliUrediZaposlenika(e)} > Podnesi </button>
                            <Link to="/zaposlenici" className="btn btn-danger mb-2 ms-2"> Odustani </Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DodajZaposlenikaC