export default function numberMaker({ current, set, listNum }) {
  // this make an array for making 4 clickable circle, in
  // inc case of adding more data is paramteric
  const num = Array.from({ length: listNum }, (_, i) => i + 1);
  return num.map((n) => (
    <div
      key={n}
      onClick={() => set((prev) => (prev = n))}
      className={`  max-sm:h-[40px] max-sm:w-[40px] 
                    md:h-[56px] md:w-[56px] 
                    lg:h-[80px] lg:w-[80px] 
                    xlg:h-[110px] xlg:w-[110px] 
                    
                    border-1 text-2xl 
                    flex justify-center items-center rounded-full
                                ${
                                  current === n
                                    ? "border-none bg-white-Pure text-black"
                                    : "border-gray-500 text-white-Pure"
                                }`}
    >
      <span
        className=" Bellefair 
                        max-sm:text-[1.125rem] 
                        md:text-[1.5rem] 
                        xlg:text-[2rem]
                        xlg:font-bold"
      >
        {n}
      </span>
    </div>
  ));
}
