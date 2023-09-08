import { article } from "../article";
import ProductHeader from "../components/createProduct/HeaderProduct";

import '../assets/styleProduct.css'
import FormProduct from "../components/createProduct/FormProduct";


const CreateProduct = () => {
    return (
        <>
            <ProductHeader article={article} />
            <FormProduct />
        </>
    )
}

export default CreateProduct;