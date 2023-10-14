import TabelButton from './molecules/TabelButton';

const TabelList = ({ datas, handleDelete }) => {
  return (
    <>
      {datas.map((val, index) => {
        return (
          <tr key={val.id}>
            <td className="border border-s-lime-200 text-sm text-center p-2">{index + 1}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.name}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.category}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.freshness}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">$ {val.price}</td>

            <td className="border border-s-lime-200 text-sm text-center p-2">
              <TabelButton val={val} texts={['Edit', 'Delete']} handleDelete={handleDelete} />
              {/* <button onClick={() => handleDelete(val.id)}>Delete</button> */}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TabelList;
