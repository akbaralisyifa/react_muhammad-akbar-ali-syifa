import TabelList from "./TabelList";


const TabelPage = ({datas, hapusProduk}) => {
    return (
        <div className="tabel__body">
            <table>
                <thead>
                <td>Product Name</td>
                <td>Category</td>
                <td>Image</td>
                <td>Frashness</td>
                <td>Description</td>
                <td>Price</td>
                <td>Aksi</td>
                </thead>

                <tbody>
                    {datas.map((data) => <TabelList key={data.id} item={data} hapusProduk={hapusProduk} />)}
                </tbody>
            </table>
        </div>
    )
}


export default TabelPage;