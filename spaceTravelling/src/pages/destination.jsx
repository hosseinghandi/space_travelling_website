import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// used component
import PlanetListMaker from "../components/planetListMaker";
import PlanetDescMaker from "../components/planetDescMaker";
import TitleMaker from "../components/titleMaker";

export default function Destination({ data }) {
  const [planet, setPlanet] = useState("moon");

  return (
    <main
      className="bg-[url(assets/destination/background-destination-mobile.jpg)] 
                text-white-Pure                     
                min-h-screen h-fit w-full bg-cover pt-nav-mobile px-header barlow min-w-[375px]"
    >
      {/* the title and instruction */}
      <TitleMaker code={"01"} text={"PICK YOUR DESTINATION"} />
      <section>
        {/* image holder and title holder */}
        <section className="flex flex-col justify-center items-center opacity-80">
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
                className={`w-[150px] h-[150px] mx-auto`}
                src={`assets/destination/image-${planet}.webp`}
                alt={`an image of ${planet}`}
              />
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="flex flex-row px-[40px] gap-[38px]">
          {
            <PlanetListMaker
              planetData={data}
              set={setPlanet}
              current={planet}
            />
          }
        </section>

        {/* description holder */}
        <section>
          {<PlanetDescMaker planetData={data} current={planet} />}
        </section>
      </section>
    </main>
  );
}
