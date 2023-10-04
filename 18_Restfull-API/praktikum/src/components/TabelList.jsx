const TabelList = ({ items }) => {
  return (
    <>
      {items.map((val) => {
        return (
          <tr key={val.id}>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.id}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.name}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.category}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">{val.freshness}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">$ {val.price}</td>
            <td className="border border-s-lime-200 text-sm text-center p-2">
              <button>Detail</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TabelList;
