
// import NavbarPage from "./NavbarPage";
import HeaderPage from "../components/CreateProduct/HeaderPage";
import { article, initialValue } from "../article";
import FormPage from "../components/CreateProduct/FormPage";
import TabelPage from "../components/CreateProduct/TabelPage";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

// CSS
import '../assets/styleNavbar.css'
import '../assets/styleProduct.css'

// const initialValue = [
//     {
//         id : uuidv4() ,
//         nama : "Eiger",
//         Kategori : "T-Shirt",
//         image : "img.jpg",
//         freshness : "New Brand",
//         deskripsi: "suisusius",
//         price : "2",
//     },
//     {
//         id : uuidv4() ,
//         nama : "Rei",
//         Kategori : "Jacket",
//         image : "img.jpg",
//         freshness : "New Brand",
//         deskripsi: "suisusius",
//         price : "2",
//     },
//     {
//         id : uuidv4() ,
//         nama : "Erigo",
//         Kategori : "Jacket",
//         image : "img.jpg",
//         freshness : "New Brand",
//         deskripsi: "suisusius",
//         price : "2",
//     },
// ]

function CreateProduct () {
    const [data, setData] = useState(initialValue);


    useEffect(() => {
        // window.alert("Welcome");
    }, []);
    
    const hapusProduk = (id) => {
        const isConfirm = window.confirm("Apakah kalian ingin menghapus ?")

        if(isConfirm){
            setData((oldData) => oldData.filter((produk) => {
                return produk.id !== id;
            }))
        }
    }


    const tambahProduk = (produkBaru) => {
        const newProduk = { id : uuidv4(), ...produkBaru};
        setData((oldData) => [...oldData, newProduk]);
    }


    return(
        <>
        <HeaderPage article={article}/>
        <FormPage tambahProduk={tambahProduk} />
        <TabelPage datas={data} hapusProduk={hapusProduk}/>
        </>
    )
    
}

export default CreateProduct;