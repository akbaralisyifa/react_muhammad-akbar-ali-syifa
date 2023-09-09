import { useRef, useState } from "react";


const FormProduct = (props) => {
    const dataKosong = {
        nama : "",
        kategori : "",
        gambar : "",
        freshness : "",
        deskripsi : "",
        price : ""
    }

    const [data, setData] = useState(dataKosong);

    const gambarProduk = useRef(null);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checkbox : e.target.value;


        // ketika produk tidak di isi

        setData({...data, [name] : value});

        // console.log(data);
    }


    // Handle submit, ketika form di submit 
    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            nama : data.nama,
            kategori : data.kategori,
            gambar : data.gambar,
            freshness: data.freshness,
            deskripsi : data.deskripsi,
            price : data.price
        }

        props.tambahProduk(newData);

        setData(dataKosong)
    }



    return (
        <form class="col-md-6">
            <div class="product-form__name">
                <label className="form-label">
                    Product Name :
                    <input
                    type="text" 
                    name="nama"
                    value={data.nama}
                    onChange={handleInput}
                    />
                </label>
            </div>

            <div className="product-form__category">
                <label className="form-label">
                Product Category :
                <select value={data.kategori} onChange={handleInput}>
                    <option selected>Choose...</option>
                    <option value="Shirt">Shirt</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Jacket">Jacket</option>
                </select>
                </label>
            </div>

            <div class="product-form__image">
                <label >
                    Image Of Product :
                    <input 
                    type="file" 
                    ref={gambarProduk}
                    required
                    />
                </label>
            </div>

            <div className="product-form__freshness">
                <label>
                    <p>Product Freshness</p>
                    <input type="radio" name={data.freshness} value="Brand New" onChange={handleInput}/> Brand New <br />
                    <input type="radio" name={data.freshness} value="Second Hand" onChange={handleInput} /> Second Hand <br />
                    <input type="radio" name={data.freshness} value="Refurbished" onChange={handleInput} /> Refurbished
                </label>
            </div>

            <div class="product-form__description">
                <label>
                    Description : 
                    <textarea 
                    name="deskripsi"
                    value={data.deskripsi}
                    cols="30" 
                    rows="10"
                    onChange={handleInput}
                     />
                </label>
            </div>

            <div class="product-form__price">
                <label>
                    Price 
                    <input 
                    type="number"
                    name="price"
                    value={data.price}
                    onChange={handleInput}
                    required
                    />
                </label>
            </div>

            <div class="product-form__button">
                <button onClick={handleSubmit} type="submit">Submit</button>
            </div>
        </form>
    )
}


export default FormProduct;