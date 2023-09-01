import ListPengunjung from "./ListPengunjung";


const TabelPengunjung = (props) => {
    const {data, hapusPengunjung} = props;


    return (
        <div>
            <thead>
                <td>Nama</td>
                <td>Umur</td>
                <td>Jenis Kelamin</td>
                <td>Aksi</td>
            </thead>

            <tbody>
                    {data.map((passanger) => <ListPengunjung key={passanger.id}  item={passanger} hapusPengunjung={hapusPengunjung}/>)}
            </tbody>
        </div>
    )
}

export default TabelPengunjung;