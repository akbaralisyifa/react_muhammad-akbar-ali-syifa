import TabelList from './TabelList';
import { useSelector, useDispatch } from 'react-redux';
import { hapusProduk } from '../../store/produkSlice';

const TabelProduct = () => {
  const produks = useSelector((state) => state.produk.produks);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <table className="table my-5">
        <thead className="text-center">
          <tr>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Image</th>
            <th>Freshness</th>
            <th>Deskripsi</th>
            <th>Price</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {produks.map((data) => (
            <TabelList
              key={data.id}
              item={data}
              hapusProduk={() => {
                dispatch(hapusProduk(data.id));
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelProduct;
