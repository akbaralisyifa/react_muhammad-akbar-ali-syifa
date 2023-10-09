import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputCategory from './molecules/inputCategory';
import InputName from './molecules/InputProduct';
import InputPrice from './molecules/inputPrice';
import ButtonBack from './molecules/ButtonBack';
import { addProductAsync } from '../store/productSlice';

const DataEmty = {
  name: '',
  category: '',
  freshness: '',
  price: 0,
};

const FormProduct = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(DataEmty);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addProductAsync(data));
    navigate('/products');
  };

  return (
    <div className="w-1/3 m-auto shadow-lg rounded-md mt-10 p-10">
      <div>
        <ButtonBack />
      </div>
      <div className="flex justify-center mb-3">
        <h1 className="font-bold uppercase text-2xl text-slate-600">Create Product</h1>
      </div>
      <form className="flex flex-col justify-center">
        <InputName label="Product Name" type="text" name="name" value={data.name} onChange={handleChange} />
        <InputCategory label="Product Category" name="category" values={['Shirt', 'T-Shirt', 'Jacket']} value={data.category} onChange={handleChange} />

        <div className="my-5 flex flex-col">
          <label className="block font-normal mb-2 lowercase text-slate-600 text-2xl">Product Freshness</label>
          <label class="inline-flex items-center">
            <input type="radio" name="freshness" value="Brand New" checked={data.freshness == 'Brand New'} onChange={handleChange} class="form-radio h-5 w-5 text-indigo-600" />
            <span class="ml-2 text-gray-700">Brand New</span>
          </label>

          <label class="inline-flex items-center">
            <input type="radio" name="freshness" value="Second Hand" checked={data.freshness == 'Second Hand'} onChange={handleChange} class="form-radio h-5 w-5 text-indigo-600 " />
            <span class="ml-2 text-gray-700">Second Hand</span>
          </label>

          <label class="inline-flex items-center">
            <input type="radio" name="freshness" value="Refurbish" checked={data.freshness == 'Refurbish'} onChange={handleChange} class="form-radio h-5 w-5 text-indigo-600" />
            <span class="ml-2 text-gray-700">Refurbish</span>
          </label>
        </div>

        <InputPrice name="price" type="number" value={data.price} onChange={handleChange} />

        <button onClick={handleSubmit} className="bg-cyan-600 w-4/5 py-2 rounded-md mx-auto font-semibold text-white lowercase mt-10 ">
          Create Products
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
