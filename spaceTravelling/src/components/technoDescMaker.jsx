// this component make the description for the input technology 
// that is set to the state of the APP
export default function technoDescMaker({ data }) {
  return (
    <div className="flex flex-col justify-center items-center
                    lg:items-start lg:justify-between">
      <p className="Bellefair uppercase  mb-4 
                    max-sm:text-[1.5rem] md:text-[3.5rem]
                    xlg:text-[5.5rem]">{data.name}</p>
      <p
        className=" text-center text-white font-extralight
                    max-sm:text-[0.9375rem] 
                    md:text-[1rem] 
                    lg:text-[1.25rem]
                    max-lg:leading-7
                    xlg:text-[1.75rem]
                    md:w-tablet lg:w-[600px]
                    barlow-reg max-lg:h-[180px] 
                    lg:text-justify min-lg:h-auto
                    xlg:w-desktop-xlg-technology-desc
                    xlg:h-[220px] 
                    "
      >
        {data.description}
      </p>
    </div>
  );
}
