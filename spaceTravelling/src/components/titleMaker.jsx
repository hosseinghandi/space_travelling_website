// in order to make a correct title with the same format this
// component takes the code of page and the title and render that
export default function TitleMaker({ code, text }) {
  return (
    <div className="flex flex-col">
      {/* section intro holder */}
      <div className="flex flex-col justify-center opacity-80
                      max-sm:items-center md:text-center 
                      lg:text-left  
                      ">
        <p className="text-[1.25rem] font-light md:text-[1.75rem]
                      xlg:text-[3rem]">
          <span className=" text-[1rem] md:text-[1.5rem] mr-10 font-bold 
                            opacity-50 xlg:text-[2rem]">{code}</span>
          {text}
        </p>
      </div>
    </div>
  );
}
