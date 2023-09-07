import 'bootstrap/dist/css/bootstrap.min.css';

const TabelList = ({item, hapusProduk, noUrut}) => {
    return(
        <tr>
            <td>{noUrut + 1}</td>
            <td>{item.nama}</td>
            <td>{item.Kategori}</td>
            {/* <td>{item.image}</td> */}
            <td>{item.freshness}</td>
            {/* <td>{item.deskripsi}</td> */}
            <td>${item.price}</td>
            <td>
                <button onClick={() => hapusProduk(item.id)} className='btn btn-danger'>Hapus</button>
            </td>
        </tr>
    )
}   


export default TabelList;