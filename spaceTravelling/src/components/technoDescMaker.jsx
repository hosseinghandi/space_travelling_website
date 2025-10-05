export default function technoDescMaker({ data }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="Bellefair text-[1.5rem] uppercase  mb-4">
        {data.name}</p>
      <p className="text-center text-[0.9375rem] 
                    text-white font-extralight leading-7
                    barlow-reg h-[180px] ">
        {data.description}</p>
    </div>
  );
}
