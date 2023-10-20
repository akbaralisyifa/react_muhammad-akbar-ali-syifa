import AtomImgAbout from '../atom/AtomImgAbout';
import AtomParagram from '../atom/atomParagraf';

const About = () => {
  return (
    <div className="mt-12 py-32 bg-slate-300">
      <div className="container">
        <div className="pb-20">
          <h1 className="font-bold font-fontHead uppercase text-center text-5xl text-primary drop-shadow-xl">About Us</h1>
        </div>
        <div className="flex flex-wrap items-center">
          <AtomParagram />
          <AtomImgAbout />
        </div>
      </div>
    </div>
  );
};

export default About;
