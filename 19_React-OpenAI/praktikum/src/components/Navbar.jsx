import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-5  shadow-md">
      <h1 className="font-semibold text-2xl text-slate-700">Barre_barre</h1>
      <ul className="flex">
        <li className="">
          <Link className="shadow-md rounded-sm font-semibold px-3 py-2 lowercase text-slate-700  mr-2" to="/home">
            Home
          </Link>
        </li>
        <li className="">
          <Link className="shadow-md rounded-sm font-semibold px-3 py-2 lowercase text-slate-700 " to="/products">
            Products
          </Link>
        </li>
        <li className="">
          <Link className="shadow-md rounded-sm font-semibold px-3 py-2 lowercase text-slate-700 " to="/openai">
            OpenAi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
