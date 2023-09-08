import { useState } from "react";


const FormProduct = () => {
    const dataKosong = {
        nama : "",
    }

    return (
        <form class="col-md-6">
            <div class="product-form__name">
                <label className="form-label">
                    Product Name
                    <input
                    type="text" 
                    name={() => {}}
                    />
                </label>
            </div>

            <div className="product-form__category">
                <label className="form-label">
                Product Category
                <select >
                    <option selected>Choose...</option>
                    <option value="Shirt">Shirt</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Jacket">Jacket</option>
                </select>
                </label>
            </div>

            <div class="product-form__image">
                <label >
                    Image Of Product
                    <input 
                    type="file" 
                    required
                    />
                </label>
            </div>

            <div className="product-form__freshness">
                <label>
                    <p>Product Freshness</p>
                    <input type="radio" name="brand-new" value={() => {}} /> Brand New
                    <input type="radio" name="secon-hand" value={() => {}} /> Second Hand
                    <input type="radio" name=" Refurbished" value={() => {}} /> Second Hand
                </label>
            </div>

            <div class="product-form__description">
                <label>
                    Description 
                    <textarea 
                    name=""
                    cols="30" 
                    rows="10" />
                </label>
            </div>

            <div class="product-form__price">
                <label>
                    Price 
                    <input 
                    type="number"
                    name=""
                    required
                    />
                </label>
            </div>

            <div class="product-form__button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}


export default FormProduct;