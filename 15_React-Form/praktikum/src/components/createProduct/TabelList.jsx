
const TabelList = (props) => {
    const {item, hapusProduct} = props; 
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.nama}</td>
            <td>{item.kategori}</td>
            <td>{item.image}</td>
            <td>{item.freshness}</td>
            <td>{item.deskripsi}</td>
            <td>${item.price}</td>
            <td>
                <button onClick={() => hapusProduct(item.id)} className="btn btn-danger">Hapus</button>
                <button className="btn btn-info mx-3">Detail</button>
            </td>
        </tr>
    )
}

export default TabelList;
