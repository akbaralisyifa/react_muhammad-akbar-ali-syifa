import { article } from "../article";
import ProductHeader from "../components/createProduct/HeaderProduct";
import { v4 as uuidv4 } from 'uuid';
import '../assets/styleProduct.css'
import FormProduct from "../components/createProduct/FormProduct";
import { useState } from "react";
import TabelProduct from "../components/createProduct/TableProduct";

const initialValue = [
    {
        id : uuidv4() ,
        nama : "Eiger",
        Kategori : "T-Shirt",
        image : "img.jpg",
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : "2",
    },
    {
        id : uuidv4() ,
        nama : "Rei",
        Kategori : "Jacket",
        image : "img.jpg",
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : "2",
    },
    {
        id : uuidv4() ,
        nama : "Erigo",
        Kategori : "Jacket",
        image : "img.jpg",
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : "2",
    },
]


const CreateProduct = () => {

    const [data, setData] = useState(initialValue);

    const hapusProduct = (id) => {
        setData((dataOld) => dataOld.filter((produk) => {
            return produk.id !== id
        }))
    }


    const tambahProduk = (newProduk) => {
        const produkBaru = {id : uuidv4(), ...newProduk};

        setData((oldData) => [...oldData, produkBaru]);
    }   


    
    return (
        <>
            <ProductHeader article={article} />
            <FormProduct tambahProduk={tambahProduk} />
            <TabelProduct datas={data} hapusProduct={hapusProduct} />
        </>
    )
}

export default CreateProduct;