export default function numberMaker ({current,set}) {
        const num= Array.from({length: 3},( _ , i) => i + 1)
        return (
            num.map( n => (
                <div
                    key={n}
                    onClick={ () => set ( prev => prev=n )}
                    className={
                        ` h-[40px] w-[40px] border-1 text-2xl 
                                flex justify-center items-center rounded-full
                                ${current === n ? "border-none bg-white-Pure text-black" 
                                : "border-gray-500 text-white-Pure"}`}>
                    <span className="Bellefair text-[1.125rem]" 
                    >{n}
                    </span>
                </div> 

            ))
        )
    }