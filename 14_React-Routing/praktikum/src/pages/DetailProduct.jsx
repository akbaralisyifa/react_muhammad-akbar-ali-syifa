import { useNavigate, useParams } from "react-router-dom";
import { initialValue } from "../article";

import '../assets/detailProduct.css'


const DetailProduct = () => {
    const {nama} = useParams();

    const navigation = useNavigate()

    const detailProduct = initialValue.find((item) => item.nama === nama);

    console.log(detailProduct);
    return (
        <div className="detail-product">
            <h2 className="detail-judul">Detail Produk</h2>
            <h3 className="detail-nama">{detailProduct.nama}</h3>
            <p className="detail-id">ID : {detailProduct.id}</p>
            <p className="detail-kategori">{detailProduct.Kategori}</p>
            <img src={detailProduct.image} alt="image.jpg"/>
            <p>{detailProduct.freshness}</p>
            <p>{detailProduct.deskripsi}</p>
            <h4>Price : ${detailProduct.price}</h4>
            <button onClick={() => navigation('/createProduct')}>Back To Product</button>
        </div>
    )
}

export default DetailProduct;
