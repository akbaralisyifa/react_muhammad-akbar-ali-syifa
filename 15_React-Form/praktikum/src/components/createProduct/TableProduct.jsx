import TabelList from "./TabelList";


const TabelProduct = (props) => {
    const {datas, hapusProduk} = props;
    return (
        <div className="container">
            <table className="table my-5">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Kategori</th>
                        <th>Image</th>
                        <th>Freshness</th>
                        <th>Deskripsi</th>
                        <th>Price</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {datas.map((data) => 
                        <TabelList key={data.id} item={data} hapusProduk={hapusProduk} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TabelProduct;