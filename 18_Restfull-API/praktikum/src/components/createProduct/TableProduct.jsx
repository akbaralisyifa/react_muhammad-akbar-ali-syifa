import TabelList from './TabelList';

const TabelProduct = (props) => {
  const { datas, hapusProduk } = props;
  return (
    <div className="container">
      <table className="table my-5">
        <thead className="text-center">
          <tr>
            <th>Nama</th>
            <th>Kategori</th>
            {/* <th>Image</th> */}
            <th>Freshness</th>
            {/* <th>Deskripsi</th> */}
            <th>Price</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {datas.map((data) => (
            <TabelList key={data.id} item={data} hapusProduk={hapusProduk} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelProduct;
