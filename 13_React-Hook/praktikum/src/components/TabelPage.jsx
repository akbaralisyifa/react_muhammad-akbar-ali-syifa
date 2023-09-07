import TabelList from "./TabelList";
import 'bootstrap/dist/css/bootstrap.min.css';


const TabelPage = ({datas, hapusProduk, uniqNumber}) => {



    return (
        <div className="container my-5">
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        {/* <th>Image</th> */}
                        <th>Frashness</th>
                        {/* <th>Description</th> */}
                        <th>Price</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody className="tabel_list">
                    {datas.map((data, index) => <TabelList noUrut={index} key={data.id} item={data} hapusProduk={hapusProduk} />)}
                </tbody>
            </table>
        </div>
    )
}


export default TabelPage;