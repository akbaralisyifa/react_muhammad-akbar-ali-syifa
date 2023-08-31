import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import TabelPengunjung from "./TabelPengunjung";
import InputPengunjung from "./InputPengunjung";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    id : uuidv4(),
                    nama : "Muhamet Bayazid",
                    umur : 20,
                    jenisKelamin : "Pria"
                },
                {
                    id : uuidv4(),
                    nama : "Zubair Kirani",
                    umur : 21,
                    jenisKelamin : "Wanita"
                },
                {
                    id : uuidv4(),
                    nama : "Mehmet Jonsena",
                    umur : 20,
                    jenisKelamin : "Pria"
                },
                {
                    id : uuidv4(),
                    nama : "Murad Baraq",
                    umur : 20,
                    jenisKelamin : "Pria"
                },
                {
                    id : uuidv4(),
                    nama : "Niar Biara",
                    umur : 20,
                    jenisKelamin : "Wanita"
                },
            ]
        }
    }

    hapusPengunjung = (id) => {
        const hapusPengunjung = this.state.data.filter((item) => item.id !== id);

        this.setState({data : hapusPengunjung});
    }


    tambahPengunjung = (newPengunjung) => {
        const tambahPengunjung = {id : uuidv4(), ...newPengunjung};

        this.setState({data : [...this.state.data, tambahPengunjung]})
    }

    render(){
        return(
            <div>
                <h1>Halaman Pengunjung</h1>
                <TabelPengunjung data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
                <InputPengunjung tambahPengunjung={this.tambahPengunjung} />
            </div>
        )
    }


}


export default Home;