// this component make the description for the input technology 
// that is set to the state of the APP
export default function technoDescMaker({ data }) {
  return (
    <div className="flex flex-col justify-center items-center
                    lg:items-start">
      <p className="Bellefair uppercase  mb-4 
                    max-sm:text-[1.5rem] md:text-[3.5rem]">{data.name}</p>
      <p
        className=" max-sm:text-[0.9375rem] md:text-[1rem] md:w-tablet
                    text-center  
                    text-white font-extralight leading-7
                    barlow-reg h-[180px] lg:text-justify"
      >
        {data.description}
      </p>
    </div>
  );
}
