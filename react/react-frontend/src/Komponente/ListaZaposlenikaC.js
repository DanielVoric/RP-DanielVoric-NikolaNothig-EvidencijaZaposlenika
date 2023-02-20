import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServisZaposlenika from '../servisi/ServisZaposlenika'

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

    const izrisiZaposlenika = (zaposlenikId) => {
        ServisZaposlenika.izrisiZaposlenika(zaposlenikId).then((response) => {
            dohvatiSveZaposlenike();
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="container">
            <h2 className="text-center"> Lista zaposlenika </h2>
            <Link to = "/dodaj-zaposlenika" className = "btn btn-primary mb-2"> Dodaj zaposlenika </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Id zaposlenika </th>
                    <th> Ime zaposlenika</th>
                    <th> Prezime zaposlenika </th>
                    <th> OIB zaposlenika </th>
                    <th> Email zaposlenika </th>
                    <th> Placa zaposlenika </th>
                    <th> Akcije </th>

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
                                    <td> {zaposlenik.placa}</td>

                                    <td>
                                    <Link className="btn btn-info" to={`/uredi-zaposlenika/${zaposlenik.id}`} >Ažuriraj</Link>
                                    <button className = 'btn btn-danger ms-2' onClick={() => izrisiZaposlenika(zaposlenik.id)}> Izbrisi</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListaZaposlenikaC