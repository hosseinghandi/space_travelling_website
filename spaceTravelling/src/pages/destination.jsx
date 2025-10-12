// import necessary method and library, framework
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// the component used for rendering this pages
import PlanetListMaker from "../components/planetListMaker";
import PlanetDescMaker from "../components/planetDescMaker";
import TitleMaker from "../components/titleMaker";

export default function Destination({ data }) {
  const deafultPlanet = data[0].name;
  // set the first item in the data list as deafult value
  const [planet, setPlanet] = useState(deafultPlanet);

  return (
    <div
      className="   min-h-screen overflow-auto scrollbar-hide
                    max-sm:bg-[url(./destination/background-destination-mobile.jpg)] 
                    md:bg-[url(./destination/background-destination-tablet.jpg)] 
                    lg:bg-[url(./destination/background-destination-desktop.jpg)] 
                    bg-cover bg-center bg-no-repeat fixed bottom-0 top-0  w-full "
    >
      {/* post holder  */}
      <main
        className="max-sm:pt-nav-mobile max-sm:px-header-mobile barlow
                            md:px-header-Tablet md:pt-nav-Tablet
                            lg:px-desktop lg:pt-nav-desktop
                            min-w-[375px] text-white-Pure
                            xlg:px-desktop-xlg
                            xlg:pt-nav-lg-desktop "
      >
        <TitleMaker code={"02"} text={"PICK YOUR DESTINATION"} />
        <section
          className="lg:flex lg:flex-row lg:gap-[32px] 
                            lg:justify-between lg:items-center 
                            xlg:justify-around "
        >
          {/* image holder and title holder */}
          <section
            className="flex flex-col justify-center 
                              items-center opacity-80 
                              xlg:w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={planet}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="my-[3.2rem] w-full"
              >
                <img
                  className=" max-sm:w-[150px] max-sm:h-[150px] max-lg:mx-auto
                              md:w-[300px] md:h-[300px]
                              lg:min-w-[380px] lg:min-h-[380px]
                              xlg:min-w-[700px] xlg:min-h-[700px]"
                  src={`./destination/image-${planet.toLowerCase()}.webp`}
                  alt={`an image of ${planet}`}
                />
              </motion.div>
            </AnimatePresence>
          </section>

          {/* description holder */}
          <section className="lg:min-h-[468px] ">
            <section
              className="flex flex-row max-md:px-[40px] gap-[38px] 
                                justify-center lg:justify-start "
            >
              {
                <PlanetListMaker
                  planetData={data}
                  set={setPlanet}
                  current={planet}
                />
              }
            </section>

            {<PlanetDescMaker planetData={data} current={planet} />}
          </section>
        </section>
      </main>
    </div>
  );
}
