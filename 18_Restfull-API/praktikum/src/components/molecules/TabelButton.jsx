import { useNavigate } from 'react-router-dom';

const TabelButton = ({ texts, val, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(`/products/${val.id}`)} className="bg-sky-600 px-2 py-1 rounded-md shadow-md font-semibold text-white mr-2">
        {texts[0]}
      </button>
      <button onClick={() => handleDelete(val.id)} className="bg-red-600 px-2 py-1 rounded-md shadow-md font-semibold text-white">
        {texts[1]}
      </button>
    </>
  );
};

export default TabelButton;
