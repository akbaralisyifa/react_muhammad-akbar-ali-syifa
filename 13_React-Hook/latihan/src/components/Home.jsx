
import { v4 as uuidv4 } from 'uuid';
import TabelPengunjung from "./TabelPengunjung";
import InputPengunjung from "./InputPengunjung";
import { useState } from 'react';

const initialValue = [
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

function Home () {

    const [data, setData] = useState(initialValue);

    const hapusPengunjung = (id) => {
        setData((oldData) => oldData.filter((item) => {
            return item.id !== id;
        }))
    }


    const tambahPengunjung = (newPengunjung) => {
        const tambahPengunjung = {id : uuidv4(), ...newPengunjung};

        setData((oldData) => [...oldData, tambahPengunjung])
    }

    
        return(
            <div>
                <h1>Halaman Pengunjung</h1>
                <TabelPengunjung data={data} hapusPengunjung={hapusPengunjung} />
                <InputPengunjung tambahPengunjung={tambahPengunjung} />
            </div>
        )
    


}


export default Home;