// for switching to another item, motion and anmiateprecense is used
import { motion, AnimatePresence } from "framer-motion";

// this componenet takes the planet data and the current presented planet
// which is getting from react state
export default function planetDescMaker({ planetData, current }) {
  const planetToRender = planetData.find(
    (p) => p.name.toLowerCase() === current.toLowerCase()
  );

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={planetToRender.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className=" min-xlg:w-desktop-xlg-destination-desc 
                    lg:w-[420px]"
      >
        <div
          className=" flex flex-col justify-center items-center  
                      w-full my-6 text-white-Pure 
                      lg:items-start "
        >
          <h1
            className=" Bellefair uppercase 
                          max-sm:text-4xl md:text-8xl 
                          xlg:text-[15rem]"
          >
            {planetToRender.name}
          </h1>
          <p
            className="mt-4 border-gray-500 text-center text-[0.9375rem] 
                       text-white font-extralight 
                       barlow-reg mb-6  

                       max-sm:border-b-1 max-sm:pb-6 max-lg:leading-7
                       md:text-[1rem] md:w-tablet 
                       md:border-b-2 md:pb-7

                       lg:w-desktop-destination
                       lg:text-justify  
                       
                       min-xlg:w-desktop-xlg-destination-desc
                       xlg:text-[1.75rem] 
                       min-xlg:h-[200px] 
                       
                                          "
          >
            {planetToRender.description}
          </p>
        </div>
        <div
          className="flex flex-col justify-center gap-4
                     items-center text-white-Pure text-center
                       
                     md:flex-row md:justify-around md:mx-auto
                     min-md:mb-12 md:w-tablet

                     lg:w-desktop-destination
                     xlg:w-desktop-xlg-destination-desc
                     "
        >
          <div>
            <p
              className="uppercase text-[0.875rem] font-light 
                              tracking-[2px] text-white-Pure 
                              xlg:text-[1.75rem]"
            >
              AVG. DISTANCE
            </p>
            <p className="text-[1.75rem] Bellefair xlg:text-[1.5rem]">
              {planetToRender.distance}
            </p>
          </div>
          <div>
            <p
              className="uppercase text-[0.875rem] font-light 
                              tracking-[2px] text-white-Pure xlg:text-[1.75rem]"
            >
              Est. travel time
            </p>
            <p className="text-[1.75rem] Bellefair xlg:text-[1.5rem]">
              {planetToRender.travel}
            </p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
