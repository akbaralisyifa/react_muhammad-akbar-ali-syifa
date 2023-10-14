import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
  const navigate = useNavigate();

  const action = () => {
    navigate('/products');
  };

  return (
    <>
      <button onClick={action} className="bg-slate-400 text-white px-3 py-2 font-semibold text-sm lowercase rounded-md rounded-tl-3xl rounded-bl-3xl">
        « Back to product
      </button>
    </>
  );
};

export default ButtonBack;
