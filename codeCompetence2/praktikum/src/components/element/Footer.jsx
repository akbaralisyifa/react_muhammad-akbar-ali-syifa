import github from '../../assets/github.png';
import ig from '../../assets/ig.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
  const medsos = [github, ig, twitter];

  return (
    <div className={`w-fullpt-72 pb-20 pt-20 bg-slate-300`}>
      <div className="flex justify-between mx-auto  w-52">
        {medsos.map((med, index) => (
          <a key={index} to={() => {}}>
            <img src={med} alt={med} className="inline-block w-12 filter opacity-70 hover:opacity-100 transition-all ease-in-out cursor-pointer" />
          </a>
        ))}
      </div>
      <p className="text-center pt-9 font-normal text-gray-600 font-firaSans">
        Hak Cipta &copy;<span className="text-black">Muhammad Akbar Ali Syifa</span> 2023
      </p>
    </div>
  );
};
export default Footer;
