import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TabelList from './TabelList';
import { useEffect } from 'react';
import { deleteProductAsync, fetchData } from '../store/productSlice';

const TabelProduct = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const datas = useSelector((state) => state.products.data);

  const handleDelete = async (id) => {
    dispatch(deleteProductAsync(id));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const action = () => {
    navigate('/products/create');
  };

  return (
    <>
      <div className="container w-1/2 flex flex-col mx-auto mt-10">
        <button onClick={action} className="bg-cyan-700 w-40 text-white lowercase font-semibold py-2 rounded-md mb-3">
          Crate Product
        </button>
        <table className="w-full text-center rounded-xl">
          <thead className=" bg-cyan-700 shadow-sm shadow-cyan-400">
            <tr>
              <th className="font-semibold text-white text-center p-3 border border-cyan-900">No</th>
              <th className="font-semibold text-white text-center p-3 border border-cyan-900">Product Name</th>
              <th className="font-semibold text-white text-center p-3 border border-cyan-900">Product Category</th>
              <th className="font-semibold text-white text-center p-3 border border-cyan-900">Product Freshness</th>
              <th className="font-semibold text-white text-center p-3 border border-cyan-900">Price</th>
              <th className="font-semibold text-white text-center p-3 border border-cyan-900">Action</th>
            </tr>
          </thead>
          <tbody className="shadow-md">
            <TabelList datas={datas} handleDelete={handleDelete} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelProduct;
