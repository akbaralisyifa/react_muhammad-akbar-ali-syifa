

const TabelList = (props) => {
    const {item, hapusProduk} = props
    return(
        <tr>
            <td>{item.nama}</td>
            <td>{item.kategori}</td>
            <td>
                <img src={item.image} alt={`Gambar ${item.image}`} style={{maxWidth:"50px"}}/>
            </td>
            <td>{item.freshness}</td>
            <td>{item.deskripsi}</td>
            <td>${item.price}</td>
            <td>
                <button onClick={() => hapusProduk(item.id)} className="btn btn-danger">Hapus Data</button>
            </td>
        </tr>
    )
}

export default TabelList;