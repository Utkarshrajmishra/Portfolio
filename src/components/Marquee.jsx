import Marquee from "react-fast-marquee"

const MarqueeComp=()=>{
  


    return (
      <Marquee className="bg-accent-400 w-full h-[150px] md:h-[170px] text-3xl md:text-5xl  mb-9 text-primary-300 font-general font-semibold">
        <p className="ml-10  tracking-wider"> I build beautiful things for the web</p>
        
        <p className="ml-10 tracking-wider">I build beautiful things for the web</p>
      </Marquee>
    );
}

export default MarqueeComp