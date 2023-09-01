

const TabelList = ({item, hapusProduk}) => {
    return(
        <tr>
            <td>{item.nama}</td>
            <td>{item.Kategori}</td>
            <td>{item.image}</td>
            <td>{item.freshness}</td>
            <td>{item.deskripsi}</td>
            <td>${item.price}</td>
            <td>
                <button onClick={() => hapusProduk(item.id)}>Hapus</button>
            </td>
        </tr>
    )
}   


export default TabelList;