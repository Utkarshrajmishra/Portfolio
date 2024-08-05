import { NavLinks } from '../constants/NavLinks';

const NavBar = () => {
  return (
    <section className="flex md:px-16 px-4 items-center py-5 justify-between">
      <h5 className="font-grotesk font-black text-3xl text-accent-400">
        utkarsh
      </h5>
      <ul className="font-grotesk flex gap-7 items-center">
        {NavLinks?.map((items) => (
          <li
            key={items.id}
            className={`relative text-xl  ${
              items.type === 'button'
                ? 'py-1 px-4 bg-accent-400 text-secondary-100 rounded-full'
                : 'text-accent-400'
            }`}
          >
            <span className="relative z-10">{items.title}</span>
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavBar;