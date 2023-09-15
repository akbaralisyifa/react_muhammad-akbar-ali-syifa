import LogoProduct from "./LogoProduct";


const ProductHeader = (props) => {
    const {article} = props;

    const titles = [article.title]
    const description = [article.description]

    return (
        <div className="product-header">
            <LogoProduct />
            {titles.map((title) =><h2>{title.en}</h2>)}
            {description.map((desc) => <p>{desc.en}</p> )}
        </div>
    )
}

export default ProductHeader;