import { Component } from "react";

class FormPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            nama : "",
            Kategori : "Jacket",
            image : "img.jpg",
            freshness : "New Brand",
            deskripsi: "",
            price : "",
        }

    }
    onchange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const formIsNotEmpty = this.state.nama && this.state.Kategori && this.state.image && this.state.freshness && this.state.deskripsi && this.state.price;
        if(formIsNotEmpty) {
            const newData = {
                nama : this.state.nama,
                Kategori : this.state.Kategori,
                image : this.state.image,
                freshness : this.state.freshness,
                deskripsi: this.state.deskripsi,
                price : this.state.price,
            }

            this.props.tambahProduk(newData);

            this.setState({
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

    render(){
        return(
            <>
                <div onSubmit={() => {}} className="product-form">
                    <div class="product-form__name">
                        <label for="produkName" class="form-label">Product Name</label>
                        <input type="text" id="produkName" name="nama" value={this.state.nama} onChange={this.onchange} />
                    </div>

                    <div className="product-form__category">
                        <label for="ProductCategory">Product Category</label>
                        <select id="productCategory"  name="Kategori" value={this.state.Kategori} onChange={this.onchange}>
                            <option selected>Choose...</option>
                            <option value="Shirt">Shirt</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Jacket">Jacket</option>
                        </select>
                    </div>

                    <div class="product-form__image">
                        <label for="formFile" class="form-label">Image Of Product</label>
                        <input type="file" id="formFile" name="image" onChange={this.onchange} />
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
                        <textarea id="deskripsi" name="deskripsi" value={this.state.deskripsi} onChange={this.onchange} />
                    </div>

                    <div class="product-form__price">
                        <label for="price">Product Price</label>
                        <input type="text" id="price" placeholder="$ 1" name="price" value={this.state.price} onChange={this.onchange} />
                    </div>

                    <div class="product-form__button">
                        <button type="submit" class="button" onClick={this.handleSubmit }>Submit</button>
                    </div>
                </div>
            </>
        )
    }
}


export default FormPage;