import { useState } from 'react';

const DataEmty = {
  name: '',
  category: '',
  freshness: '',
  price: 0,
};

const FormProduct = () => {
  const [data, setData] = useState(DataEmty);

  return (
    <div className="w-1/3 m-auto shadow-lg rounded-md mt-10 p-10">
      <div className="flex justify-center mb-3">
        <h1 className="font-bold uppercase text-2xl text-slate-600">Create Product</h1>
      </div>
      <form>
        <label>
          Product Name
          <input type="text" name="name" value={data.name} onChange={() => {}} />
        </label>
      </form>
    </div>
  );
};

export default FormProduct;
