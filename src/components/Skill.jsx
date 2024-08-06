import { SkillSet } from '../constants/SkillSet';

const Skill = () => {
  return (
    <>
      <section className="py-20 md:px-24 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col gap-5 font-general md:w-[50%]">
            <h3 className="text-3xl md:text-5xl font-semibold">
              My Digital Tool Box
            </h3>
            <p className="text-lg md:text-xl">
              These are my go-to tech stack to make any projects happen. I am
              always eager to learn more about my current stack, and new
              technologies that could expand my horizons.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3 items-center md:w-[50%] text-left">
            {SkillSet?.map((items) => (
              <p
                key={items.id}
                className="text-secondary-500 text-left font-general text-2xl md:text-5xl font-semibold"
              >
                {items.title}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
