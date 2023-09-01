import { useState } from "react"


function FormPage (props){
    const [data, setData] = useState({
        nama : "",
            Kategori : "Jacket",
            image : "img.jpg",
            freshness : "New Brand",
            deskripsi: "",
            price : ""
    })

    
    const onchange = e => {
        setData({...data, [e.target.name] : e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formIsNotEmpty = data.nama && data.Kategori && data.image && data.freshness && data.deskripsi && data.price;
        if(formIsNotEmpty) {
            const newData = {
                nama : data.nama,
                Kategori : data.Kategori,
                image : data.image,
                freshness : data.freshness,
                deskripsi: data.deskripsi,
                price : data.price,
            }

            props.tambahProduk(newData);

            setData({
                nama : "",
                Kategori : "Jacket",
                image : "img.jpg",
                freshness : "New Brand",
                deskripsi: "",
                price : "",
            })
        }else{
            alert("Please enter a valid product name.")
        }
    }


    return(
        <>
            <div onSubmit={() => {}} className="product-form">
                <div class="product-form__name">
                    <label for="produkName" class="form-label">Product Name</label>
                    <input type="text" id="produkName" name="nama" value={data.nama} onChange={onchange} />
                </div>

                <div className="product-form__category">
                    <label for="ProductCategory">Product Category</label>
                    <select id="productCategory"  name="Kategori" value={data.Kategori} onChange={onchange}>
                        <option selected>Choose...</option>
                        <option value="Shirt">Shirt</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Jacket">Jacket</option>
                    </select>
                </div>

                <div class="product-form__image">
                    <label for="formFile" class="form-label">Image Of Product</label>
                    <input type="file" id="formFile" name="image" onChange={onchange} />
                </div>

                <div className="product-form__freshness">
                    <label class="pt-3" for="">Product Freshness</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="" id="1" />
                        <label for="1">Brand New</label>
                    </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="" id="2" />
                        <label for="2"> Second Hand</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="" id="3" />
                        <label for="3"> Refufbished </label>
                    </div>
                </div>

                
                <div class="product-form__description">
                    <label for="deskripsi">Additional Description</label>
                    <textarea id="deskripsi" name="deskripsi" value={data.deskripsi} onChange={onchange} />
                </div>

                <div class="product-form__price">
                    <label for="price">Product Price</label>
                    <input type="text" id="price" placeholder="$ 1" name="price" value={data.price} onChange={onchange} />
                </div>

                <div class="product-form__button">
                    <button type="submit" class="button" onClick={handleSubmit }>Submit</button>
                </div>
            </div>
        </>
    )

}


export default FormPage;