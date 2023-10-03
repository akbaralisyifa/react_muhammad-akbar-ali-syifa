import { useParams } from "react-router-dom";

const DetailProduct = (props) => {
    const {datas} = props;

    const {nama} = useParams();

    const detailProduk = datas.find((item) => item.nama === nama);

    return (
        <div style={{marginTop:"100px"}}>
             <h2>{detailProduk.nama}</h2>
            <p>{detailProduk.kategori}</p>
            <div>
                <img src={`/image/${detailProduk.image}`} alt={`Gambar ${detailProduk.image}`} style={{maxWidth:"50px"}}/>
            </div>
            <p>{detailProduk.freshness}</p>
            <p>{detailProduk.deskripsi}</p>
            <p>${detailProduk.price}</p>
        </div>
    )
}


export default DetailProduct;