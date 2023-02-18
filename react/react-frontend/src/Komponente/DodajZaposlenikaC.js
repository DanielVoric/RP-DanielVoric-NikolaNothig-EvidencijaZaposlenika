import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import servisZaposlenika from '../servisi/servisZaposlenika'

const DodajZaposlenikaC = () => {
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [emailid, setEmailid] = useState('')
    const navigate = useNavigate();

    const spremiZaposlenika = (e) => {
        e.preventDefault();

        const zaposlenik = {ime, prezime, emailid}

        servisZaposlenika.dodajZaposlenika(zaposlenik).then((response) =>{

            console.log(response.data)

            navigate('/zaposlenici')
        }).catch(error => {
            console.log(error)
        })
    }


  return (
    <div>
        <br />
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2 className = "text-center">Dodaj zaposlenika</h2>
                    <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ime :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Unesi ime zaposlenika"
                                        name = "Ime"
                                        className = "form-control"
                                        value = {ime}
                                        onChange = {(e) => setIme(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Prezime :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Unesi prezime zaposlenika"
                                        name = "Prezime"
                                        className = "form-control"
                                        value = {prezime}
                                        onChange = {(e) => setPrezime(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Unesi email zaposlenika"
                                        name = "email"
                                        className = "form-control"
                                        value = {emailid}
                                        onChange = {(e) => setEmailid(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success mb-2" onClick = {(e) => spremiZaposlenika(e)} > Dodaj </button>
                                <Link to = "/zaposlenici" className = "btn btn-danger mb-2 ms-2"> Odustani </Link>

                            </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DodajZaposlenikaC