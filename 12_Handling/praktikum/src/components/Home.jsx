import { Component } from "react";
import NavbarPage from "./NavbarPage";
import HeaderPage from "./HeaderPage";
import { article } from "../article";
import FormPage from "./FormPage";
import TabelPage from "./TabelPage";
import { v4 as uuidv4 } from 'uuid';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    id : uuidv4() ,
                    nama : "Erigo",
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
                {
                    id : uuidv4() ,
                    nama : "Erigo",
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
            ],
        }
    }


    hapusProduk = (id) => {
        const newListProduk = this.state.data.filter((produk) => produk.id !== id);

        this.setState({ data : newListProduk})
    }

    tambahProduk = (produkBaru) => {
        const newProduk = { id : uuidv4(), ...produkBaru};

        console.log(newProduk.id);

        this.setState({data : [...this.state.data, newProduk]});

    }


    render() {
        return(
            <>
            <NavbarPage />
            <HeaderPage article={article}/>
            <FormPage tambahProduk={this.tambahProduk} />
            <TabelPage datas={this.state.data} hapusProduk={this.hapusProduk}/>
            </>
        )
    }
}

export default Home;