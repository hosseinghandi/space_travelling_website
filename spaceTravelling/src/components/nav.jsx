// this component should render the nav bar and adopt it to the screen size

// import necessary data for making the nav bar
import logo from "/shared/logo.svg";
import hamburger from "/shared/icon-hamburger.svg";
import closeTab from "/shared/icon-close.svg";

export default function Nav({ menoVisibile, setVisibile, set, current }) {
  return (
    <div
      className="max-sm:px-header-mobile fixed w-full z-49
                    md:items-center md:justify-center md:h-[6rem]
                    md:flex md:flex-row md:px-header-Tablet 
                    lg:px-header-desktop xlg:mt-8
                    "
    >
      {/* this div related to the holder of the nav items which for 
      making responsive needs to be changed */}
      <nav
        className={
          `            flex fixed flex-col text-white 
          
                                
                                max-sm:w-[70vw] max-sm:h-[100%] 
                                backdrop-blur-[40px] max-sm:z-2 
                                ${
                                  menoVisibile
                                    ? "right-0"
                                    : "max-sm:-right-100 max-sm:opacity-0"
                                }
                                max-sm:transform max-sm:transition-all 
                                max-sm:ease-in-out max-sm:duration-[2100ms]
                                
                                md:opacity-100 
                                md:justify-center md:items-center
                                md:ml-[8rem] md:w-[84%] md:h-[6rem]
                                md:z-50 md:bg-[#FFFFFF05]

                                lg:w-[64%] lg:right-0
                                
                                xlg:h-[10rem] xlg:font-light
                                xlg:w-[60%]
                                `

          /* Navigation Links */
        }
      >
        {/* this div is responsibile for wrappeing 
        the nav elements inside the holder */}
        <div
          className=" flex flex-col max-sm:gap-[2rem] barlow text-left
                      max-sm:ml-8 max-sm:mt-30  md:items-center
                      md:flex-row ml-[7.375rem] md:gap-[4rem] 
                      md:h-[6rem]  md:w-[100%]
                      xlg:text-[1.5rem] 
                      xlg:justify-center 
                      xlg:gap-36 xlg:ml-0"
        >
          {/* home element */}
          <div
            onClick={() => {
              set("Home");
              setVisibile((prev) => !prev);
            }}
            className={`z-2 ${
              current === "Home"
                ? "max-sm:border-r-4 md:border-b-2 md:scale-125 "
                : "max-sm:active:border-r-4 border-gray-500 md:active:border-b-2"
            }      md:h-[80%] md:flex md:flex-col md:items-center md:justify-center `}
          >
            <div>
              <span className="font-bold mr-3 md:mr-2 ">00</span>Home
            </div>
          </div>

          {/*  Crew */}
          <div
            onClick={() => {
              console.log("clicked");
              set("Crew");
              setVisibile((prev) => !prev);
            }}
            className={`z-2 ${
              current === "Crew"
                ? "max-sm:border-r-4 md:border-b-2 md:scale-125 "
                : "max-sm:active:border-r-4 border-gray-500 md:active:border-b-2"
            }      md:h-[80%] md:flex md:flex-col md:items-center md:justify-center`}
          >
            <div>
              <span className="font-bold mr-3 md:mr-2">01</span>Crew
            </div>
          </div>

          {/*  Destination */}
          <div
            onClick={() => {
              set("Destination");
              setVisibile((prev) => !prev);
            }}
            className={`z-2 ${
              current === "Destination"
                ? "max-sm:border-r-4 md:border-b-2 md:scale-125 "
                : "max-sm:active:border-r-4 border-gray-500 md:active:border-b-2"
            }      md:h-[80%] md:flex md:flex-col md:items-center md:justify-center`}
          >
            <div>
              <span className="font-bold mr-3 md:mr-2">02</span> Destination
            </div>
          </div>

          {/* Techno */}
          <div
            onClick={() => {
              set("Techno");
              setVisibile((prev) => !prev);
            }}
            className={`z-2 ${
              current === "Techno"
                ? "max-sm:border-r-4 md:border-b-2 md:scale-125 "
                : "max-sm:active:border-r-4 border-gray-500 md:active:border-b-2"
            }      md:h-[80%] md:flex md:flex-col md:items-center md:justify-center`}
          >
            <div>
              <span className="font-bold mr-3 md:mr-2">03</span>Technology
            </div>
          </div>
        </div>
      </nav>
      {/* logo holder which in case of mobile the those 
      below "hamburger" and "closeTab" would be hidden*/}
      <div
        className="    flex flex-row justify-between items-center 
                        py-header-mobile w-full max-sm:z-3 md:z-0 relative"
      >
        <div>
          <img
            onClick={() => {
              set("Home");
            }}
            className="w-[40px] h-[40px] rotate-0 
            active:rotate-360 hover:rotate-360 
            
                      hover:cursor-pointer
                      transform transition-all duration-[2100ms] 
                      ease-in-out 
                      md:w-[48px] md:h-[48px] 
                      xlg:w-[68px] xlg:h-[68px] "
            src={logo}
            alt="logo of space travelling"
          />
        </div>

        <img
          className={`absolute left-full -ml-4
             
                                ${
                                  !menoVisibile
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 rotate-90"
                                } 
                                transform transition-all duration-[2100ms] ease-in-out
                                md:hidden`}
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
                                transform transition-all duration-[2200ms] ease-in-out
                                md:hidden`}
          onClick={() => setVisibile((prev) => !prev)}
          style={{}}
          src={closeTab}
          alt=" a hamburger-meno icon"
        />
      </div>
      <div
        className=" 
                      max-md:hidden h-[1px] w-[50%] bg-gray-600  
                      left-21 -z-1 lg:fixed xlg:h-[3px]"
      ></div>
    </div>
  );
}
