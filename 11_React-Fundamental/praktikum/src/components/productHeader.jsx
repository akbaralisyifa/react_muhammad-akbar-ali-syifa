import React from "react";
import LogoProduct from "./logo";

function ProductHeader(){

    return (
        <div className="product-header">
            <LogoProduct />
            <h2>Create Product</h2>
            <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
    )
}

export default ProductHeader;