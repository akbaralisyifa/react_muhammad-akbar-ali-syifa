import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"
const TabelList = ({item, hapusProduk, nomorUrut}) => {

    const navigation = useNavigate()
const toDetail = () => {

}

    return(
        <tr>
            <td>{nomorUrut + 1}</td>
            <td>{item.nama}</td>
            <td>{item.Kategori}</td>
            {/* <td>{item.image}</td> */}
            <td>{item.freshness}</td>
            {/* <td>{item.deskripsi}</td> */}
            <td>${item.price}</td>
            <td>
                <button onClick={() => hapusProduk(item.id)} className='btn btn-danger'>Hapus</button>
                <button onClick={toDetail} className='btn btn-info mx-3'>Detail</button>
            </td>
        </tr>
    )
}   


export default TabelList;