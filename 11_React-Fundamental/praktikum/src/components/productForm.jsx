import React from "react";


function ProductForm(){
    return(
        <div className="product-form">
            <h3>Detail Product</h3>
            <form class="product-form__body">
                <div class="product-form__name">
                    <label for="exampleInputEmail1" class="form-label">Product Name</label>
                    <input type="text" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>

                <div className="product-form__category">
                    <label for="" class="py-3">Product Category</label>
                    <select class="form-select w-50" aria-label="Default select example" required >
                        <option selected>Choose...</option>
                        <option value="1">Shirt</option>
                        <option value="2">T-Shirt</option>
                        <option value="3">Jacket</option>
                    </select>
                </div>

                <div class="product-form__image">
                    <label for="formFile" class="form-label">Image Of Product</label>
                    <input class="form-control w-50" type="file" id="formFile" />
                </div>

                <div className="product-form__freshness">
                    <label class="pt-3" for="">Product Freshness</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Brand New
                        </label>
                    </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Second Hand
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Refufbished
                        </label>
                    </div>
                </div>

                <div>
                    <div class="product-form__description">
                    <label for="exampleFormControlTextarea1" class="form-label">Additional Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
                    </div>
                </div>

                <div class="product-form__price">
                    <label for="exampleInputEmail1" class="form-label">Product Price</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="$ 1" required />
                </div>

                <div class="product-form__button">
                    <button type="submit" class="button">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default ProductForm;