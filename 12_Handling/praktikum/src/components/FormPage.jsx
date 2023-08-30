const { Component } = require("react");


class FormPage extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
                <div onSubmit={() => {}} className="product-form">
                    <div class="product-form__name">
                        <label for="produkName" class="form-label">Product Name</label>
                        <input type="text" id="produkName" name=""  />
                    </div>

                    <div className="product-form__category">
                        <label for="ProductCategory">Product Category</label>
                        <select id="productCategory">
                            <option selected>Choose...</option>
                            <option value="Shirt">Shirt</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Jacket">Jacket</option>
                        </select>
                    </div>

                    <div class="product-form__image">
                        <label for="formFile" class="form-label">Image Of Product</label>
                        <input type="file" id="formFile" />
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
                        <textarea id="deskripsi" />
                    </div>

                    <div class="product-form__price">
                        <label for="price">Product Price</label>
                        <input type="text" id="price" placeholder="$ 1"  />
                    </div>

                    <div class="product-form__button">
                        <button type="submit" class="button">Submit</button>
                    </div>
                    
                </div>
            </>
        )
    }
}


export default FormPage;