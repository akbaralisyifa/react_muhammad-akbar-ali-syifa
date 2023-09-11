
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductHeader from "../components/createProduct/HeaderProduct";
import {article} from '../article';

import '../assets/styleProduct.css'
import FormProduct from "../components/createProduct/FormProduct";
import TabelProduct from "../components/createProduct/TableProduct";

const initialValue = [
    {
        id : uuidv4() ,
        nama : "Eiger",
        kategori : "T-Shirt",
        image : null,
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : 3,
    },
    {
        id : uuidv4() ,
        nama : "Rei",
        kategori : "Jacket",
        image : null,
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : 3,
    },
    {
        id : uuidv4() ,
        nama : "Erigo",
        kategori : "Jacket",
        image : null,
        freshness : "New Brand",
        deskripsi: "suisusius",
        price : 3,
    },
]


const CreateProduct  = () => {

    const [data, setData] = useState(initialValue);


    // Hapus Produk 
    const hapusProduk = (id) => {
        setData((oldData) => oldData.filter((produk) => {
            return produk.id !== id;
        }))
    }


    // Tambah Data produk
    const tambahProduk = (newProduk) => {
        const produkBaru = {id : uuidv4(), ...newProduk};
    
        setData((oldData) => [...oldData, produkBaru]);
    }

   return (
    <div>
        <ProductHeader article={article}  />
        <FormProduct tambahProduk={tambahProduk} /> 
        <TabelProduct datas={data} hapusProduk={hapusProduk} />
    </div>
   )
}


export default CreateProduct;