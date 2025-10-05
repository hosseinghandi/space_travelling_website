export default function PlanetListMaker ({planetData,set,current}) {
    
  return (planetData.map((p) => (
      <div key={p.name} className="flex flex-col text-white-Pure">
        <div className="w-full flex flex-row justify-between ">
          <div
            onClick={() => set(p.name.toLowerCase())}
            className={`        
                                        ${
                                          current.toLowerCase() === p.name.toLowerCase() &&
                                          "border-b-3 border-white"
                                        } 
                                        w-fit h-[32px] barlow `}
          >
            <span className="text-white text-[0.85rem] tracking-[0.15em]">
              {p.name.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    ))
)
}