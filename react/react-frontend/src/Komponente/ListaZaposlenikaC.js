import React, {useState} from 'react'

const ListaZaposlenikaC = () => {
  
    const [zaposlenici, setZaposlenici] = useState([])

    return (
    <div className = "container">
        <h2 className = "text-center"> Lista Zaposlenika </h2>
        <table className = "table table-bordered table-striped">
            <thead>
                <th> Id Zaposlenika</th>
                <th> Ime Zaposlenika</th>
                <th> Prezime Zaposlenika</th>
                <th> Email Zaposlenika</th>
            </thead>
            <tbody>
                {
                    zaposlenici.map(
                        zaposlenik => 
                        <tr key = {zaposlenik.id}>
                            <td>{zaposlenik.id}</td>
                            <td>{zaposlenik.ime}</td>
                            <td>{zaposlenik.prezime}</td>
                            <td>{zaposlenik.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaZaposlenikaC