export default function CrewProfileMaker({ current }) {
  return (
    <section
      key={current.name}
      className="flex flex-col items-center 
                                    text-white-Pure my-4 pt-[40px]"
    >
      <div className="flex flex-col items-center ">
        <p
          className="Bellefair text-white-Pure text-[1.125rem] 
                                    uppercase opacity-50 font-"
        >
          {current.role}
        </p>
        <p
          className="text-[1.5rem] uppercase tracking-[2px] 
                                    opacity-90 barlow font-light"
        >
          {current.name}
        </p>
      </div>
      <p
        className="text-center mt-6 min-h-[170px] 
                                   font-extralight leading-7 barlow-reg text-white"
      >
        {current.bio}
      </p>
    </section>
  );
}
