import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import servisZaposlenika from '../servisi/servisZaposlenika'

const ListaZaposlenikaC = () => {

    const [zaposlenici, setZaposlenici] = useState([])

    useEffect(() => {

        servisZaposlenika.dohvatiSveZaposlenike().then((response) => {
            setZaposlenici(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div className="container">
            <h2 className="text-center"> Lista zaposlenika </h2>
            <Link to = "/dodaj-zaposlenika" className = "btn btn-primary mb2"> Dodaj zaposlenika </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Id zaposlenika </th>
                    <th> Ime zaposlenika</th>
                    <th> Prezime zaposlenika </th>
                    <th> Email zaposlenika </th>
                </thead>
                <tbody>
                    {
                        zaposlenici.map(
                            zaposlenik =>
                                <tr key={zaposlenik.id}>
                                    <td> {zaposlenik.id}</td>
                                    <td> {zaposlenik.ime}</td>
                                    <td> {zaposlenik.prezime}</td>
                                    <td> {zaposlenik.emailid}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListaZaposlenikaC