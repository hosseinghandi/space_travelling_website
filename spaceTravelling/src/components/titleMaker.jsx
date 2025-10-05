export default function TitleMaker({code, text}) {
return (
    <div className="flex flex-col">

            {/* section intro holder */}
            <div className="flex flex-col justify-center items-center opacity-80 mb-22">
                <p className="text-[1.25rem] font-light">
                <span className="text-[1rem] mr-10 font-bold opacity-50">
                    {code}
                </span>
                {text}
                </p>
            </div>
    </div>
)
} 
