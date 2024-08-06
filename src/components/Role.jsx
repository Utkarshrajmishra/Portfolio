
const Role = ({roleRef}) =>{
    return (
      <section className="md:px-16 px-4 items-center w-full flex h-[60vh] bg-secondary-100">
        <div className="text-center">
          <p ref={roleRef} className="text-secondary-700 font-grotesk text-5xl tracking-wider font-bold">
            {' '}
            I create elevating digital experiences that inspire and connect with
            people through development and design.
          </p>
        </div>
      </section>
    );
}

export default Role;