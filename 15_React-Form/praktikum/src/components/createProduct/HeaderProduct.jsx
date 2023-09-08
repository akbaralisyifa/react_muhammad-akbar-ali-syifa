import LogoProduct from "./LogoProduct";


const ProductHeader = ({article}) => {
    return (
        <div className="product-header">
            <LogoProduct />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae nostrum odio enim quos repellendus eveniet, in fugit voluptate architecto.</p>
        </div>
    )
}

export default ProductHeader;