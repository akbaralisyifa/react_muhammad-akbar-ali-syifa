import AtomHeader from '../atom/atomHeader';
import HomeImage from '../atom/homeImage';

const HomeHeader = () => {
  return (
    <div>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center lg:w-1/2">
              <AtomHeader />
            </div>

            {/* Bagian image */}
            <div className="w-full self-center lg:w-1/2 lg:px-0">
              <HomeImage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
