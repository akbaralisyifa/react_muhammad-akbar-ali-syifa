import TabelList from './TabelList';

const TabelProduct = ({ data }) => {
  // "name": "name 1",
  // "category": "category 1",
  // "freshness": "freshness 1",
  // "price": 66,
  // "id": "1"

  return (
    <>
      <div className="container w-1/2 flex mx-auto mt-10">
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
            <TabelList items={data} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelProduct;
