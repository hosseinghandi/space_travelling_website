import logo from "/assets/shared/logo.svg"
import hamburger from "/assets/shared/icon-hamburger.svg"
import closeTab from "/assets/shared/icon-close.svg"

export default function Nav({ menoVisibile, setVisibile,set }) {
  return (
    <div className="px-header fixed w-full z-999">
      <nav
        className={`flex flex-col h-[100%] fixed  
                                w-[70vw] bg-[rgba(11,13,23,0.15)] 
                                backdrop-blur-[40px]  z-2 text-white 
                                ${
                                  menoVisibile
                                    ? "right-0 "
                                    : "-right-100 opacity-0"
                                }
                                transform transition-all ease-in-out duration-[2100ms]
                                `}
      >
        <div
          className="mt-30 ml-8 flex flex-col gap-[2rem] barlow 
                                text-left"
        >
          <div className="border-r-4">
            <a onClick={set("Home") }>
              <span className="font-bold mr-3">00</span>Home
            </a>
          </div>
          <div className="active:border-r-4 border-gray-500">
            <a onClick={set("Destination") }>
              <span className="font-bold mr-3">01</span>Crew
            </a>
          </div>

          <div className="active:border-r-4 border-gray-500">
            <a onClick={set("Crew") }>
              <span className="font-bold mr-3">02</span> Destination
            </a>
          </div>

          <div className="active:border-r-4 border-gray-500">
            <a onClick={set("Techno") }>
              <span className="font-bold mr-3">03</span>Technology
            </a>
          </div>
        </div>
      </nav>
      <div
        className="    flex flex-row justify-between items-center 
                            py-header w-full z-3 relative"
      >
        <img
          className="w-[40px] h-[40px]"
          src={logo}
          alt="logo of space travelling"
        />

        <img
          className={`absolute left-full -ml-4 
                                ${
                                  !menoVisibile
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 rotate-90"
                                } 
                                transform transition-all duration-[2100ms] ease-in-out`}
          onClick={() => setVisibile((prev) => !prev)}
          src={hamburger}
          alt=" a hamburger-meno icon"
        />

        <img
          className={`absolute left-full -ml-4 
                                ${
                                  menoVisibile
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 rotate-90"
                                } 
                                transform transition-all duration-[2200ms] ease-in-out`}
          onClick={() => setVisibile((prev) => !prev)}
          style={{}}
          src={closeTab}
          alt=" a hamburger-meno icon"
        />
      </div>
    </div>
  );
}
