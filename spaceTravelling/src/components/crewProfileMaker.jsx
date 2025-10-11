// this component gets the current persona either selected by user or 
// from the initial state of the UseState to feed the HTML of this part
export default function CrewProfileMaker({ current }) {
  return (
    <section
      key={current.name}
      className="flex flex-col items-center 
                 text-white-Pure 
                 max-sm:my-4
                 md:mt-12 md:mb-6
                 lg:items-start "
    >
      <div className="flex flex-col 
                      max-md:items-center ">
        <p
          className="Bellefair text-white-Pure 
                     uppercase opacity-50 font-light
                     md:text-center lg:text-left 
                     max-sm:text-[1.125rem] 
                     md:text-[1.75rem]
                     xlg:text-[3.5rem]
                     "
        >
          {current.role}
        </p>
        <p
          className="uppercase tracking-[2px] 
                     opacity-90 barlow font-light
                     max-sm:text-[1.5rem] md:text-[2.5rem]
                     xlg:text-[5.5rem]"
        >
          {current.name}
        </p>
      </div>
      <p
        className="text-center mt-4 barlow-reg text-white font-extralight
                   max-lg:leading-7 
                   max-sm:min-h-[150px]
                   md:text-[1rem] md:w-tablet 
                   md:min-h-[120px]
                   lg:w-desktop
                   lg:text-justify
                   xlg:w-desktop-xlg
                   xlg:text-[2rem]"
      >
        {current.bio}
      </p>
    </section>
  );
}
