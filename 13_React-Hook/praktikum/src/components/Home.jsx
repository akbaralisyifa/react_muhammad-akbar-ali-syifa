
import NavbarPage from "./NavbarPage";
import HeaderPage from "./HeaderPage";
import { article } from "../article";
import FormPage from "./FormPage";
import TabelPage from "./TabelPage";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


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

function Home () {
    const [data, setData] = useState(initialValue);

    const hapusProduk = (id) => {
        setData((oldData) => oldData.filter((produk) => {
            return produk.id !== id;
        }))
    }

    const tambahProduk = (produkBaru) => {
        const newProduk = { id : uuidv4(), ...produkBaru};
        setData((oldData) => [...oldData, newProduk]);
    }

    return(
        <>
        <NavbarPage />
        <HeaderPage article={article}/>
        <FormPage tambahProduk={tambahProduk} />
        <TabelPage datas={data} hapusProduk={hapusProduk}/>
        </>
    )
    
}

export default Home;