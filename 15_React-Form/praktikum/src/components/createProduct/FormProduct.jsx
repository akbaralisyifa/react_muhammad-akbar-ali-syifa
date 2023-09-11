import { useRef, useState } from "react";


const dataKosong = {
    nama : "",
    kategori : "",
    image : null,
    freshness :"Brand New",
    deskripsi : "",
    price : 0
}

const FormProduct = (props) => {
    // state input 
    const [data, setData] = useState(dataKosong);
    const imageRef = useRef(null);


    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setData({
            ...data, 
            [name] : value
        })
    }

    const handleChangeImage = () => {
        const imageFile = imageRef.current.files[0];
        // mengambil file yang telah di pilih user
        console.log("File image yang dipilih : ", imageFile);
        
        // menyimpan gambar ke url semetara ketika user telah memilih 
        const imageURL = URL.createObjectURL(imageFile)

        setData((prevData) => ({
            ...prevData, imageURL
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            nama : data.nama,
            kategori : data.kategori,
            image : data.image,
            freshness : data.freshness,
            deskripsi : data.deskripsi,
            price : data.price
        }

        props.tambahProduk(newData);
        setData(dataKosong);
        // reset input image 
        imageRef.current.value = null;

    }


    const buttonReset = () => {
        setData(dataKosong)
    }


    return(
        <div>
            <form style={{marginLeft:"50px"}}>
                <label>
                    Nama Produk : 
                    <input 
                    type="text"
                    name="nama"
                    value={data.nama}
                    onChange={handleChange}
                    />
                </label> <br />

                <label>
                Product Category : 
                <select name="kategori" value={data.kategori} onChange={handleChange}>
                    <option value="Shirt">Shirt</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Jacket">Jacket</option>
                </select>
                </label> <br />

                <label>
                    Image of product
                    <input 
                    type="file" 
                    name="image"
                    ref={imageRef}
                    onChange={handleChangeImage}
                    />
                </label><br />

                <label>
                    Product Freshness :
                    <div>
                        <input 
                        type="radio" 
                        name="freshness"
                        value="Brand New"
                        checked={data.freshness === "Brand New"}
                        onChange={handleChange}
                        /> <label>Brand New</label>
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        name="freshness"
                        value="Second Hand"
                        checked={data.freshness === "Second Hand"}
                        onChange={handleChange}
                        /> <label>Second Hand</label>
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        name="freshness"
                        value="Refurbished"
                        checked={data.freshness === "Refurbished"}
                        onChange={handleChange}
                        /> <label>Refurbished</label>
                    </div>
                </label> <br />

                <label>
                    Description :
                    <textarea 
                    cols="30" rows="10"
                    name="deskripsi"
                    value={data.deskripsi}
                    onChange={handleChange}
                    />
                </label><br />

                <label>
                    Price :
                    <input 
                    type="number" 
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                    />
                </label><br />

                <button onClick={handleSubmit} type="submit">Submit</button>
                <button onClick={buttonReset}>Reset</button>
            </form>
        </div>
    )
}

export default FormProduct;