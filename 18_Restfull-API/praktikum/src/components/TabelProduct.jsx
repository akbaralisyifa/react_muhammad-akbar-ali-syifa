const TabelProduct = ({ datas }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.category}</td>
              <td>{data.freshness}</td>
              <td>$ {data.price}</td>
              <td>
                <button>Detail</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TabelProduct;
