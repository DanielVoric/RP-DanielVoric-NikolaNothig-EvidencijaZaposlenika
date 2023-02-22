import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServisZaposlenika from '../servisi/ServisZaposlenika'
import pozadina from '../komponente/slike/pozadina.jpg';

const ListaZaposlenikaC = () => {

    const [zaposlenici, setZaposlenici] = useState([])

    useEffect(() => {
        dohvatiSveZaposlenike();
    }, [])

    const dohvatiSveZaposlenike = () =>{
        ServisZaposlenika.dohvatiSveZaposlenike().then((response) => {
            setZaposlenici(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        }) 
    }

    const izbrisiZaposlenika = (zaposlenikId) => {
        ServisZaposlenika.izbrisiZaposlenika(zaposlenikId).then((response) => {
            dohvatiSveZaposlenike();
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <body style={{ 
            backgroundImage: `url(${pozadina})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            height: '100vh'}}>
        <div className="container">
            <h2 className="text-center"> Lista zaposlenika </h2>
            <Link to = "/dodaj-zaposlenika" className = "btn glow-on-hover btn-dark mb-2 "> Dodaj zaposlenika </Link>
            <table className="table table-dark table-bordered table-striped table-hover table-sm">
                <thead class='thead-dark'>
                    <tr>
                    <th> Id zaposlenika </th>
                    <th> Ime </th>
                    <th> Prezime </th>
                    <th> OIB </th>
                    <th> Email </th>
                    <th> Pozicija </th>
                    <th> Plaća </th>
                    <th> Status </th>
                    <th> Akcije </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        zaposlenici.map(
                            zaposlenik =>
                                <tr key={zaposlenik.id}>
                                    <td> {zaposlenik.id}</td>
                                    <td> {zaposlenik.ime}</td>
                                    <td> {zaposlenik.prezime}</td>
                                    <td> {zaposlenik.oib}</td>
                                    <td> {zaposlenik.emailid}</td>
                                    <td> {zaposlenik.pozicija}</td>
                                    <td> {zaposlenik.placa}</td>
                                    <td> {zaposlenik.status}</td>


                                    <td>
                                    <Link className="btn btn-outline-info" to={`/uredi-zaposlenika/${zaposlenik.id}`} >Ažuriraj</Link>
                                    <Link className="btn btn-outline-warning ms-2" to={`/placa-zaposlenika/${zaposlenik.id}`} > Plaća </Link>
                                    <button className = 'btn btn-outline-danger ms-2' onClick={() => izbrisiZaposlenika(zaposlenik.id)}> Izbrisi</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </body>
    )
}

export default ListaZaposlenikaC