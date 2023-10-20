const AtomHeader = () => {
  return (
    <>
      <h1 className="text-primary text-5xl font-semibold mb-3 font-fontHead lg:text-7xl">WELCOME TO MY PORTFOLIO ✨</h1>
      <p className="text-slate-600 font-medium mb-3 text-md lg:text-xl">
        Front-End Web Developer | <span className="text-slate-900">Digital Business Students </span>
      </p>
      <p className="font-fontMy text-justify mb-5 lg:text-xl lg:mb-8">
        Kamu tidak perlu menjadi seorang jenius untuk menjadi seorang programmer. Kamu hanya perlu menjadi penasaran. <span className="italic text-sm text-slate-500">-Naval Ravikant</span>
      </p>
      <a className="text-base px-5 py-2 bg-primary rounded-full font-semibold text-white hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out lg:text-xl lg:px-9 lg:py-4" href="">
        My LinkedIn
      </a>
    </>
  );
};

export default AtomHeader;
