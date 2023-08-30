import { Component } from "react";


class InputPengunjung extends Component {
    constructor(props){
        super(props)
        this.state ={
            nama : "",
            umur : "",
            jenisKelamin: "",
            editing : true
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleBukaInput = () =>{
        this.setState({
            editing:false
        })
    }
    
    handleTutupInput = () =>{
        this.setState({
            editing:true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const isInputNotEmty = this.state.nama && this.state.umur && this.state.jenisKelamin;
        if(isInputNotEmty){
            const newDate = {
                nama : this.state.nama,
                umur : this.state.umur,
                jenisKelamin : this.state.jenisKelamin
            }

            this.props.tambahPengunjung(newDate);

            this.setState({
                nama : "",
                umur : "",
                jenisKelamin : ""
            })
        }else{
            alert("Massukan semua Input...✨")
        }
    }


    render(){

        const viewMode = {};
        const editMode = {};

        (this.state.editing) ? viewMode.display = "none" : editMode.display = "None";

        return(
            <div>
                <div onSubmit={() => {}} style={viewMode}>
                    <label htmlFor="inputNama">Nama Pengunjung</label>
                    <input type="text" placeholder="Masukan Nama..." id="inputNama" name="nama" value={this.state.nama} onChange={this.onChange} /><br />

                    <label htmlFor="inputumur">Umur Pengunjung</label>
                    <input type="text" id="inputumur" placeholder="Masukan Umur..." name="umur" value={this.state.umur}  onChange={this.onChange}/><br />

                    <label htmlFor="inputjenisKelamin">Jenis Kelamin</label>
                    <input type="text" id="inputjenisKelamin" placeholder="Masukan Gender..." name="jenisKelamin" value={this.state.jenisKelamin} onChange={this.onChange} /><br />

                    <button onClick={this.handleSubmit}>Input</button>
                    <button onClick={this.handleTutupInput}>Batal</button>
                </div>

                <button onClick={this.handleBukaInput} style={editMode}>Masukan Nama Pengunjung</button>
            </div>
        )
    }
}


export default InputPengunjung;