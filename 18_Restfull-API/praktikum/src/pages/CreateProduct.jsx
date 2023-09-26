import ProductHeader from '../components/createProduct/HeaderProduct';
import { article } from '../article';

import '../assets/styleProduct.css';
import FormProduct from '../components/createProduct/FormProduct';
import TabelProduct from '../components/createProduct/TableProduct';

const CreateProduct = () => {
  return (
    <div>
      <ProductHeader article={article} />
      <FormProduct />
      <TabelProduct />
    </div>
  );
};

export default CreateProduct;
