import { useState } from 'react';
import LogoProduct from './LogoProduct';
import TogleButton from './TogleButton';

const ProductHeader = (props) => {
  const { article } = props;

  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="product-header">
      <LogoProduct />
      <h1>{isChecked ? article.title.en : article.title.id}</h1>
      <p>{isChecked ? article.description.en : article.description.id}</p>
      <TogleButton isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default ProductHeader;
