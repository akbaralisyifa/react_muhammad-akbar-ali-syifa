

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


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


const CreateProduct  = () => {

    const [data, setData] = useState(initialValue);


    // Hapus Produk 
    const hapusProduct = (id) {
        setData((oldData) => oldData.filter((produk) => return produk.id === id))
    }

   return (
    <div style={{marginTop:"150px"}}>
        <h2>Halman create produk</h2>
    </div>
   )
}


export default CreateProduct;