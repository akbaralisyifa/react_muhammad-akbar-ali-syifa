import LogoPage from "./LogoPage";


const HeaderPage = ({article})  => {
    const titles = [article.title];
    const descriptions = [article.description];
    
    return (
        <div className="product-header">
            <LogoPage />
            {titles.map((title) => <h2>{title.en}</h2> )}
            {descriptions.map((des) => <p>{des.en}</p> )}
        </div>
    )
}

export default HeaderPage;