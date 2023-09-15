import { useNavigate } from "react-router-dom";


const TabelList = (props) => {
    const {item, hapusProduk} = props;

    const navigate = useNavigate();
    
    const getDetail = () => {
        navigate(`/createProduct/${item.nama}`, {item})
    }

    return(
        <tr>
            <td>{item.nama}</td>
            <td>{item.kategori}</td>
            <td>
                <img src={`/image/${item.image}`} alt={`Gambar ${item.image}`} style={{maxWidth:"50px"}}/>
            </td>
            <td>{item.freshness}</td>
            <td>{item.deskripsi}</td>
            <td>${item.price}</td>
            <td>
                <button onClick={() => hapusProduk(item.id)} className="btn btn-danger">Hapus</button>
                <button onClick={getDetail} className="btn btn-info ms-4">Detail</button>
            </td>
        </tr>
    )
}

export default TabelList;