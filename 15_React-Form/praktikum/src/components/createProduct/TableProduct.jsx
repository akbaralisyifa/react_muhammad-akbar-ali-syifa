import TabelList from "./TabelList";


const TabelProduct = (props) => {
    const {datas, hapusProduct} = props;
    return (
        <div className="container my-5">
            <table class="table">
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Frashness</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th >Aksi</th>
                    </tr>
                </thead>

                <tbody className="tabel_list text-center" >
                    {datas.map((data) => <TabelList item={data} hapusProduct={hapusProduct}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default TabelProduct;