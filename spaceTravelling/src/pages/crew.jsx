// importing necessary library and methods
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// the component used for rendering this pages
import CrewProfileMaker from "../components/crewProfileMaker";
import TitleMaker from "../components/titleMaker";

export default function Crew({ data }) {
  // set the crew that should be presented which as deafult is
  // the first crew of the JSON file
  const deafultPersona = data[0].name;
  const [crewPersona, setCrewPerson] = useState(deafultPersona);
  const crewPresenting = data.find(
    (crew) => crew.name.toLowerCase() === crewPersona.toLowerCase()
  );

  const bubbleMaker = () =>
    data.map((persona) => (
      <span
        key={persona.name}
        onClick={() => {
          setCrewPerson(persona.name);
        }}
        className={`max-sm:w-[10px] max-sm:h-[10px]
                    min-md:w-[15px] min-md:h-[15px]
                    xlg:w-[20px] xlg:h-[20px]
                        ${
                          persona.name.toLowerCase() ===
                          crewPersona.toLowerCase()
                            ? "bg-white-Pure"
                            : "bg-gray-500"
                        } 
                            rounded-full  text-white`}
      ></span>
    ));

  return (
    <>
      <div
        className="min-h-screen overflow-auto scrollbar-hide
                    max-sm:bg-[url(assets/crew/background-crew-mobile.jpg)] 
                    md:bg-[url(assets/crew/background-crew-tablet.jpg)] 
                    lg:bg-[url(assets/crew/background-crew-desktop.jpg)] 
                    bg-cover bg-center bg-no-repeat fixed bottom-0 top-0 w-full "
      >
        {/* post holder  */}
        <main
          className="       relative
                            max-sm:pt-nav-mobile max-sm:px-header-mobile
                            md:px-header-Tablet md:pt-nav-Tablet 
                            lg:px-desktop lg:pt-nav-desktop
                            xlg:px-desktop-xlg
                            xlg:pt-nav-lg-desktop
                            barlow min-w-[375px] text-white-Pure"
        >
          {<TitleMaker code={"01"} text={"MEET YOUR CREW"} />}

          {/* detail holder upper part */}
          <AnimatePresence mode="wait">
            <motion.section
              key={crewPersona}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className=" flex flex-col justify-center 
                          lg:flex-row lg:justify-between "
            >
              <section>
                {/* component to render the crew profile */}
                {<CrewProfileMaker current={crewPresenting} />}

                <div
                  className=" flex flex-row gap-4 mb-4 
                              justify-center lg:fixed  min-lg:bottom-[45px]"
                >
                  {/* this bubble maker makes the points by which the 
                crew will be altered */}
                  {bubbleMaker()}
                </div>
              </section>
              {/* crew's image holder */}
              <div
                className=" flex flex-col 
                    justify-center items-center"
              >
                <img
                  loading="lazy"
                  className="min-lg:absoulte  min-md:bottom-0 
                             max-sm:max-h-[320px] max-md:max-h-[380px] 
                             max-lg:max-h-[50vw] min-lg:fixed min-lg:right-20
                             max-slg:max-h-[600px]
                             xlg:h-[40vw] xlg:right-desktop-xlg 
                             "
                  src={`${crewPresenting.images.webp}`}
                  alt={`an image of ${crewPresenting}`}
                />
              </div>
            </motion.section>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
