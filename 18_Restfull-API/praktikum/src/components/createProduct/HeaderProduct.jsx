import { useState } from 'react';
import LogoProduct from './LogoProduct';
import ToggleButton from './ToogleButton';
import { article } from '../../article';

const ProductHeader = () => {
  // const { article } = props;

  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="product-header">
      <LogoProduct />
      <h2>{isChecked ? article.title.en : article.title.id}</h2>
      <p>{isChecked ? article.description.en : article.description.id}</p>
      <ToggleButton isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default ProductHeader;
