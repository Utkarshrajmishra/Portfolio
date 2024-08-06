import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <Marquee className="bg-accent-400 w-full h-[150px] md:h-[170px] text-3xl md:text-5xl mb-9 text-primary-300 font-general font-semibold">
      <div className="flex items-center justify-center gap-10">
        <div className="w-6 h-6 bg-primary-300 rounded-full"></div>
        <p className="tracking-wider">
          I build beautiful things for the web
        </p>
        <div className="w-6 h-6 bg-primary-300 rounded-full"></div>
        <p className="tracking-wider">
          I build beautiful things for the web
        </p>
      </div>
    </Marquee>
  );
};

export default MarqueeComp;
