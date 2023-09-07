import { useState } from "react"


function InputPengunjung (props) {

    const [data, setData] = useState({
        nama : "",
        umur : "",
        jenisKelamin: ""
    });
    const [editing, setEditing] = useState(true)
    

    const onChange = e => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleBukaInput = () =>{
        setEditing(false)
    }
    
    const handleTutupInput = () =>{
        setEditing(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isInputNotEmty = data.nama && data.umur && data.jenisKelamin;
        if(isInputNotEmty){
            const newDate = {
                nama : data.nama,
                umur : data.umur,
                jenisKelamin : data.jenisKelamin
            }

            props.tambahPengunjung(newDate);

            setData({
                nama : "",
                umur : "",
                jenisKelamin : ""
            })
        }else{
            alert("Massukan semua Input...✨")
        }
    }


        const viewMode = {};
        const editMode = {};

        (editing) ? viewMode.display = "none" : editMode.display = "None";

        return(
            <div>
                <div onSubmit={() => {}} style={viewMode}>
                    <label htmlFor="inputNama">Nama Pengunjung</label>
                    <input type="text" placeholder="Masukan Nama..." id="inputNama" name="nama" value={data.nama} onChange={onChange} /><br />

                    <label htmlFor="inputumur">Umur Pengunjung</label>
                    <input type="text" id="inputumur" placeholder="Masukan Umur..." name="umur" value={data.umur}  onChange={onChange}/><br />

                    <label htmlFor="inputjenisKelamin">Jenis Kelamin</label>
                    <input type="text" id="inputjenisKelamin" placeholder="Masukan Gender..." name="jenisKelamin" value={data.jenisKelamin} onChange={onChange} /><br />

                    <button onClick={handleSubmit}>Input</button>
                    <button onClick={handleTutupInput}>Batal</button>
                </div>

                <button onClick={handleBukaInput} style={editMode}>Masukan Nama Pengunjung</button>
            </div>
        )
    
}


export default InputPengunjung;